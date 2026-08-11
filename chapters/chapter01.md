# Chapter 1 — What Is Music Theory?

## Learning Objectives

By the end of this chapter, you should be able to:

- Explain what music theory is.
- Understand the difference between sound and music.
- Describe the concepts of pitch, frequency, and loudness.
- Name the seven musical note letters.
- Explain what an octave is.
- Understand enharmonic equivalents.

> 🎧 This chapter is interactive — click the widgets as you go to *hear* pitch, frequency, and loudness instead of just reading about them.

---

# What Is Music Theory?

Music theory is the study of how music works. It provides a language for describing and understanding melodies, rhythms, chords, scales, harmony, and musical structure.

Just as grammar helps us understand and communicate in a spoken language, music theory helps musicians understand and communicate musical ideas.

Learning music theory does **not** automatically make someone a great musician. Likewise, many talented musicians have little formal knowledge of music theory. Instead, music theory helps explain *why* certain musical ideas sound pleasing, tense, or expressive, making it easier to learn, perform, compose, and analyze music.

---

# Why Learn Music Theory?

Music theory provides many practical benefits, including:

- Reading and writing sheet music.
- Learning songs more quickly.
- Understanding scales and chords.
- Communicating with other musicians.
- Improvising with greater confidence.
- Composing original music.
- Analyzing existing music.

Whether you play piano, guitar, violin, drums, or produce music electronically, a basic understanding of music theory makes learning easier.

---

# Sound vs. Music

Everything we hear begins as **sound**, which is created when an object vibrates.

Examples include:

- A guitar string vibrating.
- Air passing through a flute.
- A drumhead vibrating after being struck.
- Vocal cords vibrating while singing.

These vibrations travel through the air as sound waves until they reach our ears.

Not every sound is considered music.

Examples of sounds:

- Traffic
- Rain
- A dog barking
- Wind
- A piano note

Music is an organized arrangement of sounds that usually includes:

- Pitch
- Rhythm
- Harmony
- Melody
- Dynamics

Although some modern musical styles intentionally blur the distinction between sound and music, most music is built from organized patterns rather than random noise.

---

# Pitch

**Pitch** describes how high or low a sound appears to our ears.

Higher pitch:
- Whistle
- Birdsong
- Small bells

Lower pitch:
- Bass guitar
- Tuba
- Thunder

Pitch is determined by the frequency of vibration.

Generally:

- Faster vibration → Higher pitch
- Slower vibration → Lower pitch

---

# Frequency

**Frequency** is the number of vibrations per second. It is measured in **Hertz (Hz)**.

| Frequency | Approximate Note |
|-----------|------------------|
| 110 Hz | A2 |
| 220 Hz | A3 |
| 440 Hz | A4 (Concert A) |
| 880 Hz | A5 |

Notice that each time the frequency doubles, we hear the note as the same musical note at a higher pitch (an octave higher). Although 220 Hz, 440 Hz, and 880 Hz are all different frequencies, they all sound like versions of the note **A**.

### 🎚️ Try it — Pitch & Frequency Explorer

Drag the slider to any frequency between 80 Hz and 1000 Hz and press play. Watch how the nearest musical note updates as you move through the range — this is the direct link between a raw number (Hz) and a note name.

<div class="mt-widget" id="mt-freq-widget">
  <div class="mt-widget-label">🎚️ Pitch &amp; Frequency Explorer</div>
  <input type="range" id="mt-freq-slider" class="mt-slider" min="80" max="1000" step="1" value="440">
  <div class="mt-freq-readout">
    <span id="mt-freq-value">440</span> Hz &nbsp;≈&nbsp; nearest note: <span id="mt-freq-note">A4</span>
  </div>
  <button class="mt-btn" id="mt-freq-play">▶ Play This Frequency</button>
</div>

---

# Loudness

While **pitch** describes how high or low a sound is, **loudness** describes how strong the sound is.

Examples:

- Whisper
- Conversation
- Orchestra
- Rock concert

Loudness mainly depends on the size (amplitude) of the sound wave. In music notation, loudness is indicated using **dynamics**, such as:

