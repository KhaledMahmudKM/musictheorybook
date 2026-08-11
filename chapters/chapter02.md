# Chapter 2 — Notes, Intervals, and the Keyboard

## Learning Objectives

By the end of this chapter, you should be able to:

- Identify the pattern of notes on a piano keyboard.
- Understand whole steps and half steps.
- Count intervals between two notes.
- Recognize the names and qualities of common intervals.
- Understand interval inversion.

> 🎧 **This chapter is interactive.** Wherever you see a keyboard or a "Play" button, click it — you can hear every example instead of just reading it.

---

# Introduction

Every melody, chord, and scale is built from **intervals** — the distance between two notes. Learning intervals is one of the most important steps in understanding music theory.

A piano keyboard is an excellent tool for visualizing intervals because each key represents one distinct pitch. Even if you don't play piano, understanding the keyboard layout will make many music theory concepts much easier to learn.

---

# The Piano Keyboard

A standard piano has **88 keys**: 52 white keys and 36 black keys, arranged in a repeating pattern. The black keys always appear in alternating groups of **two** and **three**.

The white note immediately to the left of a group of **two black keys** is always **C**. Once you find C, the rest of the white keys follow in order: C D E F G A B, then the pattern repeats.

Click the keyboard below to hear it for yourself — notice how the black keys cluster in 2s and 3s, and how that cluster is your landmark for finding C anywhere on the keyboard.

<div class="mt-widget" id="mt-piano-widget">
  <div class="mt-widget-label">🎹 Interactive Keyboard — click any key</div>
  <div class="mt-piano-wrap">
    <div class="mt-piano" id="mt-piano-keys"></div>
  </div>
  <div class="mt-piano-controls">
    <button class="mt-btn" data-demo="wholestep">▶ Play Whole Step (C → D)</button>
    <button class="mt-btn" data-demo="halfstep">▶ Play Half Step (E → F)</button>
    <button class="mt-btn" data-demo="scale">▶ Play C to C (all white keys)</button>
  </div>
  <div class="mt-piano-status" id="mt-piano-status">Click a key, or try one of the buttons above.</div>
</div>

---

# White Keys and Black Keys

The white keys are named using the first seven letters of the alphabet:

```
C D E F G A B
```

Each black key sits one semitone away from its white-key neighbors, and can be named two ways depending on direction:

```
C  C♯/D♭  D
```

**C♯ (C sharp)** and **D♭ (D flat)** refer to the *same physical key* — the choice of name depends on musical context, which you'll learn more about in later chapters.

---

# Semitones (Half Steps)

A **semitone**, also called a **half step**, is the smallest interval used in most Western music. On a piano, moving from any key to the very next key — white or black — is always one semitone.

```
C → C♯      E → F      B → C      G♯ → A
```

Notice something important: **there is no black key between E and F, or between B and C.** These pairs are naturally only one semitone apart — try clicking E then F on the keyboard above and you'll notice they're right next to each other with nothing in between.

---

# Whole Steps

A **whole step** (also called a **whole tone**) equals **two semitones** — one half step plus another half step.

```
C → D        F → G        A → B
```

```
C → C♯ → D
   (half)  (half)  =  one whole step
```

Use the "Play Whole Step" and "Play Half Step" buttons above and listen closely — a half step sounds noticeably tighter and more tense than a whole step. Training your ear to tell these apart is one of the most useful skills you can build early on.

---

# Measuring Intervals

An **interval** is the distance between two notes. Intervals are named by counting **both** the starting note and the ending note — never just the gap between them.

```
C D          →   C(1) D(2)        →   a Second
C D E        →   C(1) D(2) E(3)   →   a Third
```

Always include both endpoints when counting.

---

# Interval Numbers

| Number | Name |
|---------|------|
| 1 | Unison |
| 2 | Second |
| 3 | Third |
| 4 | Fourth |
| 5 | Fifth |
| 6 | Sixth |
| 7 | Seventh |
| 8 | Octave |

```
C → C = Unison       C → G = Fifth
C → D = Second       C → A = Sixth
C → E = Third        C → B = Seventh
C → F = Fourth       C → C = Octave
```

---

# Interval Qualities

The **number** tells you how many letter names are involved. The **quality** tells you the exact size, in semitones.

Common qualities: **Major, Minor, Perfect, Augmented, Diminished**.

```
C → E   =  Major Third
C → E♭  =  Minor Third
```

Both are "thirds" because they span three letter names (C, D, E) — but they differ by one semitone, which changes the quality.

---

# Major and Minor Intervals

Seconds, Thirds, Sixths, and Sevenths can be either **major** or **minor**:

