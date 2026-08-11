# Chapter 8 — Seventh and Extended Chords

## Learning Objectives

By the end of this chapter, you should be able to:

- Explain what seventh chords are.
- Construct the most common seventh chords.
- Understand dominant harmony.
- Recognize extended chords.
- Read common seventh and extended chord symbols.
- Understand when these chords are commonly used.

> 🎧 This chapter is interactive — build any seventh or extended chord below, then explore how a whole major key naturally produces its own family of seventh chords.

---

## Introduction

In the previous chapter, you learned that most chords are built as **triads**, consisting of a root, third, and fifth.

Music often becomes richer by adding another note — a **seventh** above the root. This creates a **seventh chord**, one of the most frequently used chord types in Western music.

Additional notes beyond the seventh create **extended chords**, which are especially common in jazz, blues, soul, R&B, and modern pop music.

---

## Building Seventh Chords

A seventh chord is created by adding another third above the fifth of a triad. Starting with the C Major triad **C E G**, add another third: **C E G B**. The added note (B) is the **seventh** above C.

The chord now contains four notes: Root, Third, Fifth, and Seventh.

---

## Types of Seventh Chords

Several types of seventh chords are commonly used. The chord quality depends on both the triad and the type of seventh that is added.

---

## Major Seventh Chord

A **Major Seventh (Maj7)** chord consists of Root + Major 3rd + Perfect 5th + Major 7th.

```
C  E  G  B          Symbol: Cmaj7
```

Major seventh chords have a smooth, warm, and sophisticated sound. They are frequently heard in jazz, ballads, film music, and contemporary pop.

---

## Dominant Seventh Chord

The **Dominant Seventh (7)** chord is one of the most important chords in tonal harmony.

```
Root + Major 3rd + Perfect 5th + Minor 7th
G  B  D  F          Symbol: G7
```

Unlike the major seventh chord, the dominant seventh naturally creates tension that strongly resolves to the tonic — for example, **G7 → C**. This progression is one of the most common in Western music.

---

## Minor Seventh Chord

A **Minor Seventh (m7)** chord consists of Root + Minor 3rd + Perfect 5th + Minor 7th.

```
A  C  E  G          Symbol: Am7
```

Minor seventh chords produce a mellow, relaxed sound and are common in jazz, blues, and pop.

---

## Half-Diminished Seventh Chord

A **Half-Diminished Seventh** chord consists of Root + Minor 3rd + Diminished 5th + Minor 7th.

```
B  D  F  A          Symbol: Bm7♭5  (or Bø7)
```

This chord frequently appears as the seventh chord built on the seventh degree of a major scale.

---

## Fully Diminished Seventh Chord

A **Fully Diminished Seventh** chord consists of Root + Minor 3rd + Diminished 5th + Diminished 7th.

```
B  D  F  A♭         Symbol: Bdim7  (or B°7)
```

Fully diminished chords create a strong sense of tension and are often used to connect one chord to another.

---

## Comparing Seventh Chords

| Chord Type | Formula |
|------------|---------|
| Major Seventh | Root – Major 3rd – Perfect 5th – Major 7th |
| Dominant Seventh | Root – Major 3rd – Perfect 5th – Minor 7th |
| Minor Seventh | Root – Minor 3rd – Perfect 5th – Minor 7th |
| Half-Diminished Seventh | Root – Minor 3rd – Diminished 5th – Minor 7th |
| Fully Diminished Seventh | Root – Minor 3rd – Diminished 5th – Diminished 7th |

### 🎚️ Try it — Seventh & Extended Chord Builder

Build any seventh or extended chord from any root, and optionally set a slash-chord bass note to hear how the sound changes when a different note sits on the bottom.

<div class="mt-widget" id="mt-seventh-widget">
  <div class="mt-widget-label">🎚️ Seventh &amp; Extended Chord Builder</div>
  <div class="mt-interval-controls">
    <label class="mt-field">
      Root
      <select id="mt-seventh-root-select" class="mt-select"></select>
    </label>
    <label class="mt-field">
      Chord Type
      <select id="mt-seventh-type-select" class="mt-select">
        <option value="maj7" selected>Major 7th (maj7)</option>
        <option value="dom7">Dominant 7th (7)</option>
        <option value="m7">Minor 7th (m7)</option>
        <option value="m7b5">Half-Diminished 7th (m7♭5)</option>
        <option value="dim7">Fully Diminished 7th (dim7)</option>
        <option value="add9">Added 9th (add9)</option>
        <option value="nine">9th Chord (9)</option>
        <option value="eleven">11th Chord (11)</option>
        <option value="thirteen">13th Chord (13)</option>
      </select>
    </label>
    <label class="mt-field">
      Slash Bass
      <select id="mt-seventh-slash-select" class="mt-select"></select>
    </label>
  </div>
  <div class="mt-scale-row" id="mt-seventh-row"></div>
  <div class="mt-status" id="mt-seventh-status"></div>
  <button class="mt-btn" id="mt-seventh-play-together">▶ Play Together</button>
  <button class="mt-btn" id="mt-seventh-play-arpeggio">▶ Play Arpeggiated</button>
