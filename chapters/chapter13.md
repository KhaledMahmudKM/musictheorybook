# Chapter 13 — Applying Music Theory

## Learning Objectives

By the end of this chapter, you should be able to:

- Apply music theory concepts to real music.
- Analyze melodies, chords, and chord progressions.
- Identify key, scale, and harmony in simple songs.
- Transpose music to different keys.
- Build basic chord progressions.
- Use theory to support songwriting and improvisation.
- Develop a practical practice strategy for continued learning.

> 🎧 This is the capstone chapter — it's fully interactive. Transpose real progressions between keys, and then use everything you've learned across this book to improvise live over a looping backing progression.

---

## Introduction

At this point, you have learned the core building blocks of music theory: notes, intervals, and scales; rhythm and notation; chords and harmony; progressions and form.

However, music theory is not meant to stay abstract. Its real value comes from **application** — understanding and creating real music. This chapter focuses on how all these concepts connect in practice.

---

## Analyzing a Simple Song

Let's walk through a basic analysis process.

**Step 1 — Identify the Key.** Look for the tonic chord (home feeling), the final chord, and the key signature. If a song ends on C major and frequently returns to it, the key is likely C Major.

**Step 2 — Identify the Chords.** Suppose the progression is **C → G → Am → F**. We can analyze this in C major:

| Chord | Function |
|-------|----------|
| C | I (Tonic) |
| G | V (Dominant) |
| Am | vi (Submediant) |
| F | IV (Subdominant) |

**Step 3 — Understand the Function.** Now interpret the movement: **I → V → vi → IV**. This creates stability (I), tension (V), an emotional shift (vi), and resolution support (IV). This is one of the most common progressions in modern music.

---

## Building Your Own Chord Progressions

A simple way to write music is to start with common progressions.

**Basic Pop Progression** — I → V → vi → IV. In C major: C → G → Am → F.

**Simple Rock Progression** — I → IV → V. In G major: G → C → D.

**Emotional Progression** — vi → IV → I → V. In C major: Am → F → C → G.

---

## Writing a Melody Over Chords

A good melody usually follows the underlying harmony.

**Step 1 — Use chord tones.** Over C major (C–E–G), a melody might use C E G.

**Step 2 — Add passing tones.** C D E G E D C.

**Step 3 — Match strong beats.** Strong beats often align with chord tones; weak beats often carry passing or decorative notes.

---

## Transposing Music

**Transposition** means moving a piece of music into a different key while preserving its structure.

Original in C major: **C → G → Am → F**. Transpose to G major:

| C major | G major |
|---------|---------|
| C | G |
| G | D |
| Am | Em |
| F | C |

Result: **G → D → Em → C**.

**Why transpose?** To fit a singer's vocal range, to simplify playing on an instrument, to match ensemble instruments, or to change the musical mood slightly.

### 🎚️ Try it — Transposition Trainer

Pick a common progression and a source key, then a target key. Play both back to back — the chord *relationships* (I, V, vi, IV, etc.) stay identical; only the actual pitches move.

<div class="mt-widget" id="mt-transpose-widget">
  <div class="mt-widget-label">🎚️ Transposition Trainer</div>
  <div class="mt-interval-controls">
    <label class="mt-field">
      Progression
      <select id="mt-tr-prog-select" class="mt-select">
        <option value="pop" selected>Basic Pop (I–V–vi–IV)</option>
        <option value="rock">Simple Rock (I–IV–V)</option>
        <option value="emotional">Emotional (vi–IV–I–V)</option>
      </select>
    </label>
    <label class="mt-field">
      From Key
      <select id="mt-tr-from-select" class="mt-select"></select>
    </label>
    <label class="mt-field">
      To Key
      <select id="mt-tr-to-select" class="mt-select"></select>
    </label>
  </div>
  <div class="mt-status" id="mt-tr-from-label"></div>
  <div class="mt-scale-row" id="mt-tr-from-row"></div>
  <div class="mt-status" id="mt-tr-to-label"></div>
  <div class="mt-scale-row" id="mt-tr-to-row"></div>
  <button class="mt-btn" id="mt-tr-play-from">▶ Play Original</button>
  <button class="mt-btn" id="mt-tr-play-to">▶ Play Transposed</button>