| Symbol | Meaning |
|--------|---------|
| pp | Very soft |
| p | Soft |
| mp | Moderately soft |
| mf | Moderately loud |
| f | Loud |
| ff | Very loud |

You will learn more about dynamics in a later chapter.

### 🎚️ Try it — Dynamics Explorer

The same note (A4), played at each dynamic level. Click through them to hear how amplitude changes loudness without changing pitch.

<div class="mt-widget" id="mt-dynamics-widget">
  <div class="mt-widget-label">🎚️ Dynamics Explorer — same note, six volumes</div>
  <div class="mt-dynamics-row" id="mt-dynamics-row"></div>
</div>

---

# The Musical Alphabet

Unlike the English alphabet, music uses only **seven letter names**:

> A B C D E F G

After G, the sequence repeats:

> A B C D E F G A B C ...

These seven letters represent all musical notes. Unlike ordinary numbering systems, musical notes repeat in cycles called **octaves**.

---

# Octaves

An **octave** is the interval between one note and the next note with the same letter name — for example, C to C, D to D, or F to F.

On a piano keyboard, each octave contains:

- Seven white-note letter names
- Five black keys
- Twelve distinct pitches in total

Although the notes repeat their names, each higher octave has approximately **double the frequency** of the previous one:

| Note | Frequency |
|------|-----------|
| A2 | 110 Hz |
| A3 | 220 Hz |
| A4 | 440 Hz |
| A5 | 880 Hz |

This repeating, doubling pattern is one of the most fundamental ideas in music.

### 🎚️ Try it — Octave Doubling

Click each A below, low to high, and notice that they all sound unmistakably like "the same note" — just higher. Then hit "Play All" to hear the doubling pattern in sequence.

<div class="mt-widget" id="mt-octave-widget">
  <div class="mt-widget-label">🎚️ Octave Doubling — it's still "A," just higher</div>
  <div class="mt-octave-row" id="mt-octave-row"></div>
  <button class="mt-btn" id="mt-octave-all">▶ Play All in Sequence</button>
</div>

---

# Accidentals

Sometimes a note is raised or lowered by one semitone (half step). These changes are indicated by **accidentals**.

| Symbol | Name | Effect |
|--------|------|--------|
| ♯ | Sharp | Raise the note by one semitone |
| ♭ | Flat | Lower the note by one semitone |
| ♮ | Natural | Return to the original note |

Examples:

- C♯ is one semitone higher than C.
- B♭ is one semitone lower than B.
- F♮ cancels a previous sharp or flat.

---

# Enharmonic Notes

Some notes have two different names but produce the same pitch. These are called **enharmonic equivalents**.

| Note | Same Pitch As |
|------|---------------|
| C♯ | D♭ |
| D♯ | E♭ |
| F♯ | G♭ |
| G♯ | A♭ |
| A♯ | B♭ |

Although they sound identical on most modern instruments, they may be written differently depending on the musical key or context. For example, C♯ Major uses sharps while D♭ Major uses flats — the choice of name helps musicians read and understand the music more easily.

### 🎧 Try it — Same Pitch, Different Name

<div class="mt-widget" id="mt-enharmonic-widget">
  <div class="mt-widget-label">🎧 Enharmonic Check</div>
  <button class="mt-btn" id="mt-enh-sharp">▶ Play C♯4</button>
  <button class="mt-btn" id="mt-enh-flat">▶ Play D♭4</button>
  <div class="mt-piano-status" id="mt-enh-status">Two names, one key — press both and listen.</div>
</div>

---

# Key Takeaways

- Music theory explains how music is organized and structured.
- Sound is produced by vibrations.
- Pitch describes how high or low a sound is.
- Frequency is measured in Hertz (Hz).
- Loudness depends on the amplitude of the sound wave.
- Music uses seven note letters: A, B, C, D, E, F, and G.
- An octave spans from one note to the next note with the same letter name.
- Accidentals raise or lower notes by one semitone.
- Some notes have different names but the same pitch; these are called enharmonic equivalents.

---

# Summary