| Interval | Semitones |
|----------|-----------|
| Minor Second | 1 |
| Major Second | 2 |
| Minor Third | 3 |
| Major Third | 4 |
| Minor Sixth | 8 |
| Major Sixth | 9 |
| Minor Seventh | 10 |
| Major Seventh | 11 |

A major interval is always exactly **one semitone larger** than the matching minor interval.

---

# Perfect Intervals

Unisons, Fourths, Fifths, and Octaves are called **perfect** instead of major/minor — they don't come in major/minor pairs because of their especially stable, consonant sound.

| Interval | Semitones |
|----------|-----------|
| Perfect Unison | 0 |
| Perfect Fourth | 5 |
| Perfect Fifth | 7 |
| Perfect Octave | 12 |

---

# Augmented and Diminished Intervals

Any interval can be stretched or shrunk by one semitone:

- Increase a perfect or major interval by a semitone → **Augmented**
- Decrease a perfect or minor interval by a semitone → **Diminished**

```
Perfect Fifth:   C → G
Augmented Fifth: C → G♯   (raised by a semitone)
Diminished Fifth: C → G♭  (lowered by a semitone)

Major Third:      C → E
Augmented Third:  C → E♯
Minor Third:       C → E♭
Diminished Third:  C → E𝄫  (E double-flat)
```

> **Note:** On a piano, some augmented and diminished intervals sound identical to other intervals (equal temperament), but they're written differently because they serve different harmonic functions.

### 🎚️ Try it yourself — Interval Explorer

Pick any starting note and any interval, and hear exactly what it sounds like. This covers every interval in the tables above, sequentially and together.

<div class="mt-widget" id="mt-interval-widget">
  <div class="mt-widget-label">🎚️ Interval Explorer</div>
  <div class="mt-interval-controls">
    <label class="mt-field">
      Root note
      <select id="mt-root-select" class="mt-select"></select>
    </label>
    <label class="mt-field">
      Interval
      <select id="mt-interval-select" class="mt-select"></select>
    </label>
  </div>
  <div class="mt-interval-buttons">
    <button class="mt-btn" id="mt-play-sequential">▶ Play One Note at a Time</button>
    <button class="mt-btn" id="mt-play-together">▶ Play Together</button>
  </div>
  <div class="mt-interval-result" id="mt-interval-result">Choose a root note and interval, then press play.</div>
</div>

---

# Interval Inversion

An interval can be **inverted** by moving one of its notes up or down by an octave.

```
C → E   =  Major Third
E → C   =  Minor Sixth   (the inversion)
```

The interval **number** changes according to this rule:

| Original | Inversion |
|----------|-----------|
| Unison | Octave |
| Second | Seventh |
| Third | Sixth |
| Fourth | Fifth |
| Fifth | Fourth |
| Sixth | Third |
| Seventh | Second |
| Octave | Unison |

> **Handy rule:** the interval numbers of an interval and its inversion always add up to **9**.
> `Third + Sixth = 9`  •  `Fourth + Fifth = 9`  •  `Second + Seventh = 9`

Interval **quality** also inverts:

| Original | Inversion |
|----------|-----------|
| Major | Minor |
| Minor | Major |
| Perfect | Perfect |
| Augmented | Diminished |
| Diminished | Augmented |

---

# Why Intervals Matter

Intervals are the foundation of many musical concepts. They're used to build:

- Scales
- Chords
- Melodies
- Harmony
- Counterpoint

For example: a **major chord** contains a Major Third and a Perfect Fifth; a **minor chord** contains a Minor Third and a Perfect Fifth. A major scale is defined by a specific sequence of whole and half steps — you'll build one yourself in Chapter 5.

---

# 📝 Practice

Test what you've learned with the quiz below. It plays two notes starting on C and asks you to identify the interval **number** by ear — no need to worry about quality yet, just count the distance.

<div class="mt-widget" id="mt-quiz-widget">
  <div class="mt-widget-label">📝 Ear Training Quiz — name the interval</div>
  <div class="mt-quiz-row">
    <button class="mt-btn" id="mt-quiz-new">🔀 New Question</button>
    <button class="mt-btn" id="mt-quiz-replay">🔁 Replay</button>
  </div>
  <div class="mt-quiz-choices" id="mt-quiz-choices"></div>
  <div class="mt-quiz-feedback" id="mt-quiz-feedback">Press "New Question" to begin.</div>
  <div class="mt-quiz-score" id="mt-quiz-score">Score: 0 / 0</div>
</div>

---

# Key Takeaways