</div>

---

## Using the Circle of Fifths in Practice

The Circle of Fifths helps you find related chords quickly, predict chord movements, and choose keys for modulation. If you are in C major, G major is a strong resolution (V), F major provides stability (IV), and A minor gives emotional contrast (vi). (Revisit the clickable Circle of Fifths in Chapter 5 any time.)

---

## Improvisation Basics

Improvisation is creating music in real time.

**Step 1 — Choose a scale.** For example, the C Major scale: C D E F G A B.

**Step 2 — Use chord tones.** If the chord is C major, focus on C, E, G.

**Step 3 — Add movement.** Use passing tones, repeat motifs, and vary rhythm. Example idea: E G A G E D C.

### 🎚️ Try it — Improvisation Playground

This is where everything comes together. Pick a key and a backing progression, press "Start Loop," and it will repeat continuously and quietly in the background. While it plays, click the scale-degree buttons below to improvise your own melody on top — try leaning on chord tones (1, 3, 5) when they line up with the current chord, and using the others as passing tones, just like the chapter describes.

<div class="mt-widget" id="mt-improv-widget">
  <div class="mt-widget-label">🎚️ Improvisation Playground</div>
  <div class="mt-interval-controls">
    <label class="mt-field">
      Key
      <select id="mt-improv-key-select" class="mt-select"></select>
    </label>
    <label class="mt-field">
      Backing Progression
      <select id="mt-improv-prog-select" class="mt-select">
        <option value="I-IV-V-I" selected>I – IV – V – I</option>
        <option value="I-V-vi-IV">I – V – vi – IV</option>
        <option value="ii-V-I">ii – V – I</option>
      </select>
    </label>
  </div>
  <button class="mt-btn" id="mt-improv-toggle">▶ Start Loop</button>
  <div class="mt-status" id="mt-improv-status">Loop stopped. Press start, then play along below.</div>
  <div class="mt-chord-row" id="mt-improv-degree-row"></div>
</div>

---

## Ear Training (Practical Use)

Music theory becomes much more powerful when combined with listening. Try to recognize major vs. minor chords, simple intervals (3rd, 5th, octave), common progressions (I–V–vi–IV), and cadences (especially V → I). Even basic recognition improves musical understanding significantly. (The ear-training quizzes from Chapters 2 and 4 are good places to keep practicing this.)

---

## Common Practice Strategies

To improve your understanding of music theory:

1. **Play scales daily** — major and minor scales, on your hands or instrument.
2. **Learn chord shapes** — major, minor, seventh chords, and practice transitions between them.
3. **Analyze real songs** — ask what key it's in, what chords are used, and how it ends.
4. **Write short progressions** — start simple, like C → Am → F → G, then build melodies on top.
5. **Copy and transform music** — transpose songs, change rhythms, modify melodies.

---

## Common Beginner Mistakes

**1. Memorizing instead of understanding.** Music theory is patterns, not lists.

**2. Ignoring rhythm.** Even simple melodies fail without rhythmic structure.

**3. Overcomplicating harmony.** Most popular music uses simple progressions.

**4. Forgetting resolution.** Music almost always returns to a tonal center.

---

## Putting Everything Together

A complete musical idea combines **Harmony** (chords), **Melody** (notes over chords), **Rhythm** (timing), and **Form** (structure).

```
Chord: C → G → Am → F
Melody: C D E | G E D | A G E | F E C
Rhythm: steady 4/4 pulse
Form: repeating verse structure
```

The Improvisation Playground above is a compact version of exactly this: harmony (the looping progression), melody (your scale-degree clicks), rhythm (however you space your clicks), all playing over a repeating form (the loop itself).

---

## Practice Examples

### Example 1
What is the key of a song that ends on G major and uses F♯ consistently?
**Answer:** G Major

### Example 2
Transpose C → F → G → C into D major.
**Answer:** D → G → A → D

### Example 3
What are the chord tones of A minor?
**Answer:** A, C, E

### Example 4
What is improvisation in music?
**Answer:** Creating music spontaneously using scales, chords, and rhythm.

