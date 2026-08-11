/**
 * Shared audio engine for the Music Theory book.
 * Load this ONCE in index.html (in <head> or before your other scripts):
 *   <script src="js/audio-engine.js"></script>
 *
 * It creates a single AudioContext for the whole page (lazily, on first
 * user click, to satisfy browser autoplay policy) and exposes helpers
 * on window.MTAudio that every chapter's inline widget script can call.
 * Because this file is a normal <script src> tag loaded once at page
 * load — not injected via innerHTML — it survives chapter navigation
 * and never gets re-created or duplicated.
 */
(function () {
  "use strict";

  if (window.MTAudio) return; // idempotent guard, in case this ever loads twice

  var ctx = null;

  function getCtx() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      ctx = new AC();
    }
    if (ctx.state === "suspended") ctx.resume();
    return ctx;
  }

  var NOTE_NAMES = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];

  function midiToFreq(midi) {
    return 440 * Math.pow(2, (midi - 69) / 12);
  }

  // type: "sine" (default) uses the richer piano-like additive tone below.
  // Any other explicit waveform ("square", "triangle") falls back to a simple single oscillator.
  // peakGain: optional 0–1 volume peak (default 0.28) — used for loudness/dynamics demos
  function playTone(freq, startOffset, duration, type, peakGain) {
    var c = getCtx();
    var t0 = c.currentTime + (startOffset || 0);
    var dur = duration || 0.6;
    var peak = peakGain === undefined ? 0.28 : peakGain;

    if (type && type !== "sine") {
      var osc = c.createOscillator();
      var gain = c.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t0);
      gain.gain.setValueAtTime(0, t0);
      gain.gain.linearRampToValueAtTime(peak, t0 + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      osc.connect(gain);
      gain.connect(c.destination);
      osc.start(t0);
      osc.stop(t0 + dur + 0.05);
      return { osc: osc, gain: gain, t0: t0, dur: dur };
    }

    // Piano-like tone via additive synthesis: a fundamental plus five quieter
    // harmonics, each with a fast attack and its own decay. Higher harmonics
    // fade faster than the fundamental, which is part of what makes a struck
    // string sound different from a flat, single-frequency beep.
    var HARMONICS = [
      { mult: 1, amp: 0.52 },
      { mult: 2, amp: 0.24 },
      { mult: 3, amp: 0.13 },
      { mult: 4, amp: 0.06 },
      { mult: 5, amp: 0.03 },
      { mult: 6, amp: 0.02 }
    ];
    var attack = 0.006;
    var oscillators = [];
    HARMONICS.forEach(function (h, i) {
      var hOsc = c.createOscillator();
      var hGain = c.createGain();
      hOsc.type = "sine";
      hOsc.frequency.setValueAtTime(freq * h.mult, t0);
      var harmonicDur = dur * (1 - i * 0.09);
      if (harmonicDur < dur * 0.4) harmonicDur = dur * 0.4;
      hGain.gain.setValueAtTime(0, t0);
      hGain.gain.linearRampToValueAtTime(h.amp * peak, t0 + attack);
      hGain.gain.exponentialRampToValueAtTime(0.0001, t0 + harmonicDur);
      hOsc.connect(hGain);
      hGain.connect(c.destination);
      hOsc.start(t0);
      hOsc.stop(t0 + dur + 0.05);
      oscillators.push(hOsc);
    });

    return { oscillators: oscillators, t0: t0, dur: dur };
  }

  function playMidiNote(midi, startOffset, duration, type, peakGain) {
    return playTone(midiToFreq(midi), startOffset, duration, type, peakGain);
  }

  // Simple click/beat sound for rhythm & metronome widgets (Chapter 3, etc.)
  function playClick(startOffset, accent) {
    var c = getCtx();
    var t0 = c.currentTime + (startOffset || 0);
    var osc = c.createOscillator();
    var gain = c.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(accent ? 1400 : 900, t0);
    gain.gain.setValueAtTime(0, t0);
    gain.gain.linearRampToValueAtTime(accent ? 0.35 : 0.22, t0 + 0.002);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.08);
    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + 0.1);
  }

  window.MTAudio = {
    getCtx: getCtx,
    midiToFreq: midiToFreq,
    playTone: playTone,
    playMidiNote: playMidiNote,
    playClick: playClick,
    NOTE_NAMES: NOTE_NAMES
  };
})();
