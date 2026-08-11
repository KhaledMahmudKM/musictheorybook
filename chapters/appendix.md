# Appendix — Music Theory Reference Guide

> 🎧 This appendix includes two quick-lookup players — pick anything from the interval or chord tables and hear it instantly instead of just reading the formula.

## A. Note Names (Scientific Pitch Notation)

Standard note naming in Western music:

```
C  C♯/D♭  D  D♯/E♭  E  F  F♯/G♭  G  G♯/A♭  A  A♯/B♭  B
```

Notes repeat in higher or lower octaves:

```
C1, C2, C3, C4 (middle C), C5, C6, C7
```

---

## B. Intervals (Quick Reference)

Intervals describe the distance between two notes.

| Interval | Semitones | Example (C root) |
|----------|----------|------------------|
| Minor 2nd | 1 | C → C♯ |
| Major 2nd | 2 | C → D |
| Minor 3rd | 3 | C → E♭ |
| Major 3rd | 4 | C → E |
| Perfect 4th | 5 | C → F |
| Tritone | 6 | C → F♯ |
| Perfect 5th | 7 | C → G |
| Minor 6th | 8 | C → A♭ |
| Major 6th | 9 | C → A |
| Minor 7th | 10 | C → B♭ |
| Major 7th | 11 | C → B |
| Octave | 12 | C → C |

### 🎚️ Interval Reference Player

<div class="mt-widget" id="mt-appx-interval-widget">
  <div class="mt-widget-label">🎚️ Interval Reference Player</div>
  <div class="mt-interval-controls">
    <label class="mt-field">
      Root
      <select id="mt-appx-interval-root" class="mt-select"></select>
    </label>
    <label class="mt-field">
      Interval
      <select id="mt-appx-interval-select" class="mt-select"></select>
    </label>
  </div>
  <div class="mt-status" id="mt-appx-interval-status"></div>
  <button class="mt-btn" id="mt-appx-interval-sequential">▶ Play One at a Time</button>
  <button class="mt-btn" id="mt-appx-interval-together">▶ Play Together</button>
</div>

---

## C. Major Scale Formula

```
W – W – H – W – W – W – H
```

Example (C Major): **C D E F G A B C**. (Build any major scale by ear in Chapter 5.)

---

## D. Natural Minor Scale Formula

```
W – H – W – W – H – W – W
```

Example (A Minor): **A B C D E F G A**. (Compare all three minor forms in Chapter 6.)

---

## E. Harmonic Minor Scale Formula

```
W – H – W – W – H – W+H – H
```

Example: **A B C D E F G♯ A**

---

## F. Chord Quality Quick Guide

### Triads

| Type | Formula |
|------|--------|
| Major | 1 – 3 – 5 |
| Minor | 1 – ♭3 – 5 |
| Diminished | 1 – ♭3 – ♭5 |
| Augmented | 1 – 3 – ♯5 |

### Seventh Chords

| Type | Formula |
|------|--------|
| Major 7 | 1 – 3 – 5 – 7 |
| Dominant 7 | 1 – 3 – 5 – ♭7 |
| Minor 7 | 1 – ♭3 – 5 – ♭7 |
| Half-diminished 7 | 1 – ♭3 – ♭5 – ♭7 |
| Diminished 7 | 1 – ♭3 – ♭5 – ♭♭7 |

### 🎚️ Chord Symbol Reference Player

<div class="mt-widget" id="mt-appx-chord-widget">
  <div class="mt-widget-label">🎚️ Chord Symbol Reference Player</div>
  <div class="mt-interval-controls">
    <label class="mt-field">
      Root
      <select id="mt-appx-chord-root" class="mt-select"></select>
    </label>
    <label class="mt-field">
      Chord Type
      <select id="mt-appx-chord-type" class="mt-select"></select>
    </label>
  </div>
  <div class="mt-scale-row" id="mt-appx-chord-row"></div>
  <div class="mt-status" id="mt-appx-chord-status"></div>
  <button class="mt-btn" id="mt-appx-chord-play">▶ Play Chord</button>
</div>

(For inversions, slash bass notes, and 9th/11th/13th chords, see the builders in Chapters 7 and 8.)

---

## G. Scale Degree Names

| Degree | Name |
|--------|------|
| 1 | Tonic |
| 2 | Supertonic |
| 3 | Mediant |
| 4 | Subdominant |
| 5 | Dominant |
| 6 | Submediant |
| 7 | Leading Tone |

---

## H. Modes (Quick Reference)

Built from C major:

