# Chapter 7 — Chords

## Learning Objectives

By the end of this chapter, you should be able to:

- Explain what a chord is.
- Understand how chords are built using intervals.
- Construct major, minor, diminished, and augmented triads.
- Recognize suspended and power chords.
- Understand chord inversions.
- Read common chord symbols.

> 🎧 This chapter is interactive — build any triad in any inversion below, and hear how a single major scale generates a whole family of chords.

---

## Introduction

While a melody consists of notes played one after another, a **chord** is created when multiple notes are played at the same time.

Chords provide the harmonic foundation of music. They create feelings of stability, tension, excitement, and resolution, helping to support melodies and shape the emotional character of a piece.

Most Western music is built around chords, making them one of the most important topics in music theory.

---

## What Is a Chord?

A **chord** is a group of **three or more different notes** played simultaneously.

```
C  E  G
```

When played together, these notes form a **C Major chord**.

Although a chord normally contains at least three different notes, guitarists and other instrumentalists often omit or duplicate notes depending on the instrument and musical context.

---

## Building Chords

Most chords are built by stacking **thirds**. Starting with a note called the **root**, we add notes that are a third and a fifth above it.

```
C
↓ Major Third
E
↓ Minor Third
G
```

This produces **C E G**. The three notes are called:

| Position | Name |
|----------|------|
| First note | Root |
| Second note | Third |
| Third note | Fifth |

These three-note chords are known as **triads**.

---

## Major Triads

A **major triad** consists of Root + Major 3rd + Perfect 5th.

| Chord | Notes |
|-------|-------|
| C Major | C E G |
| G Major | G B D |
| D Major | D F♯ A |
| F Major | F A C |

Major chords are often described as sounding bright, stable, strong, and happy.

---

## Minor Triads

A **minor triad** consists of Root + Minor 3rd + Perfect 5th.

| Chord | Notes |
|-------|-------|
| A Minor | A C E |
| E Minor | E G B |
| D Minor | D F A |
| B Minor | B D F♯ |

Compared with a major chord, only the third changes. Minor chords are commonly associated with sounds that are calm, emotional, reflective, and mysterious.

---

## Comparing Major and Minor Chords

```
C Major:  C  E   G
C Minor:  C  E♭  G
```

The only difference is **E → E♭**. Lowering the third by one semitone changes the chord from major to minor.

---

## Diminished Triads

A **diminished triad** consists of Root + Minor 3rd + Diminished 5th.

| Chord | Notes |
|-------|-------|
| B Diminished | B D F |
| C♯ Diminished | C♯ E G |
| D Diminished | D F A♭ |

Diminished chords sound tense and unstable. They are commonly used to create suspense before resolving to another chord.

---

## Augmented Triads

An **augmented triad** consists of Root + Major 3rd + Augmented 5th.

| Chord | Notes |
|-------|-------|
| C Augmented | C E G♯ |
| F Augmented | F A C♯ |
| G Augmented | G B D♯ |

Augmented chords produce a bright but unsettled sound and often lead naturally to another chord.

---

## Triad Summary

| Chord Type | Formula |
|------------|---------|
| Major | Root – Major 3rd – Perfect 5th |
| Minor | Root – Minor 3rd – Perfect 5th |
| Diminished | Root – Minor 3rd – Diminished 5th |
| Augmented | Root – Major 3rd – Augmented 5th |

Notice that only the third and fifth determine the quality of the triad.

---

## Suspended Chords

A **suspended chord** replaces the third with another scale degree. Because the third determines whether a chord is major or minor, suspended chords have a more open and neutral sound.

**Sus2** — Root + Major 2nd + Perfect 5th, e.g. **C D G**.

**Sus4** — Root + Perfect 4th + Perfect 5th, e.g. **C F G**.

Suspended chords often resolve to major or minor chords by moving the suspended note to the third.

---

## Power Chords

A **power chord** contains only the Root and Perfect Fifth, sometimes with the root doubled an octave higher: **C G** or **C G C**.

Because there is no third, power chords are neither major nor minor. Power chords are especially common in rock, heavy metal, and punk music — their simple structure creates a strong and powerful sound.

### 🎚️ Try it — Triad Builder

Pick a root, a chord type, and an inversion. The lowest-sounding note (the "bass" note) is highlighted with a ring — notice it's always the same three pitches for a given root and type, just rearranged.

