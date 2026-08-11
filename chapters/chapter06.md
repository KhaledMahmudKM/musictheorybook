# Chapter 6 — Minor Scales and Musical Modes

## Learning Objectives

By the end of this chapter, you should be able to:

- Explain the characteristics of minor scales.
- Construct natural, harmonic, and melodic minor scales.
- Distinguish between relative and parallel keys.
- Understand the purpose of musical modes.
- Recognize the seven traditional modes.
- Identify common uses of minor scales and modes.

> 🎧 This chapter is interactive — compare the three minor scale forms by ear, then explore all seven modes from any tonic you like.

---

## Introduction

While major scales often sound bright and uplifting, **minor scales** are commonly associated with darker, more emotional, or more mysterious moods. Both major and minor keys are fundamental to Western music, and many pieces move between them.

In addition to major and minor scales, musicians also use **modes** — alternative scale patterns that create distinctive musical colors.

---

## The Natural Minor Scale

The **natural minor scale** is the simplest and most common type of minor scale. Its interval pattern is:

```
W – H – W – W – H – W – W
```

where **W** = Whole step and **H** = Half step.

For example, the A Natural Minor scale is:

```
A  B  C  D  E  F  G  A
```

Notice that it contains **no sharps or flats**, just like the C Major scale.

---

## Comparing Major and Minor Scales

Compare the C Major and A Natural Minor scales:

```
C Major:        C  D  E  F  G  A  B  C
A Natural Minor: A  B  C  D  E  F  G  A
```

Although they use exactly the same notes, they have different tonal centers. C Major feels resolved on **C**, while A Minor feels resolved on **A**. This difference creates a completely different musical character.

---

## Relative Minor

Every major key has a **relative minor**. A relative minor uses the same key signature, contains the same notes, and begins on the sixth degree of the major scale.

| Major Key | Relative Minor |
|-----------|----------------|
| C Major | A Minor |
| G Major | E Minor |
| D Major | B Minor |
| F Major | D Minor |
| B♭ Major | G Minor |

A quick way to find the relative minor is to count down three semitones (or up six scale degrees) from the major tonic:

```
C → B → B♭ → A
```

Therefore: **C Major ↔ A Minor**.

---

## Parallel Minor

A **parallel minor** shares the **same tonic** as its major key but uses a different set of notes.

| Major | Parallel Minor |
|--------|----------------|
| C Major | C Minor |
| G Major | G Minor |
| D Major | D Minor |

```
C Major:        C  D  E  F  G  A  B
C Minor (Natural): C  D  E♭ F  G  A♭ B♭
```

Unlike relative keys, parallel keys do **not** share the same key signature.

---

## The Harmonic Minor Scale

The natural minor scale sometimes lacks a strong pull back to the tonic because its seventh degree is a whole step below the tonic. To strengthen this resolution, the seventh degree is raised by one semitone.

The interval pattern becomes:

```
W – H – W – W – H – W+H – H
```

where **W+H** represents an interval of three semitones (an augmented second).

```
A Harmonic Minor: A  B  C  D  E  F  G♯  A
A Natural Minor:  A  B  C  D  E  F  G   A
```

Only the seventh note changes. The raised seventh creates a strong tendency for **G♯ → A**, making harmonic minor especially useful for harmony and chord progressions.

---

## The Melodic Minor Scale

The **melodic minor scale** modifies two notes when ascending: the sixth degree and seventh degree are both raised. When descending, it returns to the natural minor form.

```
Ascending:  A  B  C  D  E  F♯  G♯  A
Descending: A  G  F  E  D  C   B   A
```

This version avoids the large interval found in the harmonic minor scale and creates smoother melodic movement.

> **Note:** In jazz theory, the melodic minor scale is often played with the raised sixth and seventh in both ascending and descending directions.

### 🎚️ Try it — Minor Scale Comparator

Pick a tonic and switch between Natural, Harmonic, and Melodic (Ascending) minor. The notes that change from the natural form are outlined in red — notice it's always just the 6th and/or 7th degree.

