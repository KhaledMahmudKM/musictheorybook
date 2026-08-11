# Chapter 5 — Major Scales

## Learning Objectives

By the end of this chapter, you should be able to:

- Explain what a musical scale is.
- Construct a major scale using whole and half steps.
- Identify the scale degrees of a major scale.
- Build major scales starting from different notes.
- Understand the relationship between key signatures and major scales.
- Use the Circle of Fifths to identify major keys.

> 🎧 This chapter is interactive — build any major scale by ear below, then use the clickable Circle of Fifths to explore how key signatures relate to one another.

---

## Introduction

A **scale** is a sequence of notes arranged in ascending or descending order of pitch.

Scales are one of the most important concepts in music theory because they form the foundation of:

- Melodies
- Harmony
- Chords
- Key signatures
- Musical improvisation

Although many different types of scales exist, the **major scale** is the most common and serves as the basis for understanding Western music.

---

## What Is a Major Scale?

A **major scale** consists of **seven different notes**, followed by the eighth note, which is the starting note repeated one octave higher.

```
C  D  E  F  G  A  B  C
```

The first and last notes have the same name but are one octave apart.

What makes a scale "major" is not the note it starts on, but the specific pattern of intervals between its notes.

---

## Whole-Step and Half-Step Pattern

Every major scale follows the same pattern of whole steps (W) and half steps (H):

```
W – W – H – W – W – W – H
```

Or visually:

```
1 → 2 → 3 → 4 → 5 → 6 → 7 → 8
 W   W   H   W   W   W   H
```

This pattern remains the same regardless of the starting note.

---

## Building the C Major Scale

Let's build the C Major scale. Start with C, and apply the major scale pattern:

```
C → D   (Whole)
D → E   (Whole)
E → F   (Half)
F → G   (Whole)
G → A   (Whole)
A → B   (Whole)
B → C   (Half)
```

Result:

```
C  D  E  F  G  A  B  C
```

Notice that the C Major scale contains **no sharps or flats**.

---

## Building Other Major Scales

When the starting note changes, accidentals are often needed to preserve the same whole-step and half-step pattern.

### G Major

```
G  A  B  C  D  E  F♯  G
```

The G Major scale contains one sharp: F♯.

### D Major

```
D  E  F♯  G  A  B  C♯  D
```

Sharps: F♯, C♯.

### F Major

```
F  G  A  B♭  C  D  E  F
```

Flats: B♭.

### 🎚️ Try it — Scale Builder

Pick any of the 12 major keys and watch (and hear) the W–W–H–W–W–W–H pattern build the scale in real time, correctly spelled with sharps or flats — exactly the way the examples above were constructed.

<div class="mt-widget" id="mt-scale-widget">
  <div class="mt-widget-label">🎚️ Major Scale Builder</div>
  <label class="mt-field">
    Key
    <select id="mt-scale-key-select" class="mt-select"></select>
  </label>
  <div class="mt-scale-row" id="mt-scale-row"></div>
  <div class="mt-status" id="mt-scale-accidentals">C Major has no sharps or flats.</div>
  <button class="mt-btn" id="mt-scale-play-up">▶ Play Ascending</button>
  <button class="mt-btn" id="mt-scale-play-down">▶ Play Descending</button>
</div>

---

## Why Are Sharps and Flats Needed?

Suppose we try to build a G Major scale without using sharps:

```
G  A  B  C  D  E  F  G
```

Check the interval pattern:

```
G → A  W
A → B  W
B → C  H
C → D  W
D → E  W
E → F  H   ❌
```

The pattern should end with **W – H**, not **H – W**. By raising F to F♯, the correct interval pattern is restored. Try selecting G Major in the widget above and compare — the pattern always reads W-W-H-W-W-W-H no matter which key you pick.

---

## Scale Degrees

Each note of a scale has a specific position called a **scale degree**.

Using the C Major scale:

```
C  D  E  F  G  A  B
```

| Degree | Name |
|---------|----------------|
| 1 | Tonic |
| 2 | Supertonic |
| 3 | Mediant |
| 4 | Subdominant |
| 5 | Dominant |
| 6 | Submediant |
| 7 | Leading Tone |

The eighth note is simply the tonic repeated one octave higher. These names are important because each degree has a characteristic musical function.

---

## Functions of the Scale Degrees

Each scale degree contributes differently to the sound of a key.

### Tonic (1)

The tonic is the "home" note. Melodies often begin or end on the tonic because it provides a sense of stability and resolution.