<div class="mt-widget" id="mt-triad-widget">
  <div class="mt-widget-label">🎚️ Triad Builder</div>
  <div class="mt-interval-controls">
    <label class="mt-field">
      Root
      <select id="mt-triad-root-select" class="mt-select"></select>
    </label>
    <label class="mt-field">
      Chord Type
      <select id="mt-triad-type-select" class="mt-select">
        <option value="major" selected>Major</option>
        <option value="minor">Minor</option>
        <option value="diminished">Diminished</option>
        <option value="augmented">Augmented</option>
        <option value="sus2">Sus2</option>
        <option value="sus4">Sus4</option>
        <option value="power">Power Chord (5)</option>
      </select>
    </label>
    <label class="mt-field">
      Inversion
      <select id="mt-triad-inversion-select" class="mt-select">
        <option value="0" selected>Root Position</option>
        <option value="1">First Inversion</option>
        <option value="2">Second Inversion</option>
      </select>
    </label>
  </div>
  <div class="mt-scale-row" id="mt-triad-row"></div>
  <div class="mt-status" id="mt-triad-status"></div>
  <button class="mt-btn" id="mt-triad-play-together">▶ Play Together</button>
  <button class="mt-btn" id="mt-triad-play-arpeggio">▶ Play Arpeggiated</button>
</div>

---

## Chord Inversions

Until now, the **root** has always been the lowest note — this arrangement is called **root position**. A chord can also be rearranged so that another note is the lowest; these arrangements are called **inversions**.

**Root Position** — C E G. Lowest note: C.

**First Inversion** — move the root up one octave: E G C. Lowest note: E.

**Second Inversion** — move the lowest note up another octave: G C E. Lowest note: G.

Although the notes are in a different order, the chord is still C Major. Inversions make chord progressions smoother by reducing large jumps between chords. Try switching inversions in the widget above with the chord type set to Major — you'll hear the same three pitch classes, just with a different note on the bottom.

---

## Chord Symbols

Musicians often use abbreviated symbols instead of writing every note.

| Symbol | Meaning |
|--------|---------|
| C | C Major |
| Cm | C Minor |
| Cdim | C Diminished |
| Caug or C+ | C Augmented |
| Csus2 | C Suspended 2 |
| Csus4 | C Suspended 4 |
| C5 | C Power Chord |

These symbols are widely used in lead sheets, chord charts, and popular music.

---

## Chords Built from the Major Scale

Each degree of a major scale can be used to build a triad. Using the C Major scale (C D E F G A B), the resulting triads are:

| Scale Degree | Chord |
|--------------|-------|
| I | C Major |
| ii | D Minor |
| iii | E Minor |
| IV | F Major |
| V | G Major |
| vi | A Minor |
| vii° | B Diminished |

Notice the pattern: **Major – Minor – Minor – Major – Major – Minor – Diminished**. This pattern is the same for every major key.

### 🎧 Try it — Scale Harmonization Explorer

Pick any key and click through all seven diatonic triads (I – vii°) to hear how the major/minor/diminished pattern holds no matter which key you choose. "Play I–IV–V–I" plays the three most common chords in that key back to back.

<div class="mt-widget" id="mt-harmonization-widget">
  <div class="mt-widget-label">🎧 Scale Harmonization Explorer</div>
  <label class="mt-field">
    Key
    <select id="mt-harm-key-select" class="mt-select"></select>
  </label>
  <div class="mt-chord-row" id="mt-harm-row"></div>
  <div class="mt-status" id="mt-harm-status">Click any chord above.</div>
  <button class="mt-btn" id="mt-harm-progression">▶ Play I – IV – V – I</button>
</div>

---

## Practice Examples

### Example 1
Construct a G Major chord.
**Answer:** G B D

### Example 2
Construct an E Minor chord.
**Answer:** E G B

### Example 3
Which note changes when C Major becomes C Minor?
**Answer:** E → E♭

### Example 4
What notes form a Diminished B chord?
**Answer:** B D F

### Example 5
What is the first inversion of C Major?
**Answer:** E G C

---

## Key Takeaways

- A chord consists of three or more notes played together.
- Most chords are built by stacking thirds.
- A triad contains a root, a third, and a fifth.
- Major and minor chords differ only in the third.
- Diminished chords have a lowered fifth.
- Augmented chords have a raised fifth.
- Suspended chords replace the third with the second or fourth.
- Power chords contain only the root and fifth.
- Chord inversions change the lowest note while keeping the chord quality the same.
- Every major scale naturally produces a predictable pattern of triads.

---

## Summary

Chords provide the harmonic framework of music. In this chapter, you learned how triads are constructed from intervals, how major, minor, diminished, augmented, suspended, and power chords differ, and how inversions improve voice leading. You also saw how the notes of a major scale naturally generate a family of related chords that are used in countless musical compositions.