### Example 5
What is the purpose of analyzing songs?
**Answer:** To understand how music theory is applied in real compositions.

---

## Key Takeaways

- Music theory becomes powerful when applied to real music.
- Songs can be analyzed using key, chords, and function.
- Common progressions repeat across many genres.
- Transposition preserves structure while changing key.
- Melody should align with harmony and rhythm.
- Improvisation uses scales, chord tones, and motifs.
- Ear training strengthens practical understanding.
- Simple patterns are the foundation of most music.

---

## Final Summary

Music theory is not just a set of rules — it is a tool for understanding and creating music. Across this book, you have learned how notes form intervals, how scales create keys, how chords build harmony, how progressions create movement, and how form organizes entire compositions.

In this final chapter, you learned how to apply all of these ideas in real musical situations: analyzing songs, writing progressions, creating melodies, transposing music, and beginning improvisation.

With this foundation, you can now continue exploring more advanced topics such as counterpoint, jazz harmony, orchestration, composition, and music production.

Music theory is not an endpoint — it is a starting point for deeper musical exploration.

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

  function noteName(midi) { return NOTE_NAMES[((midi % 12) + 12) % 12]; }

  var MAJOR_SCALE_OFFSETS = [0, 2, 4, 5, 7, 9, 11];
  var ROMAN = ["I", "ii", "iii", "IV", "V", "vi", "vii\u00b0"];
  var QUALITY_SUFFIX = ["", "m", "m", "", "", "m", "dim"];

  function scaleMidisFor(rootOffset) {
    var rootMidi = 60 + rootOffset;
    return MAJOR_SCALE_OFFSETS.map(function (o) { return rootMidi + o; });
  }
  function triadForDegree(scaleMidis, i) {
    var thirdIdx = (i + 2) % 7, thirdOct = Math.floor((i + 2) / 7);
    var fifthIdx = (i + 4) % 7, fifthOct = Math.floor((i + 4) / 7);
    return [scaleMidis[i], scaleMidis[thirdIdx] + 12 * thirdOct, scaleMidis[fifthIdx] + 12 * fifthOct];
  }
  function chordSymbol(scaleMidis, i) {
    return noteName(scaleMidis[i]) + QUALITY_SUFFIX[i];
  }

  var PROGRESSIONS = {
    pop: [0, 4, 5, 3],       // I V vi IV
    rock: [0, 3, 4],         // I IV V
    emotional: [5, 3, 0, 4], // vi IV I V
    "I-IV-V-I": [0, 3, 4, 0],
    "I-V-vi-IV": [0, 4, 5, 3],
    "ii-V-I": [1, 4, 0]
  };

  // ---------- Transposition Trainer ----------
  var transposeWidget = document.getElementById("mt-transpose-widget");
  if (transposeWidget) {
    var progSelect = document.getElementById("mt-tr-prog-select");
    var fromSelect = document.getElementById("mt-tr-from-select");
    var toSelect = document.getElementById("mt-tr-to-select");
    var fromLabel = document.getElementById("mt-tr-from-label");
    var toLabel = document.getElementById("mt-tr-to-label");
    var fromRow = document.getElementById("mt-tr-from-row");
    var toRow = document.getElementById("mt-tr-to-row");

    NOTE_NAMES.forEach(function (name, i) {
      var optFrom = document.createElement("option");
      optFrom.value = i;
      optFrom.textContent = name + " Major";
      fromSelect.appendChild(optFrom);
      var optTo = document.createElement("option");
      optTo.value = i;
      optTo.textContent = name + " Major";
      toSelect.appendChild(optTo);
    });
    fromSelect.value = 0; // C
    toSelect.value = 7;   // G

    function renderSide(rootOffset, row, label, keyRoleText) {
      var scaleMidis = scaleMidisFor(rootOffset);
      var degrees = PROGRESSIONS[progSelect.value];
      row.innerHTML = "";
      degrees.forEach(function (deg) {
        var chip = document.createElement("div");
        chip.className = "mt-scale-chip";
        chip.textContent = ROMAN[deg] + ": " + chordSymbol(scaleMidis, deg);
        row.appendChild(chip);
      });
      label.textContent = keyRoleText + " (" + noteName(60 + rootOffset) + " Major):";
    }

    function renderBoth() {
      renderSide(parseInt(fromSelect.value, 10), fromRow, fromLabel, "Original");
      renderSide(parseInt(toSelect.value, 10), toRow, toLabel, "Transposed");
    }

    function playSide(rootOffset) {
      var scaleMidis = scaleMidisFor(rootOffset);
      var degrees = PROGRESSIONS[progSelect.value];
      degrees.forEach(function (deg, i) {
        var triad = triadForDegree(scaleMidis, deg);
        triad.forEach(function (midi) { playTone(midiToFreq(midi), i * 0.8, 0.75); });
      });
    }

    progSelect.addEventListener("change", renderBoth);
    fromSelect.addEventListener("change", renderBoth);
    toSelect.addEventListener("change", renderBoth);

    document.getElementById("mt-tr-play-from").addEventListener("click", function () {
      playSide(parseInt(fromSelect.value, 10));
    });
    document.getElementById("mt-tr-play-to").addEventListener("click", function () {
      playSide(parseInt(toSelect.value, 10));
    });

    renderBoth();
  }

  // ---------- Improvisation Playground ----------
  var improvWidget = document.getElementById("mt-improv-widget");
  if (improvWidget) {
    var improvKeySelect = document.getElementById("mt-improv-key-select");
    var improvProgSelect = document.getElementById("mt-improv-prog-select");
    var improvToggle = document.getElementById("mt-improv-toggle");
    var improvStatus = document.getElementById("mt-improv-status");
    var degreeRow = document.getElementById("mt-improv-degree-row");

    NOTE_NAMES.forEach(function (name, i) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.textContent = name + " Major";
      improvKeySelect.appendChild(opt);
    });

    var isLooping = false;
    var loopTimerId = null;
    var chordIndex = 0;
    var CHORD_DUR_MS = 1300;

    function tick() {
      var rootOffset = parseInt(improvKeySelect.value, 10);
      var scaleMidis = scaleMidisFor(rootOffset);
      var degrees = PROGRESSIONS[improvProgSelect.value];
      if (chordIndex >= degrees.length) chordIndex = 0;
      var deg = degrees[chordIndex];
      var triad = triadForDegree(scaleMidis, deg);
      triad.forEach(function (midi) { playTone(midiToFreq(midi), 0, CHORD_DUR_MS / 1000 * 0.9, "sine", 0.14); });
      improvStatus.textContent = "Now playing: " + ROMAN[deg] + " (" + chordSymbol(scaleMidis, deg) + ") \u2014 improvise over it!";
      chordIndex = (chordIndex + 1) % degrees.length;
      loopTimerId = setTimeout(tick, CHORD_DUR_MS);
    }

    function startLoop() {
      isLooping = true;
      chordIndex = 0;
      improvToggle.textContent = "\u25a0 Stop Loop";
      improvToggle.classList.add("mt-active-toggle");
      tick();
    }
    function stopLoop() {
      isLooping = false;
      clearTimeout(loopTimerId);
      improvToggle.textContent = "\u25b6 Start Loop";
      improvToggle.classList.remove("mt-active-toggle");
      improvStatus.textContent = "Loop stopped. Press start, then play along below.";
    }

    improvToggle.addEventListener("click", function () {
      if (isLooping) stopLoop(); else startLoop();
    });

    function renderDegreeButtons() {
      var rootOffset = parseInt(improvKeySelect.value, 10);
      var rootMidi = 60 + rootOffset;
      degreeRow.innerHTML = "";
      MAJOR_SCALE_OFFSETS.concat([12]).forEach(function (o, i) {
        var midi = rootMidi + o;
        var btn = document.createElement("button");
        btn.className = "mt-btn";
        btn.textContent = (i + 1) + ": " + noteName(midi);
        btn.addEventListener("click", function () {
          playTone(midiToFreq(midi), 0, 0.5);
        });
        degreeRow.appendChild(btn);
      });
    }

    improvKeySelect.addEventListener("change", renderDegreeButtons);

    renderDegreeButtons();
  }
})();
</script>