### Dominant (5)

The dominant creates tension and naturally leads back to the tonic. Many chord progressions rely on this relationship.

### Leading Tone (7)

The leading tone lies one semitone below the tonic. Because of its close proximity, it creates a strong sense of movement toward the tonic.

```
B → C
```

The note B strongly "wants" to resolve to C.

---

## Key Signatures and Major Scales

Each major scale has a corresponding **key signature**. Instead of writing accidentals repeatedly, the key signature places them at the beginning of the staff.

| Major Key | Sharps/Flats |
|-----------|--------------|
| C Major | None |
| G Major | F♯ |
| D Major | F♯ C♯ |
| A Major | F♯ C♯ G♯ |
| F Major | B♭ |
| B♭ Major | B♭ E♭ |

Learning major scales naturally leads to learning key signatures.

---

## The Circle of Fifths

The **Circle of Fifths** organizes keys according to perfect fifths. Moving **clockwise** adds one sharp each time:

```
C → G → D → A → E → B → F♯ → C♯
```

Moving **counterclockwise** adds one flat each time:

```
C → F → B♭ → E♭ → A♭ → D♭ → G♭ → C♭
```

The Circle of Fifths helps musicians identify key signatures, understand relationships between keys, transpose music, and build chord progressions. You will revisit the Circle of Fifths in a later chapter when studying modulation.

### 🎧 Try it — Clickable Circle of Fifths

Click any key around the circle to hear its major scale and see exactly how many sharps or flats it uses. Notice how each step clockwise adds exactly one sharp, and each step counterclockwise adds exactly one flat.

<div class="mt-widget" id="mt-circle-widget">
  <div class="mt-widget-label">🎧 Circle of Fifths</div>
  <svg viewBox="0 0 300 300" class="mt-circle-svg" id="mt-circle-svg">
    <g class="mt-circle-key" data-key="C" transform="translate(150.0,30.0)">
      <circle r="26" class="mt-circle-key-circle"/>
      <text class="mt-circle-key-label" dy="1">C</text>
    </g>
    <g class="mt-circle-key" data-key="G" transform="translate(210.0,46.1)">
      <circle r="26" class="mt-circle-key-circle"/>
      <text class="mt-circle-key-label" dy="1">G</text>
    </g>
    <g class="mt-circle-key" data-key="D" transform="translate(253.9,90.0)">
      <circle r="26" class="mt-circle-key-circle"/>
      <text class="mt-circle-key-label" dy="1">D</text>
    </g>
    <g class="mt-circle-key" data-key="A" transform="translate(270.0,150.0)">
      <circle r="26" class="mt-circle-key-circle"/>
      <text class="mt-circle-key-label" dy="1">A</text>
    </g>
    <g class="mt-circle-key" data-key="E" transform="translate(253.9,210.0)">
      <circle r="26" class="mt-circle-key-circle"/>
      <text class="mt-circle-key-label" dy="1">E</text>
    </g>
    <g class="mt-circle-key" data-key="B" transform="translate(210.0,253.9)">
      <circle r="26" class="mt-circle-key-circle"/>
      <text class="mt-circle-key-label" dy="1">B</text>
    </g>
    <g class="mt-circle-key" data-key="F♯" transform="translate(150.0,270.0)">
      <circle r="26" class="mt-circle-key-circle"/>
      <text class="mt-circle-key-label" dy="1">F♯</text>
    </g>
    <g class="mt-circle-key" data-key="D♭" transform="translate(90.0,253.9)">
      <circle r="26" class="mt-circle-key-circle"/>
      <text class="mt-circle-key-label" dy="1">D♭</text>
    </g>
    <g class="mt-circle-key" data-key="A♭" transform="translate(46.1,210.0)">
      <circle r="26" class="mt-circle-key-circle"/>
      <text class="mt-circle-key-label" dy="1">A♭</text>
    </g>
    <g class="mt-circle-key" data-key="E♭" transform="translate(30.0,150.0)">
      <circle r="26" class="mt-circle-key-circle"/>
      <text class="mt-circle-key-label" dy="1">E♭</text>
    </g>
    <g class="mt-circle-key" data-key="B♭" transform="translate(46.1,90.0)">
      <circle r="26" class="mt-circle-key-circle"/>
      <text class="mt-circle-key-label" dy="1">B♭</text>
    </g>
    <g class="mt-circle-key" data-key="F" transform="translate(90.0,46.1)">
      <circle r="26" class="mt-circle-key-circle"/>
      <text class="mt-circle-key-label" dy="1">F</text>
    </g>
  </svg>
  <div class="mt-status" id="mt-circle-readout">Click a key on the circle.</div>