In the next chapter, you will expand these ideas by exploring **seventh and extended chords**, which add richness and complexity to harmony.

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

  // ---------- Triad Builder ----------
  var triadWidget = document.getElementById("mt-triad-widget");
  if (triadWidget) {
    var rootSelect = document.getElementById("mt-triad-root-select");
    var typeSelect = document.getElementById("mt-triad-type-select");
    var inversionSelect = document.getElementById("mt-triad-inversion-select");
    var triadRow = document.getElementById("mt-triad-row");
    var triadStatus = document.getElementById("mt-triad-status");

    NOTE_NAMES.forEach(function (name, i) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.textContent = name;
      rootSelect.appendChild(opt);
    });

    var CHORD_FORMULAS = {
      major:      [0, 4, 7],
      minor:      [0, 3, 7],
      diminished: [0, 3, 6],
      augmented:  [0, 4, 8],
      sus2:       [0, 2, 7],
      sus4:       [0, 5, 7],
      power:      [0, 7]
    };
    var CHORD_LABELS = {
      major: "", minor: "m", diminished: "dim", augmented: "aug",
      sus2: "sus2", sus4: "sus4", power: "5"
    };

    function invert(offsets, inversion) {
      var notes = offsets.slice();
      for (var k = 0; k < inversion && k < notes.length; k++) {
        notes.push(notes.shift() + 12);
      }
      return notes;
    }

    function currentTriad() {
      var rootOffset = parseInt(rootSelect.value, 10);
      var type = typeSelect.value;
      var maxInversion = CHORD_FORMULAS[type].length - 1;
      var inversion = Math.min(parseInt(inversionSelect.value, 10), maxInversion);
      var baseOffsets = CHORD_FORMULAS[type];
      var inverted = invert(baseOffsets, inversion);
      var rootMidi = 60 + rootOffset;
      var midis = inverted.map(function (o) { return rootMidi + o; });
      return { midis: midis, type: type, rootOffset: rootOffset, inversion: inversion };
    }

    function renderTriad() {
      var data = currentTriad();
      triadRow.innerHTML = "";
      var lowest = Math.min.apply(null, data.midis);
      data.midis.forEach(function (midi) {
        var chip = document.createElement("div");
        chip.className = "mt-scale-chip";
        if (midi === lowest) chip.classList.add("mt-scale-chip-bass");
        chip.textContent = noteName(midi);
        triadRow.appendChild(chip);
      });
      var symbol = noteName(60 + data.rootOffset) + CHORD_LABELS[data.type];
      var invLabel = data.inversion === 0 ? "Root Position" : (data.inversion === 1 ? "First Inversion" : "Second Inversion");
      triadStatus.textContent = symbol + "  \u2014  " + invLabel + ".";
    }

    rootSelect.addEventListener("change", renderTriad);
    typeSelect.addEventListener("change", function () {
      renderTriad();
    });
    inversionSelect.addEventListener("change", renderTriad);

    document.getElementById("mt-triad-play-together").addEventListener("click", function () {
      var data = currentTriad();
      data.midis.forEach(function (midi) { playTone(midiToFreq(midi), 0, 1.0); });
    });
    document.getElementById("mt-triad-play-arpeggio").addEventListener("click", function () {
      var data = currentTriad();
      data.midis.forEach(function (midi, i) { playTone(midiToFreq(midi), i * 0.3, 0.4); });
    });

    renderTriad();
  }

  // ---------- Scale Harmonization Explorer ----------
  var harmWidget = document.getElementById("mt-harmonization-widget");
  if (harmWidget) {
    var harmKeySelect = document.getElementById("mt-harm-key-select");
    var harmRow = document.getElementById("mt-harm-row");
    var harmStatus = document.getElementById("mt-harm-status");

    NOTE_NAMES.forEach(function (name, i) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.textContent = name + " Major";
      harmKeySelect.appendChild(opt);
    });

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

    function renderHarmonization() {
      var rootOffset = parseInt(harmKeySelect.value, 10);
      var scaleMidis = scaleMidisFor(rootOffset);
      harmRow.innerHTML = "";
      for (var i = 0; i < 7; i++) {
        var triad = triadForDegree(scaleMidis, i);
        var symbol = noteName(scaleMidis[i]) + QUALITY_SUFFIX[i];
        var btn = document.createElement("button");
        btn.className = "mt-btn";
        btn.textContent = ROMAN[i] + ": " + symbol;
        (function (triadNotes, label) {
          btn.addEventListener("click", function () {
            triadNotes.forEach(function (midi) { playTone(midiToFreq(midi), 0, 0.9); });
            harmStatus.textContent = "Playing " + label + ".";
          });
        })(triad, ROMAN[i] + " (" + symbol + ")");
        harmRow.appendChild(btn);
      }
    }

    harmKeySelect.addEventListener("change", renderHarmonization);

    document.getElementById("mt-harm-progression").addEventListener("click", function () {
      var rootOffset = parseInt(harmKeySelect.value, 10);
      var scaleMidis = scaleMidisFor(rootOffset);
      var degrees = [0, 3, 4, 0]; // I IV V I
      degrees.forEach(function (deg, i) {
        var triad = triadForDegree(scaleMidis, deg);
        triad.forEach(function (midi) { playTone(midiToFreq(midi), i * 0.9, 0.85); });
      });
      harmStatus.textContent = "Playing I \u2013 IV \u2013 V \u2013 I in " + noteName(60 + rootOffset) + " Major.";
    });

    renderHarmonization();
  }
})();
</script>