</div>

---

## Diatonic Seventh Chords in a Major Key

Each degree of a major scale naturally produces a seventh chord. Using the C Major scale (C D E F G A B), the resulting seventh chords are:

| Scale Degree | Chord |
|--------------|-------|
| I | Cmaj7 |
| ii | Dm7 |
| iii | Em7 |
| IV | Fmaj7 |
| V | G7 |
| vi | Am7 |
| vii° | Bm7♭5 |

Notice that the dominant seventh naturally appears on the fifth degree of the major scale.

---

## Why Is the Dominant Seventh So Important?

The dominant seventh contains notes that naturally lead toward the tonic. For example, **G B D F** resolves naturally to **C E G**. The interval between **B** and **F** (a tritone) creates tension that seeks resolution.

Because of this, the progression **V7 → I** is one of the strongest and most recognizable movements in tonal music.

### 🎧 Try it — Diatonic Seventh Chords Explorer

Click through all seven diatonic seventh chords in any key, or press "Play V7 → I" to hear that tritone resolution directly.

<div class="mt-widget" id="mt-seventh-diatonic-widget">
  <div class="mt-widget-label">🎧 Diatonic Seventh Chords Explorer</div>
  <label class="mt-field">
    Key
    <select id="mt-seventh-diatonic-key-select" class="mt-select"></select>
  </label>
  <div class="mt-chord-row" id="mt-seventh-diatonic-row"></div>
  <div class="mt-status" id="mt-seventh-diatonic-status">Click any chord above.</div>
  <button class="mt-btn" id="mt-seventh-diatonic-resolution">▶ Play V7 → I Resolution</button>
</div>

---

## Extended Chords

Instead of stopping at the seventh, additional thirds can be stacked to create **extended chords**: the **9th**, **11th**, and **13th**. Although the numbers are larger than seven, they correspond to notes already found within the scale, one octave higher.

---

## Ninth Chords

A **ninth chord** adds the ninth degree above the root.

```
C  E  G  B♭  D       Symbol: C9
```

Ninth chords sound fuller than ordinary seventh chords and are widely used in jazz, blues, gospel, and soul music.

---

## Eleventh Chords

An **eleventh chord** adds the eleventh above the root.

```
C  E  G  B♭  D  F    Symbol: C11
```

Because the eleventh may clash with the third, musicians often omit certain notes depending on the musical context.

---

## Thirteenth Chords

A **thirteenth chord** adds the thirteenth above the root.

```
C  E  G  B♭  D  F  A  Symbol: C13
```

In practice, performers usually omit some notes so that the chord remains playable.

---

## Added-Note Chords

Not every chord with an extra note is an extended chord. An **added-note chord** includes an additional note without adding a seventh.

```
C  E  G  D           Symbol: Cadd9
```

Unlike a C9 chord, a Cadd9 chord does **not** include the minor seventh (B♭). Added-note chords are common in pop, folk, and contemporary worship music.

---

## Slash Chords

A **slash chord** indicates a specific bass note. For example, **C/E** means play a C Major chord with E as the lowest note. Slash chords are commonly used to create smoother bass lines and chord transitions. Try setting the Slash Bass field in the widget above to hear this directly.

---

## Common Chord Symbols

| Symbol | Meaning |
|--------|---------|
| Cmaj7 | Major Seventh |
| C7 | Dominant Seventh |
| Cm7 | Minor Seventh |
| Cm7♭5 | Half-Diminished Seventh |
| Cdim7 | Fully Diminished Seventh |
| C9 | Ninth Chord |
| C11 | Eleventh Chord |
| C13 | Thirteenth Chord |
| Cadd9 | Added Ninth |
| C/E | Slash Chord |

---

## Practice Examples

### Example 1
Construct a C Major Seventh chord.
**Answer:** C E G B