</div>

---

## Practicing Major Scales

A good way to learn major scales is to:

1. Memorize the whole-step and half-step pattern.
2. Build scales beginning on different notes.
3. Identify the required sharps or flats.
4. Practice ascending and descending.
5. Play or sing the scales regularly.

Over time, recognizing major scales becomes almost automatic. Use the Scale Builder above as a practice tool — try quizzing yourself by picking a key, predicting its sharps or flats, and then checking your answer.

---

## Practice Examples

### Example 1
Construct the D Major scale.
**Answer:** D E F♯ G A B C♯ D

### Example 2
Which major scale has no sharps or flats?
**Answer:** C Major

### Example 3
What is the fifth degree of the G Major scale? (G A B C D E F♯)
**Answer:** D

### Example 4
What is the seventh degree of the F Major scale? (F G A B♭ C D E)
**Answer:** E

### Example 5
What interval pattern defines every major scale?
**Answer:** Whole – Whole – Half – Whole – Whole – Whole – Half

---

## Key Takeaways

- A major scale contains seven unique notes followed by the octave.
- Every major scale follows the interval pattern: Whole, Whole, Half, Whole, Whole, Whole, Half.
- Accidentals preserve this interval pattern when starting on different notes.
- Each note of the scale has a specific name and musical function.
- Every major scale corresponds to a key signature.
- The Circle of Fifths organizes major keys according to their sharps and flats.

---

## Summary

Major scales form the foundation of Western music theory. In this chapter, you learned how every major scale is built from the same pattern of whole and half steps, regardless of its starting note. You also explored scale degrees, their musical functions, the relationship between major scales and key signatures, and the Circle of Fifths. These concepts provide the framework for understanding melodies, harmony, and chord construction.

In the next chapter, you will learn about **minor scales and musical modes**, expanding your understanding of the different tonal colors used in music.