- The piano keyboard follows a repeating pattern of seven white keys and five black keys.
- A semitone (half step) is the smallest interval in Western music.
- A whole step equals two semitones.
- Intervals are named by counting the letter names from one note to another.
- Intervals have both a number (such as Third or Fifth) and a quality (such as Major or Perfect).
- Major and minor intervals differ by one semitone.
- Perfect intervals include the unison, fourth, fifth, and octave.
- Augmented intervals are one semitone larger than perfect or major intervals.
- Diminished intervals are one semitone smaller than perfect or minor intervals.
- Inverting an interval changes both its number and, in most cases, its quality.

---

# Summary

Intervals measure the distance between two notes and form the building blocks of scales, chords, melodies, and harmony. In this chapter, you learned how the piano keyboard is organized, how to measure intervals using whole and half steps, and how interval qualities such as major, minor, perfect, augmented, and diminished describe their exact sizes. You also learned how intervals can be inverted, and practiced identifying them by ear.

In the next chapter, you will explore **rhythm and time**, learning how music is organized not only by pitch, but also by duration and pulse.

<script>
(function() {
  "use strict";

  // ---------- Shared audio engine (window.MTAudio, loaded once in index.html) ----------
  if (!window.MTAudio) {
    console.error("MTAudio engine not found — make sure js/audio-engine.js is loaded in index.html");
    return;
  }
  var midiToFreq = window.MTAudio.midiToFreq;
  var playTone = window.MTAudio.playTone;
  function playMidiNote(midi) { playTone(midiToFreq(midi), 0, 0.7); }
  var NOTE_NAMES = window.MTAudio.NOTE_NAMES;

  // ---------- Piano widget ----------
  var pianoRoot = document.getElementById("mt-piano-keys");
  if (pianoRoot) {
    var whiteSemitones = [0,2,4,5,7,9,11,12]; // C D E F G A B C  relative to C4 (midi 60)
    var whiteLetters = ["C","D","E","F","G","A","B","C"];
    var blackAfterWhiteIndex = {0:1, 1:3, 3:6, 4:8, 5:10}; // white idx -> semitone offset for black key placed after it
    var baseMidi = 60; // C4

    var keyWidth = 60, blackWidth = 36;
    whiteLetters.forEach(function(letter, i) {
      var el = document.createElement("div");
      el.className = "mt-key-white";
      el.style.left = (i * keyWidth) + "px";
      el.textContent = letter;
      el.dataset.midi = baseMidi + whiteSemitones[i];
      el.addEventListener("click", function() {
        playMidiNote(parseInt(el.dataset.midi, 10));
        flash(el);
      });
      pianoRoot.appendChild(el);
    });
    Object.keys(blackAfterWhiteIndex).forEach(function(wIdxStr) {
      var wIdx = parseInt(wIdxStr, 10);
      var semitone = blackAfterWhiteIndex[wIdxStr];
      var el = document.createElement("div");
      el.className = "mt-key-black";
      el.style.left = ((wIdx + 1) * keyWidth - blackWidth / 2) + "px";
      el.dataset.midi = baseMidi + semitone;
      el.addEventListener("click", function(e) {
        e.stopPropagation();
        playMidiNote(parseInt(el.dataset.midi, 10));
        flash(el);
      });
      pianoRoot.appendChild(el);
    });

    function flash(el) {
      el.classList.add("mt-active");
      setTimeout(function() { el.classList.remove("mt-active"); }, 220);
    }

    var status = document.getElementById("mt-piano-status");
    document.querySelectorAll('#mt-piano-widget [data-demo]').forEach(function(btn) {
      btn.addEventListener("click", function() {
        var demo = btn.dataset.demo;
        if (demo === "wholestep") {
          status.textContent = "Whole step: C → D (two semitones)";
          playTone(midiToFreq(60), 0, 0.55);
          playTone(midiToFreq(62), 0.6, 0.55);
        } else if (demo === "halfstep") {
          status.textContent = "Half step: E → F (one semitone, no black key between them)";
          playTone(midiToFreq(64), 0, 0.55);
          playTone(midiToFreq(65), 0.6, 0.55);
        } else if (demo === "scale") {
          status.textContent = "C D E F G A B C — all white keys, one octave";
          whiteSemitones.forEach(function(semi, i) {
            playTone(midiToFreq(baseMidi + semi), i * 0.4, 0.38);
          });
        }
      });
    });
  }

  // ---------- Interval Explorer widget ----------
  var rootSelect = document.getElementById("mt-root-select");
  var intervalSelect = document.getElementById("mt-interval-select");
  if (rootSelect && intervalSelect) {
    NOTE_NAMES.forEach(function(name, i) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.textContent = name + "4";
      rootSelect.appendChild(opt);
    });

    var INTERVALS = [
      {semi: 0,  name: "Perfect Unison"},
      {semi: 1,  name: "Minor Second"},
      {semi: 2,  name: "Major Second"},
      {semi: 3,  name: "Minor Third"},
      {semi: 4,  name: "Major Third"},
      {semi: 5,  name: "Perfect Fourth"},
      {semi: 6,  name: "Tritone (Aug 4th / dim 5th)"},
      {semi: 7,  name: "Perfect Fifth"},
      {semi: 8,  name: "Minor Sixth"},
      {semi: 9,  name: "Major Sixth"},
      {semi: 10, name: "Minor Seventh"},
      {semi: 11, name: "Major Seventh"},
      {semi: 12, name: "Perfect Octave"}
    ];
    INTERVALS.forEach(function(iv, i) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.textContent = iv.name;
      intervalSelect.appendChild(opt);
    });
    intervalSelect.value = 4; // default Major Third

    var resultEl = document.getElementById("mt-interval-result");
    function currentNotes() {
      var rootOffset = parseInt(rootSelect.value, 10);
      var iv = INTERVALS[parseInt(intervalSelect.value, 10)];
      var rootMidi = 60 + rootOffset;
      var targetMidi = rootMidi + iv.semi;
      return {
        rootMidi: rootMidi,
        targetMidi: targetMidi,
        rootName: NOTE_NAMES[rootOffset],
        targetName: NOTE_NAMES[targetMidi % 12],
        ivName: iv.name
      };
    }
    function describe() {
      var n = currentNotes();
      resultEl.textContent = n.rootName + " → " + n.targetName + "  =  " + n.ivName;
    }
    rootSelect.addEventListener("change", describe);
    intervalSelect.addEventListener("change", describe);
    describe();

    document.getElementById("mt-play-sequential").addEventListener("click", function() {
      var n = currentNotes();
      describe();
      playTone(midiToFreq(n.rootMidi), 0, 0.55);
      playTone(midiToFreq(n.targetMidi), 0.6, 0.55);
    });
    document.getElementById("mt-play-together").addEventListener("click", function() {
      var n = currentNotes();
      describe();
      playTone(midiToFreq(n.rootMidi), 0, 0.9);
      playTone(midiToFreq(n.targetMidi), 0, 0.9);
    });
  }

  // ---------- Ear Training Quiz (interval numbers, rooted on C) ----------
  var quizChoices = document.getElementById("mt-quiz-choices");
  if (quizChoices) {
    var QUIZ_NUMBERS = [
      {n: 1, label: "Unison",  semi: 0},
      {n: 2, label: "Second",  semi: 2},
      {n: 3, label: "Third",   semi: 4},
      {n: 4, label: "Fourth",  semi: 5},
      {n: 5, label: "Fifth",   semi: 7},
      {n: 6, label: "Sixth",   semi: 9},
      {n: 7, label: "Seventh", semi: 11},
      {n: 8, label: "Octave",  semi: 12}
    ];
    var score = {correct: 0, total: 0};
    var current = null;
    var scoreEl = document.getElementById("mt-quiz-score");
    var feedbackEl = document.getElementById("mt-quiz-feedback");

    function renderChoices() {
      quizChoices.innerHTML = "";
      QUIZ_NUMBERS.forEach(function(q) {
        var btn = document.createElement("button");
        btn.className = "mt-btn";
        btn.textContent = q.n + " (" + q.label + ")";
        btn.addEventListener("click", function() { checkAnswer(q, btn); });
        quizChoices.appendChild(btn);
      });
    }

    function playCurrent() {
      if (!current) return;
      playTone(midiToFreq(60), 0, 0.55);
      playTone(midiToFreq(60 + current.semi), 0.6, 0.55);
    }

    function newQuestion() {
      current = QUIZ_NUMBERS[Math.floor(Math.random() * QUIZ_NUMBERS.length)];
      feedbackEl.textContent = "Listen carefully, then pick the interval number.";
      renderChoices();
      playCurrent();
    }

    function checkAnswer(q, btn) {
      score.total++;
      var buttons = quizChoices.querySelectorAll("button");
      buttons.forEach(function(b) { b.disabled = true; });
      if (q.n === current.n) {
        score.correct++;
        btn.classList.add("mt-correct");
        feedbackEl.textContent = "✅ Correct! That was a " + current.label + " (C to " + NOTE_NAMES[current.semi % 12] + ").";
      } else {
        btn.classList.add("mt-wrong");
        feedbackEl.textContent = "❌ Not quite — that was a " + current.label + " (C to " + NOTE_NAMES[current.semi % 12] + ").";
      }
      scoreEl.textContent = "Score: " + score.correct + " / " + score.total;
    }

    document.getElementById("mt-quiz-new").addEventListener("click", newQuestion);
    document.getElementById("mt-quiz-replay").addEventListener("click", playCurrent);
    renderChoices();
  }
})();
</script>
