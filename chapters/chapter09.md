# Chapter 9 — Harmony and Chord Progressions

## Learning Objectives

By the end of this chapter, you should be able to:

- Explain what harmony is.
- Understand functional harmony (tonic, subdominant, dominant).
- Identify cadences and their types.
- Use Roman numeral analysis for chords.
- Recognize common chord progressions.
- Understand the ii–V–I and I–V–vi–IV progressions.
- Understand the basics of the 12-bar blues.

> 🎧 This chapter is interactive — play through every progression and cadence type mentioned below, in any key you like.

---

## Introduction

If melody is what you sing, and rhythm is when you sing it, then **harmony is what supports it underneath**.

Harmony is created when chords are used in sequence, forming a sense of movement, tension, and resolution. Most songs you hear in Western music are built on repeating patterns of chords called **chord progressions**.

Understanding harmony allows you to predict how music will move, understand why certain chords sound "right" together, write your own songs, and analyze existing music.

---

## What Is Harmony?

**Harmony** is the combination of notes played at the same time and how these combinations move over time. In practice, harmony usually refers to chords, chord progressions, and the relationships between chords. While a single chord has a sound, harmony comes from how chords connect to each other.

---

## Functional Harmony

In tonal music, chords are not random — they have **functions**. Most harmony revolves around three main functions:

**Tonic (T)** — the "home" chord. It feels stable and resolved. I (major) or i (minor). Example: C major in C major key.

**Subdominant (S)** — creates movement away from home. IV or ii. Example: F major in C major key.

**Dominant (D)** — creates tension that strongly wants to resolve back to tonic. V or vii°. Example: G major or G7 in C major key.

---

## The Harmonic Flow

Most traditional harmony follows this basic movement:

```
Tonic → Subdominant → Dominant → Tonic
I → IV → V → I
```

This creates a complete musical "sentence": I = Home, IV = Departure, V = Tension, I = Return.

---

## Cadences

A **cadence** is a chord progression that ends a phrase or section of music. It is like punctuation in language.

**Authentic Cadence (V → I)** — the strongest resolution; sounds finished and stable. Example: G → C.

**Half Cadence (ends on V)** — feels unfinished; creates anticipation.

**Plagal Cadence (IV → I)** — often called the "Amen cadence"; a gentle resolution. Example: F → C.

**Deceptive Cadence (V → vi)** — the expectation is broken, creating surprise. Example: G → Am.

### 🎧 Try it — Cadence Comparator

Hear all four cadence types back to back, in any key. Notice how differently each one "ends" — the Authentic cadence sounds fully resolved, the Half cadence sounds like a question mark, and the Deceptive cadence pulls the rug out at the last moment.

<div class="mt-widget" id="mt-cadence-widget">
  <div class="mt-widget-label">🎧 Cadence Comparator</div>
  <label class="mt-field">
    Key
    <select id="mt-cadence-key-select" class="mt-select"></select>
  </label>
  <div class="mt-chord-row">
    <button class="mt-btn" id="mt-cadence-authentic">▶ Authentic (V → I)</button>
    <button class="mt-btn" id="mt-cadence-half">▶ Half (I → IV → V)</button>
    <button class="mt-btn" id="mt-cadence-plagal">▶ Plagal (IV → I)</button>
    <button class="mt-btn" id="mt-cadence-deceptive">▶ Deceptive (V → vi)</button>
  </div>
  <div class="mt-status" id="mt-cadence-status">Pick a cadence to hear it.</div>
</div>

---

## Roman Numeral Analysis

Roman numerals are used to describe chords relative to a key. In **C major**:

| Degree | Chord | Roman Numeral |
|--------|-------|---------------|
| C | C major | I |
| D | D minor | ii |
| E | E minor | iii |
| F | F major | IV |
| G | G major | V |
| A | A minor | vi |
| B | B diminished | vii° |

**Rules:** Uppercase = major chord. Lowercase = minor chord. ° = diminished chord. This system works in every key.

---

## Why Roman Numerals Matter

Roman numerals let us describe chord progressions without needing a specific key. For example, **I – V – vi – IV** means the same progression in every key:

- In C major: C – G – Am – F
- In G major: G – D – Em – C
- In D major: D – A – Bm – G

---

## Common Chord Progressions

**I – IV – V – I** — one of the most fundamental progressions. In C major: C → F → G → C. Used in classical, folk, and pop music.

**I – V – vi – IV** — one of the most popular modern progressions. In C major: C → G → Am → F. Used in countless pop songs, because it balances stability (I), tension (V), emotion (vi), and resolution (IV).