<div class="mt-widget" id="mt-minor-widget">
  <div class="mt-widget-label">🎚️ Minor Scale Comparator</div>
  <div class="mt-interval-controls">
    <label class="mt-field">
      Tonic
      <select id="mt-minor-tonic-select" class="mt-select"></select>
    </label>
    <label class="mt-field">
      Form
      <select id="mt-minor-form-select" class="mt-select">
        <option value="natural" selected>Natural Minor</option>
        <option value="harmonic">Harmonic Minor</option>
        <option value="melodic">Melodic Minor (Ascending)</option>
      </select>
    </label>
  </div>
  <div class="mt-scale-row" id="mt-minor-row"></div>
  <div class="mt-status" id="mt-minor-status"></div>
  <button class="mt-btn" id="mt-minor-play-up">▶ Play Ascending</button>
  <button class="mt-btn" id="mt-minor-play-down">▶ Play Descending</button>
</div>

---

## Comparing the Three Minor Scales

Using A as the tonic:

| Scale | Notes |
|--------|-------|
| Natural Minor | A B C D E F G A |
| Harmonic Minor | A B C D E F G♯ A |
| Melodic Minor (Ascending) | A B C D E F♯ G♯ A |

Notice that each version differs only in the sixth and seventh scale degrees — exactly what the widget above highlights.

---

## What Are Musical Modes?

Before the modern major and minor key system developed, music was often based on **modes**. A **mode** is a scale created by starting on a different degree of the major scale while keeping the same notes. Each mode has its own unique interval pattern and musical character.

---

## The Seven Traditional Modes

Using the C Major scale as the starting point:

| Mode | Notes |
|------|-------|
| Ionian | C D E F G A B |
| Dorian | D E F G A B C |
| Phrygian | E F G A B C D |
| Lydian | F G A B C D E |
| Mixolydian | G A B C D E F |
| Aeolian | A B C D E F G |
| Locrian | B C D E F G A |

Although these modes contain the same notes, each has a different tonic and therefore a different sound.

---

## Characteristics of the Modes

### Ionian
Equivalent to the major scale. Bright and stable.

### Dorian
Minor with a raised sixth. Often heard in jazz, blues, and folk music.

### Phrygian
Minor with a lowered second. Creates a dark, dramatic, and often Spanish or Middle Eastern flavor.

### Lydian
Major with a raised fourth. Dreamlike and bright. Frequently used in film music.

### Mixolydian
Major with a lowered seventh. Common in blues, rock, folk, and country music.

### Aeolian
Equivalent to the natural minor scale. Melancholic and expressive.

### Locrian
Minor with a lowered second and lowered fifth. Unstable and rarely used as the basis for an entire composition.

### 🎧 Try it — Mode Explorer

Pick any tonic and any mode. Try keeping the tonic fixed (for example, C) and cycling through all seven modes — this is the clearest way to hear each mode's unique color side by side, since only the pattern of steps changes, not the starting pitch.

<div class="mt-widget" id="mt-mode-widget">
  <div class="mt-widget-label">🎧 Mode Explorer</div>
  <div class="mt-interval-controls">
    <label class="mt-field">
      Tonic
      <select id="mt-mode-tonic-select" class="mt-select"></select>
    </label>
    <label class="mt-field">
      Mode
      <select id="mt-mode-select" class="mt-select">
        <option value="ionian">Ionian</option>
        <option value="dorian">Dorian</option>
        <option value="phrygian">Phrygian</option>
        <option value="lydian">Lydian</option>
        <option value="mixolydian">Mixolydian</option>
        <option value="aeolian">Aeolian</option>
        <option value="locrian">Locrian</option>
      </select>
    </label>
  </div>
  <div class="mt-scale-row" id="mt-mode-row"></div>
  <div class="mt-status" id="mt-mode-description"></div>
  <button class="mt-btn" id="mt-mode-play">▶ Play Mode</button>
</div>

---

## When Are Modes Used?

Modes appear in many styles of music, including medieval and Renaissance music, jazz improvisation, folk music, rock music, film and video game soundtracks, and progressive music. Rather than changing keys frequently, modal music often emphasizes the unique character of a single mode.

---

## Practice Examples

### Example 1
Construct the E Natural Minor scale.
**Answer:** E F♯ G A B C D E

### Example 2
What is the relative minor of G Major?
**Answer:** E Minor

### Example 3
What note changes when converting A Natural Minor to A Harmonic Minor?
**Answer:** The seventh degree changes from G to G♯.