| Mode | Starting Note | Character |
|------|--------------|-----------|
| Ionian | C | Major |
| Dorian | D | Minor (bright) |
| Phrygian | E | Dark |
| Lydian | F | Bright, dreamy |
| Mixolydian | G | Bluesy major |
| Aeolian | A | Natural minor |
| Locrian | B | Unstable |

(Explore any mode from any tonic in the Mode Explorer in Chapter 6.)

---

## I. Common Chord Progressions

**Pop Progressions**
```
I – V – vi – IV
vi – IV – I – V
I – IV – V
```

**Jazz Progressions**
```
ii – V – I
I – vi – ii – V
```

**Blues (12-bar)**
```
I – I – I – I
IV – IV – I – I
V – IV – I – I
```

(Play any of these back in any key with the Chord Progression Player in Chapter 9.)

---

## J. Cadences

| Type | Pattern | Feeling |
|------|--------|---------|
| Authentic | V → I | Strong resolution |
| Plagal | IV → I | Soft resolution |
| Half | ends on V | Unfinished |
| Deceptive | V → vi | Surprise |

(Compare all four side by side with the Cadence Comparator in Chapter 9.)

---

## K. Key Relationships

**Closely Related Keys (to C Major)**
- G Major (dominant)
- F Major (subdominant)
- A Minor (relative minor)

---

## L. Circle of Fifths (Text Version)

Clockwise (adds one sharp each step):

```
C → G → D → A → E → B → F♯ → C♯
```

Counterclockwise (adds one flat each step):

```
C → F → B♭ → E♭ → A♭ → D♭ → G♭ → C♭
```

(Click through the full interactive Circle of Fifths in Chapter 5.)

---

## M. Roman Numeral System

| Symbol | Meaning |
|--------|--------|
| I | Major tonic |
| i | Minor tonic |
| V | Dominant |
| v | Minor dominant |
| vii° | Diminished leading tone chord |

**Rules:** Uppercase = major chord. Lowercase = minor chord. ° = diminished chord.

---

## N. Common Chord Symbols

| Symbol | Meaning |
|--------|--------|
| C | C major |
| Cm | C minor |
| C7 | Dominant seventh |
| Cmaj7 | Major seventh |
| Cm7 | Minor seventh |
| Cdim | Diminished |
| Caug | Augmented |
| Csus2 / Csus4 | Suspended chords |
| C5 | Power chord |
| Cadd9 | Added ninth |
| C/E | Slash chord |

---

## O. Basic Analysis Checklist

When analyzing a song:

1. Identify key
2. Find tonic chord
3. List chord progression
4. Assign Roman numerals
5. Look for cadences
6. Identify form (AABA, verse–chorus, etc.)
7. Check for modulation or borrowed chords

---

## P. Basic Composition Checklist

When writing music:

1. Choose a key
2. Pick a chord progression
3. Build melody using chord tones
4. Add passing tones for movement
5. Use repetition + variation
6. Define a form (verse, chorus, etc.)

---

## Q. Glossary (Quick Definitions)

- **Harmony**: Chords and their progression
- **Melody**: Sequence of single notes
- **Rhythm**: Timing of notes
- **Tonic**: Home note/chord
- **Modulation**: Key change
- **Cadence**: Musical ending
- **Interval**: Distance between notes
- **Triad**: Three-note chord
- **Scale**: Ordered set of notes

---

## Final Note

This appendix is meant as a quick-reference companion to the main chapters. Music theory becomes most powerful when these concepts are combined in real musical analysis, listening, and composition.