<script>
(function () {
  "use strict";

  if (!window.MTAudio) {
    console.error("MTAudio engine not found — make sure js/audio-engine.js is loaded in index.html");
    return;
  }
  var playTone = window.MTAudio.playTone;
  var midiToFreq = window.MTAudio.midiToFreq;

  // ---------- Shared key data ----------
  var LETTER_BASE = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  function pitchClass(noteName) {
    var letter = noteName.charAt(0);
    var acc = noteName.slice(1);
    var offset = acc === "♯" ? 1 : (acc === "♭" ? -1 : 0);
    return ((LETTER_BASE[letter] + offset) % 12 + 12) % 12;
  }
  function buildScaleMidis(spelling, rootMidi) {
    var midis = [rootMidi];
    for (var i = 1; i < spelling.length; i++) {
      var pc = pitchClass(spelling[i]);
      var prev = midis[i - 1];
      var candidate = prev - (prev % 12) + pc;
      while (candidate <= prev) candidate += 12;
      midis.push(candidate);
    }
    return midis;
  }

  var KEYS = {
    "C":  { spelling: ["C","D","E","F","G","A","B","C"],     rootMidi: 60 },
    "G":  { spelling: ["G","A","B","C","D","E","F♯","G"],    rootMidi: 67 },
    "D":  { spelling: ["D","E","F♯","G","A","B","C♯","D"],   rootMidi: 62 },
    "A":  { spelling: ["A","B","C♯","D","E","F♯","G♯","A"],  rootMidi: 69 },
    "E":  { spelling: ["E","F♯","G♯","A","B","C♯","D♯","E"], rootMidi: 64 },
    "B":  { spelling: ["B","C♯","D♯","E","F♯","G♯","A♯","B"],rootMidi: 71 },
    "F♯": { spelling: ["F♯","G♯","A♯","B","C♯","D♯","E♯","F♯"], rootMidi: 66 },
    "D♭": { spelling: ["D♭","E♭","F","G♭","A♭","B♭","C","D♭"], rootMidi: 61 },
    "A♭": { spelling: ["A♭","B♭","C","D♭","E♭","F","G","A♭"], rootMidi: 68 },
    "E♭": { spelling: ["E♭","F","G","A♭","B♭","C","D","E♭"], rootMidi: 63 },
    "B♭": { spelling: ["B♭","C","D","E♭","F","G","A","B♭"],  rootMidi: 70 },
    "F":  { spelling: ["F","G","A","B♭","C","D","E","F"],    rootMidi: 65 }
  };
  var CIRCLE_ORDER = ["C","G","D","A","E","B","F♯","D♭","A♭","E♭","B♭","F"];
  var STEP_PATTERN = ["W","W","H","W","W","W","H"];

  function accidentalSummary(spelling) {
    var accidentals = spelling.slice(0, 7).filter(function (n) { return n.length > 1; });
    if (accidentals.length === 0) return "no sharps or flats";
    var isSharp = accidentals[0].indexOf("♯") !== -1;
    return accidentals.length + (isSharp ? " sharp" : " flat") + (accidentals.length > 1 ? "s" : "") +
      " (" + accidentals.join(", ") + ")";
  }

  // ---------- Scale Builder ----------
  var scaleWidget = document.getElementById("mt-scale-widget");
  if (scaleWidget) {
    var keySelect = document.getElementById("mt-scale-key-select");
    var scaleRow = document.getElementById("mt-scale-row");
    var accidentalsEl = document.getElementById("mt-scale-accidentals");

    CIRCLE_ORDER.forEach(function (k) {
      var opt = document.createElement("option");
      opt.value = k;
      opt.textContent = k + " Major";
      keySelect.appendChild(opt);
    });

    function renderScale(key) {
      var data = KEYS[key];
      scaleRow.innerHTML = "";
      data.spelling.forEach(function (name, i) {
        var chip = document.createElement("div");
        chip.className = "mt-scale-chip";
        chip.id = "mt-scale-chip-" + i;
        chip.textContent = name;
        scaleRow.appendChild(chip);
        if (i < data.spelling.length - 1) {
          var step = document.createElement("div");
          step.className = "mt-scale-step";
          step.textContent = STEP_PATTERN[i];
          scaleRow.appendChild(step);
        }
      });
      accidentalsEl.textContent = key + " Major has " + accidentalSummary(data.spelling) + ".";
    }

    function highlightSequence(midis, ascending) {
      var order = midis.map(function (_, i) { return i; });
      if (!ascending) order.reverse();
      order.forEach(function (idx, seq) {
        setTimeout(function () {
          document.querySelectorAll("#mt-scale-row .mt-scale-chip").forEach(function (c) {
            c.classList.remove("mt-scale-chip-active");
          });
          var chip = document.getElementById("mt-scale-chip-" + idx);
          if (chip) chip.classList.add("mt-scale-chip-active");
        }, seq * 350);
      });
      setTimeout(function () {
        document.querySelectorAll("#mt-scale-row .mt-scale-chip").forEach(function (c) {
          c.classList.remove("mt-scale-chip-active");
        });
      }, order.length * 350);
    }

    function playScale(ascending) {
      var key = keySelect.value;
      var data = KEYS[key];
      var midis = buildScaleMidis(data.spelling, data.rootMidi);
      var seq = ascending ? midis : midis.slice().reverse();
      seq.forEach(function (midi, i) {
        playTone(midiToFreq(midi), i * 0.35, 0.32);
      });
      highlightSequence(midis, ascending);
    }

    keySelect.addEventListener("change", function () { renderScale(keySelect.value); });
    document.getElementById("mt-scale-play-up").addEventListener("click", function () { playScale(true); });
    document.getElementById("mt-scale-play-down").addEventListener("click", function () { playScale(false); });

    renderScale("C");
  }

  // ---------- Circle of Fifths ----------
  var circleWidget = document.getElementById("mt-circle-widget");
  if (circleWidget) {
    var circleSvg = document.getElementById("mt-circle-svg");
    var circleReadout = document.getElementById("mt-circle-readout");

    circleSvg.querySelectorAll(".mt-circle-key").forEach(function (g) {
      g.addEventListener("click", function () {
        circleSvg.querySelectorAll(".mt-circle-key").forEach(function (o) {
          o.classList.remove("mt-circle-key-active");
        });
        g.classList.add("mt-circle-key-active");

        var key = g.dataset.key;
        var data = KEYS[key];
        var midis = buildScaleMidis(data.spelling, data.rootMidi);
        midis.forEach(function (midi, i) {
          playTone(midiToFreq(midi), i * 0.3, 0.28);
        });
        circleReadout.textContent = key + " Major has " + accidentalSummary(data.spelling) + ".";
      });
    });
  }
})();
</script>