### Example 2
Construct a G Dominant Seventh chord.
**Answer:** G B D F

### Example 3
Construct an A Minor Seventh chord.
**Answer:** A C E G

### Example 4
What is the seventh chord built on the fifth degree of the C Major scale?
**Answer:** G7

### Example 5
What is the difference between C9 and Cadd9?
**Answer:** C9 includes a dominant seventh (B♭) and a ninth (D). Cadd9 includes the ninth (D) but does not include the seventh.

---

## Key Takeaways

- Seventh chords are formed by adding another third above a triad.
- The five most common seventh chords are major seventh, dominant seventh, minor seventh, half-diminished seventh, and fully diminished seventh.
- The dominant seventh chord plays a central role in tonal harmony.
- Extended chords continue stacking thirds beyond the seventh.
- Ninth, eleventh, and thirteenth chords add richness and color to harmony.
- Added-note chords are different from extended chords because they do not require a seventh.
- Slash chords specify the bass note while preserving the chord quality.

---

## Summary

Seventh chords expand the harmonic possibilities of basic triads by adding another layer of tension and color. In this chapter, you learned how the five common seventh chords are constructed, why the dominant seventh is so important in tonal harmony, and how extended chords such as ninth, eleventh, and thirteenth chords create richer harmonic textures. You also explored added-note and slash chords, both of which are widely used in modern music.