Return to earlier chapters whenever needed — music theory is best learned cyclically, not linearly.

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

  // ---------- Interval Reference Player ----------
  var intervalWidget = document.getElementById("mt-appx-interval-widget");
  if (intervalWidget) {
    var rootSelect = document.getElementById("mt-appx-interval-root");
    var intervalSelect = document.getElementById("mt-appx-interval-select");
    var status = document.getElementById("mt-appx-interval-status");

    NOTE_NAMES.forEach(function (name, i) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.textContent = name;
      rootSelect.appendChild(opt);
    });

    var INTERVALS = [
      { semi: 0, name: "Unison" },
      { semi: 1, name: "Minor 2nd" },
      { semi: 2, name: "Major 2nd" },
      { semi: 3, name: "Minor 3rd" },
      { semi: 4, name: "Major 3rd" },
      { semi: 5, name: "Perfect 4th" },
      { semi: 6, name: "Tritone" },
      { semi: 7, name: "Perfect 5th" },
      { semi: 8, name: "Minor 6th" },
      { semi: 9, name: "Major 6th" },
      { semi: 10, name: "Minor 7th" },
      { semi: 11, name: "Major 7th" },
      { semi: 12, name: "Octave" }
    ];
    INTERVALS.forEach(function (iv, i) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.textContent = iv.name + " (" + iv.semi + " semitones)";
      intervalSelect.appendChild(opt);
    });
    intervalSelect.value = 4;

    function currentInterval() {
      var rootOffset = parseInt(rootSelect.value, 10);
      var iv = INTERVALS[parseInt(intervalSelect.value, 10)];
      var rootMidi = 60 + rootOffset;
      var targetMidi = rootMidi + iv.semi;
      return { rootMidi: rootMidi, targetMidi: targetMidi, ivName: iv.name };
    }
    function describe() {
      var d = currentInterval();
      status.textContent = noteName(d.rootMidi) + " \u2192 " + noteName(d.targetMidi) + "  =  " + d.ivName + ".";
    }
    rootSelect.addEventListener("change", describe);
    intervalSelect.addEventListener("change", describe);
    describe();

    document.getElementById("mt-appx-interval-sequential").addEventListener("click", function () {
      var d = currentInterval();
      playTone(midiToFreq(d.rootMidi), 0, 0.55);
      playTone(midiToFreq(d.targetMidi), 0.6, 0.55);
    });
    document.getElementById("mt-appx-interval-together").addEventListener("click", function () {
      var d = currentInterval();
      playTone(midiToFreq(d.rootMidi), 0, 0.9);
      playTone(midiToFreq(d.targetMidi), 0, 0.9);
    });
  }

  // ---------- Chord Symbol Reference Player ----------
  var chordWidget = document.getElementById("mt-appx-chord-widget");
  if (chordWidget) {
    var chordRootSelect = document.getElementById("mt-appx-chord-root");
    var chordTypeSelect = document.getElementById("mt-appx-chord-type");
    var chordRow = document.getElementById("mt-appx-chord-row");
    var chordStatus = document.getElementById("mt-appx-chord-status");

    NOTE_NAMES.forEach(function (name, i) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.textContent = name;
      chordRootSelect.appendChild(opt);
    });

    var CHORD_TYPES = [
      { key: "major", label: "Major", suffix: "", offsets: [0, 4, 7] },
      { key: "minor", label: "Minor", suffix: "m", offsets: [0, 3, 7] },
      { key: "dim", label: "Diminished", suffix: "dim", offsets: [0, 3, 6] },
      { key: "aug", label: "Augmented", suffix: "aug", offsets: [0, 4, 8] },
      { key: "maj7", label: "Major 7th", suffix: "maj7", offsets: [0, 4, 7, 11] },
      { key: "dom7", label: "Dominant 7th", suffix: "7", offsets: [0, 4, 7, 10] },
      { key: "m7", label: "Minor 7th", suffix: "m7", offsets: [0, 3, 7, 10] },
      { key: "m7b5", label: "Half-Diminished 7th", suffix: "m7\u266d5", offsets: [0, 3, 6, 10] },
      { key: "dim7", label: "Diminished 7th", suffix: "dim7", offsets: [0, 3, 6, 9] }
    ];
    CHORD_TYPES.forEach(function (ct, i) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.textContent = ct.label;
      chordTypeSelect.appendChild(opt);
    });

    function currentChord() {
      var rootOffset = parseInt(chordRootSelect.value, 10);
      var ct = CHORD_TYPES[parseInt(chordTypeSelect.value, 10)];
      var rootMidi = 60 + rootOffset;
      var midis = ct.offsets.map(function (o) { return rootMidi + o; });
      return { midis: midis, symbol: noteName(rootMidi) + ct.suffix };
    }

    function renderChord() {
      var d = currentChord();
      chordRow.innerHTML = "";
      d.midis.forEach(function (midi) {
        var chip = document.createElement("div");
        chip.className = "mt-scale-chip";
        chip.textContent = noteName(midi);
        chordRow.appendChild(chip);
      });
      chordStatus.textContent = d.symbol + ".";
    }

    chordRootSelect.addEventListener("change", renderChord);
    chordTypeSelect.addEventListener("change", renderChord);

    document.getElementById("mt-appx-chord-play").addEventListener("click", function () {
      var d = currentChord();
      d.midis.forEach(function (midi) { playTone(midiToFreq(midi), 0, 1.0); });
    });

    renderChord();
  }
})();
</script>