**vi – IV – I – V** — a variation of the above. In C major: Am → F → C → G. Often used in ballads and emotional songs.

---

## The ii–V–I Progression

This is one of the most important progressions in jazz and classical harmony. In C major: **Dm → G → C**, or in Roman numerals, **ii → V → I**.

Why it works: ii = preparation, V = tension, I = resolution. This creates a very smooth and logical harmonic motion.

---

## The 12-Bar Blues

The **12-bar blues** is a repeating chord structure commonly used in blues, rock, and jazz. In C major, it follows this pattern:

```
| C  | C  | C  | C  |
| F  | F  | C  | C  |
| G  | F  | C  | C  |
```

Roman numerals:

```
| I | I | I | I |
| IV | IV | I | I |
| V | IV | I | I |
```

This structure is the foundation of countless songs.

### 🎚️ Try it — Chord Progression Player

Pick a key and a progression, then hit play. Each chord lights up as it plays, along with its Roman numeral and chord symbol — the same relationship shown in the table above, but in any key you choose.

<div class="mt-widget" id="mt-progression-widget">
  <div class="mt-widget-label">🎚️ Chord Progression Player</div>
  <div class="mt-interval-controls">
    <label class="mt-field">
      Key
      <select id="mt-prog-key-select" class="mt-select"></select>
    </label>
    <label class="mt-field">
      Progression
      <select id="mt-prog-select" class="mt-select">
        <option value="I-IV-V-I" selected>I – IV – V – I</option>
        <option value="I-V-vi-IV">I – V – vi – IV</option>
        <option value="vi-IV-I-V">vi – IV – I – V</option>
        <option value="ii-V-I">ii – V – I</option>
        <option value="blues12">12-Bar Blues</option>
      </select>
    </label>
  </div>
  <div class="mt-scale-row" id="mt-prog-row"></div>
  <div class="mt-status" id="mt-prog-status"></div>
  <button class="mt-btn" id="mt-prog-play">▶ Play Progression</button>
</div>

---

## Chord Movement and Voice Leading

Good harmony is not only about which chords are used, but also how smoothly they connect. **Voice leading** refers to how individual notes in chords move from one chord to the next.

Good voice leading minimizes large jumps, keeps common tones when possible, and creates smooth melodic motion between chords.

```
C → Am
C E G → A C E
```

Notice: C stays C, E stays E, and only G moves to A. This smooth connection makes progressions sound natural.

---

## Tension and Resolution

Harmony is often described in terms of tension and release: **Tonic** = rest, **Dominant** = tension, **Resolution** = return to tonic. This creates emotional movement in music.

```
G7 → C
```