In the next chapter, you will learn how chords work together to create **harmony and chord progressions**, the foundation of most songs and instrumental music.

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

  function bassNoteBelow(pitchClass, ceilingMidi) {
    for (var m = ceilingMidi - 1; m > ceilingMidi - 13; m--) {
      if (((m % 12) + 12) % 12 === pitchClass) return m;
    }
    return ceilingMidi - 12;
  }

  // ---------- Seventh & Extended Chord Builder ----------
  var seventhWidget = document.getElementById("mt-seventh-widget");
  if (seventhWidget) {
    var rootSelect = document.getElementById("mt-seventh-root-select");
    var typeSelect = document.getElementById("mt-seventh-type-select");
    var slashSelect = document.getElementById("mt-seventh-slash-select");
    var seventhRow = document.getElementById("mt-seventh-row");
    var seventhStatus = document.getElementById("mt-seventh-status");

    NOTE_NAMES.forEach(function (name, i) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.textContent = name;
      rootSelect.appendChild(opt);
    });

    var noneOpt = document.createElement("option");
    noneOpt.value = "";
    noneOpt.textContent = "None (root position)";
    slashSelect.appendChild(noneOpt);
    NOTE_NAMES.forEach(function (name, i) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.textContent = "/" + name;
      slashSelect.appendChild(opt);
    });

    var CHORD_FORMULAS = {
      maj7:    [0, 4, 7, 11],
      dom7:    [0, 4, 7, 10],
      m7:      [0, 3, 7, 10],
      m7b5:    [0, 3, 6, 10],
      dim7:    [0, 3, 6, 9],
      add9:    [0, 4, 7, 14],
      nine:    [0, 4, 7, 10, 14],
      eleven:  [0, 4, 7, 10, 14, 17],
      thirteen:[0, 4, 7, 10, 14, 17, 21]
    };
    var CHORD_LABELS = {
      maj7: "maj7", dom7: "7", m7: "m7", m7b5: "m7\u266d5", dim7: "dim7",
      add9: "add9", nine: "9", eleven: "11", thirteen: "13"
    };

    function currentChord() {
      var rootOffset = parseInt(rootSelect.value, 10);
      var type = typeSelect.value;
      var rootMidi = 60 + rootOffset;
      var midis = CHORD_FORMULAS[type].map(function (o) { return rootMidi + o; });
      var slashVal = slashSelect.value;
      var bassMidi = null;
      if (slashVal !== "") {
        var lowest = Math.min.apply(null, midis);
        bassMidi = bassNoteBelow(parseInt(slashVal, 10), lowest);
      }
      return { midis: midis, type: type, rootOffset: rootOffset, bassMidi: bassMidi };
    }

    function renderSeventh() {
      var data = currentChord();
      seventhRow.innerHTML = "";
      var allMidis = data.bassMidi !== null ? [data.bassMidi].concat(data.midis) : data.midis;
      var lowest = Math.min.apply(null, allMidis);
      allMidis.forEach(function (midi) {
        var chip = document.createElement("div");
        chip.className = "mt-scale-chip";
        if (midi === lowest) chip.classList.add("mt-scale-chip-bass");
        chip.textContent = noteName(midi);
        seventhRow.appendChild(chip);
      });
      var symbol = noteName(60 + data.rootOffset) + CHORD_LABELS[data.type];
      if (data.bassMidi !== null) symbol += "/" + noteName(data.bassMidi);
      seventhStatus.textContent = symbol + ".";
    }

    rootSelect.addEventListener("change", renderSeventh);
    typeSelect.addEventListener("change", renderSeventh);
    slashSelect.addEventListener("change", renderSeventh);

    document.getElementById("mt-seventh-play-together").addEventListener("click", function () {
      var data = currentChord();
      var allMidis = data.bassMidi !== null ? [data.bassMidi].concat(data.midis) : data.midis;
      allMidis.forEach(function (midi) { playTone(midiToFreq(midi), 0, 1.1); });
    });
    document.getElementById("mt-seventh-play-arpeggio").addEventListener("click", function () {
      var data = currentChord();
      var allMidis = data.bassMidi !== null ? [data.bassMidi].concat(data.midis) : data.midis;
      allMidis.forEach(function (midi, i) { playTone(midiToFreq(midi), i * 0.28, 0.38); });
    });

    renderSeventh();
  }

  // ---------- Diatonic Seventh Chords Explorer ----------
  var diatonicWidget = document.getElementById("mt-seventh-diatonic-widget");
  if (diatonicWidget) {
    var keySelect = document.getElementById("mt-seventh-diatonic-key-select");
    var chordRow = document.getElementById("mt-seventh-diatonic-row");
    var diatonicStatus = document.getElementById("mt-seventh-diatonic-status");

    NOTE_NAMES.forEach(function (name, i) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.textContent = name + " Major";
      keySelect.appendChild(opt);
    });

    var MAJOR_SCALE_OFFSETS = [0, 2, 4, 5, 7, 9, 11];
    var ROMAN = ["I", "ii", "iii", "IV", "V", "vi", "vii\u00b0"];
    var SEVENTH_SUFFIX = ["maj7", "m7", "m7", "maj7", "7", "m7", "m7\u266d5"];

    function scaleMidisFor(rootOffset) {
      var rootMidi = 60 + rootOffset;
      return MAJOR_SCALE_OFFSETS.map(function (o) { return rootMidi + o; });
    }
    function seventhForDegree(scaleMidis, i) {
      var idxs = [i, (i + 2) % 7, (i + 4) % 7, (i + 6) % 7];
      var octs = [0, Math.floor((i + 2) / 7), Math.floor((i + 4) / 7), Math.floor((i + 6) / 7)];
      return idxs.map(function (idx, k) { return scaleMidis[idx] + 12 * octs[k]; });
    }

    function renderDiatonic() {
      var rootOffset = parseInt(keySelect.value, 10);
      var scaleMidis = scaleMidisFor(rootOffset);
      chordRow.innerHTML = "";
      for (var i = 0; i < 7; i++) {
        var chord = seventhForDegree(scaleMidis, i);
        var symbol = noteName(scaleMidis[i]) + SEVENTH_SUFFIX[i];
        var btn = document.createElement("button");
        btn.className = "mt-btn";
        btn.textContent = ROMAN[i] + ": " + symbol;
        (function (chordNotes, label) {
          btn.addEventListener("click", function () {
            chordNotes.forEach(function (midi) { playTone(midiToFreq(midi), 0, 0.9); });
            diatonicStatus.textContent = "Playing " + label + ".";
          });
        })(chord, ROMAN[i] + " (" + symbol + ")");
        chordRow.appendChild(btn);
      }
    }

    keySelect.addEventListener("change", renderDiatonic);

    document.getElementById("mt-seventh-diatonic-resolution").addEventListener("click", function () {
      var rootOffset = parseInt(keySelect.value, 10);
      var scaleMidis = scaleMidisFor(rootOffset);
      var v7 = seventhForDegree(scaleMidis, 4);
      var iChord = [scaleMidis[0], scaleMidis[2], scaleMidis[4]];
      v7.forEach(function (midi) { playTone(midiToFreq(midi), 0, 0.85); });
      iChord.forEach(function (midi) { playTone(midiToFreq(midi), 1.0, 1.0); });
      diatonicStatus.textContent = "Playing V7 \u2192 I in " + noteName(60 + rootOffset) + " Major.";
    });

    renderDiatonic();
  }
})();
</script>