### Example 4
Which mode is identical to the major scale?
**Answer:** Ionian

### Example 5
Which mode is equivalent to the natural minor scale?
**Answer:** Aeolian

---

## Key Takeaways

- The natural minor scale follows the pattern: Whole, Half, Whole, Whole, Half, Whole, Whole.
- Every major key has a relative minor that shares its key signature.
- Parallel major and minor keys share the same tonic but have different key signatures.
- The harmonic minor scale raises the seventh degree.
- The melodic minor scale raises the sixth and seventh degrees when ascending.
- Modes are alternative scale patterns derived from the major scale.
- The seven traditional modes each have their own musical character and applications.

---

## Summary

Minor scales expand the tonal possibilities of music by introducing moods and harmonic relationships that differ from those of the major scale. In this chapter, you learned how natural, harmonic, and melodic minor scales are constructed, how relative and parallel keys are related, and how musical modes provide additional tonal colors. Together, these scales and modes greatly increase the expressive palette available to composers and performers.

In the next chapter, you will learn how **chords** are built from scales and intervals, forming the harmonic foundation of most Western music.

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

  function renderChips(container, midis, names, changedFlags) {
    container.innerHTML = "";
    names.forEach(function (name, i) {
      var chip = document.createElement("div");
      chip.className = "mt-scale-chip";
      if (changedFlags && changedFlags[i]) chip.classList.add("mt-scale-chip-changed");
      chip.id = container.id + "-chip-" + i;
      chip.textContent = name;
      container.appendChild(chip);
    });
  }

  function highlightSequence(containerId, count, ascending) {
    var order = [];
    for (var i = 0; i < count; i++) order.push(i);
    if (!ascending) order.reverse();
    order.forEach(function (idx, seq) {
      setTimeout(function () {
        document.querySelectorAll("#" + containerId + " .mt-scale-chip").forEach(function (c) {
          c.classList.remove("mt-scale-chip-active");
        });
        var chip = document.getElementById(containerId + "-chip-" + idx);
        if (chip) chip.classList.add("mt-scale-chip-active");
      }, seq * 350);
    });
    setTimeout(function () {
      document.querySelectorAll("#" + containerId + " .mt-scale-chip").forEach(function (c) {
        c.classList.remove("mt-scale-chip-active");
      });
    }, order.length * 350);
  }

  // ---------- Minor Scale Comparator ----------
  var minorWidget = document.getElementById("mt-minor-widget");
  if (minorWidget) {
    var tonicSelect = document.getElementById("mt-minor-tonic-select");
    var formSelect = document.getElementById("mt-minor-form-select");
    var minorRow = document.getElementById("mt-minor-row");
    var minorStatus = document.getElementById("mt-minor-status");

    NOTE_NAMES.forEach(function (name, i) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.textContent = name;
      tonicSelect.appendChild(opt);
    });
    tonicSelect.value = 9; // A

    var NATURAL = [0, 2, 3, 5, 7, 8, 10, 12];
    var HARMONIC = [0, 2, 3, 5, 7, 8, 11, 12];
    var MELODIC_ASC = [0, 2, 3, 5, 7, 9, 11, 12];

    function formOffsets(form) {
      if (form === "harmonic") return HARMONIC;
      if (form === "melodic") return MELODIC_ASC;
      return NATURAL;
    }

    function currentMinorData() {
      var rootOffset = parseInt(tonicSelect.value, 10);
      var form = formSelect.value;
      var offsets = formOffsets(form);
      var rootMidi = 60 + rootOffset;
      var midis = offsets.map(function (o) { return rootMidi + o; });
      var names = midis.map(function (m) { return NOTE_NAMES[((m % 12) + 12) % 12]; });
      var changed = offsets.map(function (o, i) { return o !== NATURAL[i]; });
      return { midis: midis, names: names, changed: changed, form: form };
    }

    function renderMinor() {
      var data = currentMinorData();
      renderChips(minorRow, data.midis, data.names, data.changed);
      var label = data.form === "harmonic" ? "Harmonic Minor" : (data.form === "melodic" ? "Melodic Minor (Ascending)" : "Natural Minor");
      minorStatus.textContent = NOTE_NAMES[tonicSelect.value] + " " + label + ".";
    }

    tonicSelect.addEventListener("change", renderMinor);
    formSelect.addEventListener("change", renderMinor);

    document.getElementById("mt-minor-play-up").addEventListener("click", function () {
      var data = currentMinorData();
      data.midis.forEach(function (midi, i) { playTone(midiToFreq(midi), i * 0.35, 0.32); });
      highlightSequence("mt-minor-row", data.midis.length, true);
    });
    document.getElementById("mt-minor-play-down").addEventListener("click", function () {
      // Melodic minor conventionally descends as natural minor; natural/harmonic just reverse.
      var rootOffset = parseInt(tonicSelect.value, 10);
      var form = formSelect.value;
      var offsets = form === "melodic" ? NATURAL : formOffsets(form);
      var rootMidi = 60 + rootOffset;
      var midis = offsets.map(function (o) { return rootMidi + o; }).reverse();
      midis.forEach(function (midi, i) { playTone(midiToFreq(midi), i * 0.35, 0.32); });
      if (form === "melodic") {
        minorStatus.textContent = NOTE_NAMES[tonicSelect.value] + " Melodic Minor (Descending \u2014 same as Natural Minor).";
      }
      highlightSequence("mt-minor-row", midis.length, false);
    });

    renderMinor();
  }

  // ---------- Mode Explorer ----------
  var modeWidget = document.getElementById("mt-mode-widget");
  if (modeWidget) {
    var modeTonicSelect = document.getElementById("mt-mode-tonic-select");
    var modeSelect = document.getElementById("mt-mode-select");
    var modeRow = document.getElementById("mt-mode-row");
    var modeDescription = document.getElementById("mt-mode-description");

    NOTE_NAMES.forEach(function (name, i) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.textContent = name;
      modeTonicSelect.appendChild(opt);
    });
    modeTonicSelect.value = 0; // C

    var MODES = {
      ionian:     { offsets: [0, 2, 4, 5, 7, 9, 11, 12], desc: "Bright and stable \u2014 identical to the major scale." },
      dorian:     { offsets: [0, 2, 3, 5, 7, 9, 10, 12], desc: "Minor with a raised 6th \u2014 common in jazz, blues, and folk." },
      phrygian:   { offsets: [0, 1, 3, 5, 7, 8, 10, 12], desc: "Minor with a lowered 2nd \u2014 dark, Spanish/Middle-Eastern flavor." },
      lydian:     { offsets: [0, 2, 4, 6, 7, 9, 11, 12], desc: "Major with a raised 4th \u2014 dreamlike, common in film music." },
      mixolydian: { offsets: [0, 2, 4, 5, 7, 9, 10, 12], desc: "Major with a lowered 7th \u2014 bluesy, rock/folk/country." },
      aeolian:    { offsets: [0, 2, 3, 5, 7, 8, 10, 12], desc: "Equivalent to the natural minor scale \u2014 melancholic." },
      locrian:    { offsets: [0, 1, 3, 5, 6, 8, 10, 12], desc: "Minor with a lowered 2nd and 5th \u2014 unstable, rarely a home key." }
    };

    function renderMode() {
      var rootOffset = parseInt(modeTonicSelect.value, 10);
      var mode = MODES[modeSelect.value];
      var rootMidi = 60 + rootOffset;
      var midis = mode.offsets.map(function (o) { return rootMidi + o; });
      var names = midis.map(function (m) { return NOTE_NAMES[((m % 12) + 12) % 12]; });
      renderChips(modeRow, midis, names, null);
      var modeLabel = modeSelect.options[modeSelect.selectedIndex].textContent;
      modeDescription.textContent = NOTE_NAMES[rootOffset] + " " + modeLabel + " \u2014 " + mode.desc;
    }

    modeTonicSelect.addEventListener("change", renderMode);
    modeSelect.addEventListener("change", renderMode);

    document.getElementById("mt-mode-play").addEventListener("click", function () {
      var rootOffset = parseInt(modeTonicSelect.value, 10);
      var mode = MODES[modeSelect.value];
      var rootMidi = 60 + rootOffset;
      var midis = mode.offsets.map(function (o) { return rootMidi + o; });
      midis.forEach(function (midi, i) { playTone(midiToFreq(midi), i * 0.35, 0.32); });
      highlightSequence("mt-mode-row", midis.length, true);
    });

    renderMode();
  }
})();
</script>