The tension in G7 resolves naturally to C major. (Recall the "V7 → I" widget from Chapter 8 if you'd like to hear that specific resolution again.)

---

## Practice Examples

### Example 1
What are the three main harmonic functions?
**Answer:** Tonic, Subdominant, Dominant.

### Example 2
What is the Roman numeral for the dominant chord in C major?
**Answer:** V

### Example 3
What is the chord progression I–V–vi–IV in C major?
**Answer:** C → G → Am → F

### Example 4
What is a cadence?
**Answer:** A chord progression that ends a musical phrase or section.

### Example 5
What progression defines the 12-bar blues structure in Roman numerals?
**Answer:** I–I–I–I / IV–IV–I–I / V–IV–I–I

---

## Key Takeaways

- Harmony is the relationship between chords over time.
- Functional harmony is based on tonic, subdominant, and dominant roles.
- Cadences are chord endings that create punctuation in music.
- Roman numerals describe chords relative to a key.
- Common progressions include I–IV–V, I–V–vi–IV, and ii–V–I.
- The 12-bar blues is one of the most important repeating structures in music.
- Voice leading improves the smoothness of chord movement.
- Tension and resolution drive musical expression.

---

## Summary

Harmony gives music its structure and emotional direction. In this chapter, you learned how chords function within tonal music, how Roman numerals help generalize progressions across all keys, and how common patterns like I–V–vi–IV and ii–V–I form the foundation of much Western music. You also explored cadences, voice leading, and the 12-bar blues structure.

In the next chapter, you will learn how **melody** is constructed and how it interacts with harmony to create memorable musical ideas.

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

  // ---------- Cadence Comparator ----------
  var cadenceWidget = document.getElementById("mt-cadence-widget");
  if (cadenceWidget) {
    var cadenceKeySelect = document.getElementById("mt-cadence-key-select");
    var cadenceStatus = document.getElementById("mt-cadence-status");

    NOTE_NAMES.forEach(function (name, i) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.textContent = name + " Major";
      cadenceKeySelect.appendChild(opt);
    });

    function playChordSeq(degrees, label) {
      var rootOffset = parseInt(cadenceKeySelect.value, 10);
      var scaleMidis = scaleMidisFor(rootOffset);
      degrees.forEach(function (deg, i) {
        var triad = triadForDegree(scaleMidis, deg);
        var dur = i === degrees.length - 1 ? 1.1 : 0.8;
        triad.forEach(function (midi) { playTone(midiToFreq(midi), i * 0.9, dur); });
      });
      var symbols = degrees.map(function (deg) { return ROMAN[deg] + " (" + chordSymbol(scaleMidis, deg) + ")"; });
      cadenceStatus.textContent = label + ":  " + symbols.join(" \u2192 ") + ".";
    }

    document.getElementById("mt-cadence-authentic").addEventListener("click", function () {
      playChordSeq([4, 0], "Authentic Cadence");
    });
    document.getElementById("mt-cadence-half").addEventListener("click", function () {
      playChordSeq([0, 3, 4], "Half Cadence");
    });
    document.getElementById("mt-cadence-plagal").addEventListener("click", function () {
      playChordSeq([3, 0], "Plagal Cadence");
    });
    document.getElementById("mt-cadence-deceptive").addEventListener("click", function () {
      playChordSeq([4, 5], "Deceptive Cadence");
    });
  }

  // ---------- Chord Progression Player ----------
  var progWidget = document.getElementById("mt-progression-widget");
  if (progWidget) {
    var progKeySelect = document.getElementById("mt-prog-key-select");
    var progSelect = document.getElementById("mt-prog-select");
    var progRow = document.getElementById("mt-prog-row");
    var progStatus = document.getElementById("mt-prog-status");

    NOTE_NAMES.forEach(function (name, i) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.textContent = name + " Major";
      progKeySelect.appendChild(opt);
    });

    var PROGRESSIONS = {
      "I-IV-V-I": [0, 3, 4, 0],
      "I-V-vi-IV": [0, 4, 5, 3],
      "vi-IV-I-V": [5, 3, 0, 4],
      "ii-V-I": [1, 4, 0],
      "blues12": [0, 0, 0, 0, 3, 3, 0, 0, 4, 3, 0, 0]
    };

    function renderProgression() {
      var rootOffset = parseInt(progKeySelect.value, 10);
      var scaleMidis = scaleMidisFor(rootOffset);
      var degrees = PROGRESSIONS[progSelect.value];
      progRow.innerHTML = "";
      degrees.forEach(function (deg, i) {
        var chip = document.createElement("div");
        chip.className = "mt-scale-chip";
        chip.id = "mt-prog-chip-" + i;
        chip.textContent = ROMAN[deg] + "\n" + chordSymbol(scaleMidis, deg);
        chip.style.whiteSpace = "pre";
        progRow.appendChild(chip);
      });
      progStatus.textContent = "Ready to play " + degrees.length + " chords in " + noteName(60 + rootOffset) + " Major.";
    }

    progKeySelect.addEventListener("change", renderProgression);
    progSelect.addEventListener("change", renderProgression);

    document.getElementById("mt-prog-play").addEventListener("click", function () {
      var rootOffset = parseInt(progKeySelect.value, 10);
      var scaleMidis = scaleMidisFor(rootOffset);
      var degrees = PROGRESSIONS[progSelect.value];
      var perChord = 0.75;
      degrees.forEach(function (deg, i) {
        var triad = triadForDegree(scaleMidis, deg);
        triad.forEach(function (midi) { playTone(midiToFreq(midi), i * perChord, perChord * 0.95); });
        setTimeout(function () {
          document.querySelectorAll("#mt-prog-row .mt-scale-chip").forEach(function (c) {
            c.classList.remove("mt-scale-chip-active");
          });
          var chip = document.getElementById("mt-prog-chip-" + i);
          if (chip) chip.classList.add("mt-scale-chip-active");
        }, i * perChord * 1000);
      });
      setTimeout(function () {
        document.querySelectorAll("#mt-prog-row .mt-scale-chip").forEach(function (c) {
          c.classList.remove("mt-scale-chip-active");
        });
      }, degrees.length * perChord * 1000);
      progStatus.textContent = "Playing " + progSelect.options[progSelect.selectedIndex].textContent + " in " + noteName(60 + rootOffset) + " Major.";
    });

    renderProgression();
  }
})();
</script>