Music begins with sound, but music theory helps us understand how sounds are organized into meaningful musical ideas. In this chapter, you learned about pitch, frequency, loudness, the musical alphabet, octaves, accidentals, and enharmonic notes. These concepts form the foundation for everything that follows in music theory.

In the next chapter, you will learn how notes are separated by intervals and how these intervals form the building blocks of scales, chords, and melodies.

<script>
(function () {
  "use strict";

  if (!window.MTAudio) {
    console.error("MTAudio engine not found — make sure js/audio-engine.js is loaded in index.html");
    return;
  }
  var playTone = window.MTAudio.playTone;
  var midiToFreq = window.MTAudio.midiToFreq;
  var NOTE_NAMES = window.MTAudio.NOTE_NAMES;

  function freqToNoteName(freq) {
    var midi = Math.round(69 + 12 * Math.log2(freq / 440));
    var name = NOTE_NAMES[((midi % 12) + 12) % 12];
    var octave = Math.floor(midi / 12) - 1;
    return name + octave;
  }

  // ---------- Pitch & Frequency Explorer ----------
  var freqSlider = document.getElementById("mt-freq-slider");
  if (freqSlider) {
    var freqValueEl = document.getElementById("mt-freq-value");
    var freqNoteEl = document.getElementById("mt-freq-note");
    function updateFreqReadout() {
      var f = parseInt(freqSlider.value, 10);
      freqValueEl.textContent = f;
      freqNoteEl.textContent = freqToNoteName(f);
    }
    freqSlider.addEventListener("input", updateFreqReadout);
    updateFreqReadout();
    document.getElementById("mt-freq-play").addEventListener("click", function () {
      playTone(parseInt(freqSlider.value, 10), 0, 0.9);
    });
  }

  // ---------- Dynamics Explorer ----------
  var dynRow = document.getElementById("mt-dynamics-row");
  if (dynRow) {
    var DYNAMICS = [
      { label: "pp", gain: 0.04 },
      { label: "p",  gain: 0.09 },
      { label: "mp", gain: 0.15 },
      { label: "mf", gain: 0.24 },
      { label: "f",  gain: 0.36 },
      { label: "ff", gain: 0.52 }
    ];
    DYNAMICS.forEach(function (d) {
      var btn = document.createElement("button");
      btn.className = "mt-btn mt-dyn-btn";
      btn.textContent = d.label;
      btn.addEventListener("click", function () {
        playTone(midiToFreq(69), 0, 0.8, "sine", d.gain); // A4
      });
      dynRow.appendChild(btn);
    });
  }

  // ---------- Octave Doubling ----------
  var octRow = document.getElementById("mt-octave-row");
  if (octRow) {
    var OCTAVES = [
      { label: "A2 (110 Hz)", midi: 45 },
      { label: "A3 (220 Hz)", midi: 57 },
      { label: "A4 (440 Hz)", midi: 69 },
      { label: "A5 (880 Hz)", midi: 81 }
    ];
    OCTAVES.forEach(function (o) {
      var btn = document.createElement("button");
      btn.className = "mt-btn";
      btn.textContent = o.label;
      btn.addEventListener("click", function () {
        playTone(midiToFreq(o.midi), 0, 0.8);
      });
      octRow.appendChild(btn);
    });
    document.getElementById("mt-octave-all").addEventListener("click", function () {
      OCTAVES.forEach(function (o, i) {
        playTone(midiToFreq(o.midi), i * 0.9, 0.8);
      });
    });
  }

  // ---------- Enharmonic Check ----------
  var enhSharp = document.getElementById("mt-enh-sharp");
  if (enhSharp) {
    var enhStatus = document.getElementById("mt-enh-status");
    enhSharp.addEventListener("click", function () {
      enhStatus.textContent = "That's C♯4 — 277.18 Hz.";
      playTone(midiToFreq(61), 0, 0.8);
    });
    document.getElementById("mt-enh-flat").addEventListener("click", function () {
      enhStatus.textContent = "That's D♭4 — also 277.18 Hz. Same key, same pitch, different name.";
      playTone(midiToFreq(61), 0, 0.8);
    });
  }
})();
</script>
