# Chapter 11 — Keys and Modulation

## Learning Objectives

By the end of this chapter, you should be able to:

- Define what a musical key is.
- Identify the tonic as the tonal center of a piece.
- Understand closely related keys.
- Use the Circle of Fifths to understand key relationships.
- Explain what modulation is.
- Recognize pivot chords.
- Understand borrowed chords (modal mixture basics).

> 🎧 This chapter is interactive — hear a key's closest relatives at a click, and walk through real pivot-chord, borrowed-chord, and secondary-dominant modulations step by step.

---

## Introduction

Music is rarely just a random collection of notes and chords. Most music is organized around a **key**, which acts as a central "home base."

However, many pieces do not stay in one key the entire time. They may shift temporarily or permanently to another key. This process is called **modulation**.

Understanding keys and modulation helps you follow the emotional and structural journey of a piece of music.

---

## What Is a Key?

A **key** is a system of pitches centered around a **tonic note**, which feels like "home." For example, C Major has C as its tonic, while A Minor has A as its tonic.

A key defines which notes are used (scale), which chords are most important, and where musical tension resolves.

---

## Tonic as the Center of Music

The **tonic** is the most stable and important note or chord in a key. In C major, the tonic note is C and the tonic chord is C major (I). Most melodies and harmonies eventually return to the tonic to create a sense of resolution.

```
G → F → D → C
```

Even though the melody moves, it feels "complete" when it lands on C.

---

## Closely Related Keys

Some keys are more closely related than others because they share many of the same notes. Closely related keys are usually the **relative minor/major**, the **dominant key (V)**, and the **subdominant key (IV)**.

| Relationship (from C Major) | Key |
|--------------|-----|
| Relative minor | A minor |
| Dominant | G major |
| Subdominant | F major |

These keys are easy to move between because they share most of their notes.

### 🎧 Try it — Closely Related Keys Explorer

Pick any key and hear its tonic alongside its three closest relatives. Notice how natural each transition sounds compared to jumping to a distant, unrelated key.

<div class="mt-widget" id="mt-related-widget">
  <div class="mt-widget-label">🎧 Closely Related Keys Explorer</div>
  <label class="mt-field">
    Key
    <select id="mt-related-key-select" class="mt-select"></select>
  </label>
  <div class="mt-chord-row">
    <button class="mt-btn" id="mt-related-tonic">▶ Tonic (I)</button>
    <button class="mt-btn" id="mt-related-dominant">▶ Dominant (V)</button>
    <button class="mt-btn" id="mt-related-subdominant">▶ Subdominant (IV)</button>
    <button class="mt-btn" id="mt-related-relative">▶ Relative Minor (vi)</button>
  </div>
  <div class="mt-status" id="mt-related-status">Pick a relationship to hear it.</div>
</div>

---

## The Circle of Fifths (Revisited)

The **Circle of Fifths** shows relationships between keys. Moving clockwise adds sharps and moves to the dominant key:

```
C → G → D → A → E → B → F♯
```

Moving counterclockwise adds flats and moves to the subdominant key:

```
C → F → B♭ → E♭ → A♭ → D♭
```

The Circle of Fifths helps you identify key signatures, understand modulation paths, and predict harmonic movement. (Revisit the clickable Circle of Fifths widget in Chapter 5 if you'd like a refresher.)

---

## What Is Modulation?

**Modulation** is the process of changing from one key to another within a piece of music. For example, a song might start in C major, later move to G major, then return to C major. Modulation creates contrast, emotional development, and structural interest.

---

## Types of Modulation

**1. Direct Modulation** — a sudden, unprepared key change, e.g. C major → E major (abrupt shift). Often used for dramatic effect.

**2. Pivot-Chord Modulation** — a smoother modulation using a **pivot chord** that belongs to both keys.

---

## Pivot Chords

A **pivot chord** is a chord that is shared between two keys. It acts as a bridge during modulation.

From C major to G major:

```
In C major: C  Dm  Em  F  G  Am  Bdim
In G major: G  Am  Bm  C  D  Em  F♯dim
```

Shared chords include C, Am, Em, and G. Example modulation: **C → Am → D → G**. Here, **Am** can function in both keys, helping smooth the transition.

---

## How to Hear Modulation

You can often detect modulation by noticing that a new chord feels like "home," the tonic changes, the leading tone shifts, or the final resolution lands somewhere unexpected.

```
C → F → G → D → A
```

If A begins to feel like home, the music may have modulated to D major or A minor.

---

## Closely Related Modulations

The easiest modulations occur between closely related keys — from C major, that means G major (dominant), F major (subdominant), or A minor (relative minor). These transitions sound natural because they share many common tones.

---

## Borrowed Chords (Modal Mixture)

Sometimes music borrows chords from the **parallel key** (same tonic, different mode). C major borrowing from C minor uses notes like E♭, A♭, and B♭.

```
C major progression: C → F → Fm → C
```

Here, **Fm** is borrowed from C minor. Borrowed chords add color, emotional contrast, and harmonic variety.

---

## Secondary Dominants (Introduction)

A **secondary dominant** is a dominant chord that temporarily tonicizes another chord.

```
D7 → G → C
```

D7 is the dominant of G (V of V) — it temporarily makes G feel like a tonic. This strengthens harmonic direction and makes progressions more dynamic.

### 🎚️ Try it — Modulation & Pivot Chord Player

Walk through each technique above, one chord at a time. The chord doing the special work — the pivot, the borrowed chord, the secondary dominant, or the new tonic — is highlighted so you can hear exactly where it happens.

<div class="mt-widget" id="mt-modulation-widget">
  <div class="mt-widget-label">🎚️ Modulation &amp; Pivot Chord Player</div>
  <div class="mt-interval-controls">
    <label class="mt-field">
      Home Key
      <select id="mt-mod-key-select" class="mt-select"></select>
    </label>
    <label class="mt-field">
      Example
      <select id="mt-mod-example-select" class="mt-select"></select>
    </label>
  </div>
  <div class="mt-scale-row" id="mt-mod-row"></div>
  <div class="mt-status" id="mt-mod-status"></div>
  <button class="mt-btn" id="mt-mod-play">▶ Play Example</button>
</div>

---

## Modulation vs Tonicization

**Tonicization** is a temporary emphasis on another chord — short-lived, and it does not fully change key.

**Modulation** is a full shift to a new tonic — more permanent (within the piece).

---

## Practical Example of Modulation

Start in C major: **C → Am → Dm → G → C**. Now pivot: **C → Am → D → G → C → D → G**. At this point, G feels like the new home key — we have modulated from C major to G major. (This is the "Full Walkthrough" option in the widget above.)

---

## Why Modulation Is Used

Composers use modulation to add emotional development, prevent repetition, create contrast between sections, and build tension and release over time. It's common in classical sonatas, pop song key changes (the final-chorus uplift), jazz improvisation, and film scores.

---

## Practice Examples

### Example 1
What is a musical key?
**Answer:** A system of notes centered around a tonic.

### Example 2
What is modulation?
**Answer:** A change from one key to another within a piece of music.

### Example 3
What is a pivot chord?
**Answer:** A chord shared by two keys that helps transition between them.

### Example 4
Name three closely related keys to C major.
**Answer:** G major, F major, A minor.

### Example 5
What is the difference between modulation and tonicization?
**Answer:** Modulation is a full key change; tonicization is a temporary emphasis on another chord.

---

## Key Takeaways

- A key defines the tonal center of a piece.
- The tonic is the "home" of the key.
- Closely related keys share many notes and are easier to transition between.
- Modulation is a change of key within a piece.
- Pivot chords smooth the transition between keys.
- Borrowed chords come from the parallel key.
- Secondary dominants briefly tonicize other chords.
- Modulation adds variety, contrast, and emotional development.

---

## Summary

Keys provide the structural foundation of tonal music, while modulation allows music to move between different tonal centers. In this chapter, you learned how keys are organized around a tonic, how closely related keys function, and how modulation can occur through direct shifts or smooth transitions using pivot chords. You also explored borrowed chords and secondary dominants, both of which expand harmonic possibilities.

In the next chapter, you will learn about **musical form**, which explains how entire pieces of music are structured over time.

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

  var CHORD_FORMULAS = {
    major: [0, 4, 7],
    minor: [0, 3, 7],
    dom7: [0, 4, 7, 10]
  };
  var CHORD_LABELS = { major: "", minor: "m", dom7: "7" };

  // ---------- Closely Related Keys Explorer ----------
  var relatedWidget = document.getElementById("mt-related-widget");
  if (relatedWidget) {
    var relatedKeySelect = document.getElementById("mt-related-key-select");
    var relatedStatus = document.getElementById("mt-related-status");

    NOTE_NAMES.forEach(function (name, i) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.textContent = name + " Major";
      relatedKeySelect.appendChild(opt);
    });

    function playRelated(semitoneOffset, quality, roleLabel) {
      var rootOffset = parseInt(relatedKeySelect.value, 10);
      var chordRootMidi = 60 + ((rootOffset + semitoneOffset) % 12);
      var midis = CHORD_FORMULAS[quality].map(function (o) { return chordRootMidi + o; });
      midis.forEach(function (midi) { playTone(midiToFreq(midi), 0, 1.0); });
      var symbol = noteName(chordRootMidi) + CHORD_LABELS[quality];
      relatedStatus.textContent = roleLabel + " of " + noteName(60 + rootOffset) + " Major:  " + symbol + ".";
    }

    document.getElementById("mt-related-tonic").addEventListener("click", function () {
      playRelated(0, "major", "Tonic (I)");
    });
    document.getElementById("mt-related-dominant").addEventListener("click", function () {
      playRelated(7, "major", "Dominant (V)");
    });
    document.getElementById("mt-related-subdominant").addEventListener("click", function () {
      playRelated(5, "major", "Subdominant (IV)");
    });
    document.getElementById("mt-related-relative").addEventListener("click", function () {
      playRelated(9, "minor", "Relative Minor (vi)");
    });
  }

  // ---------- Modulation & Pivot Chord Player ----------
  var modWidget = document.getElementById("mt-modulation-widget");
  if (modWidget) {
    var modKeySelect = document.getElementById("mt-mod-key-select");
    var modExampleSelect = document.getElementById("mt-mod-example-select");
    var modRow = document.getElementById("mt-mod-row");
    var modStatus = document.getElementById("mt-mod-status");

    NOTE_NAMES.forEach(function (name, i) {
      var opt = document.createElement("option");
      opt.value = i;
      opt.textContent = name + " Major";
      modKeySelect.appendChild(opt);
    });

    var EXAMPLES = {
      pivot: {
        label: "Pivot-Chord Modulation: I \u2192 vi \u2192 (V/V) \u2192 V",
        chords: [{ o: 0, q: "major" }, { o: 9, q: "minor", tag: "pivot" }, { o: 2, q: "major" }, { o: 7, q: "major" }],
        note: "The 2nd chord (built on scale degree 6) belongs to both the home key and its dominant key \u2014 it's the pivot chord bridging the two."
      },
      borrowed: {
        label: "Borrowed Chord: I \u2192 IV \u2192 iv \u2192 I",
        chords: [{ o: 0, q: "major" }, { o: 5, q: "major" }, { o: 5, q: "minor", tag: "borrowed" }, { o: 0, q: "major" }],
        note: "The 3rd chord is borrowed from the parallel minor key, adding unexpected color before returning home."
      },
      secondaryDom: {
        label: "Secondary Dominant: V7/V \u2192 V \u2192 I",
        chords: [{ o: 2, q: "dom7", tag: "secondary" }, { o: 7, q: "major" }, { o: 0, q: "major" }],
        note: "The 1st chord briefly acts as the dominant of the dominant (V of V), making the 2nd chord feel like a temporary tonic before resolving home."
      },
      fullWalkthrough: {
        label: "Full Walkthrough: I \u2192 vi \u2192 (V/V) \u2192 V \u2192 I \u2192 (V/V) \u2192 V",
        chords: [
          { o: 0, q: "major" }, { o: 9, q: "minor", tag: "pivot" }, { o: 2, q: "major" }, { o: 7, q: "major", tag: "newhome" },
          { o: 0, q: "major" }, { o: 2, q: "major" }, { o: 7, q: "major", tag: "newhome" }
        ],
        note: "By the final chord, the dominant key has taken over as the new tonic \u2014 the piece has modulated."
      }
    };

    Object.keys(EXAMPLES).forEach(function (key) {
      var opt = document.createElement("option");
      opt.value = key;
      opt.textContent = EXAMPLES[key].label;
      modExampleSelect.appendChild(opt);
    });

    function renderModulation() {
      var rootOffset = parseInt(modKeySelect.value, 10);
      var ex = EXAMPLES[modExampleSelect.value];
      modRow.innerHTML = "";
      ex.chords.forEach(function (c, i) {
        var chordRootMidi = 60 + ((rootOffset + c.o) % 12);
        var chip = document.createElement("div");
        chip.className = "mt-scale-chip";
        if (c.tag === "pivot" || c.tag === "borrowed" || c.tag === "secondary") chip.classList.add("mt-scale-chip-changed");
        if (c.tag === "newhome") chip.classList.add("mt-scale-chip-bass");
        chip.id = "mt-mod-chip-" + i;
        chip.textContent = noteName(chordRootMidi) + CHORD_LABELS[c.q];
        modRow.appendChild(chip);
      });
      modStatus.textContent = ex.note;
    }

    modKeySelect.addEventListener("change", renderModulation);
    modExampleSelect.addEventListener("change", renderModulation);

    document.getElementById("mt-mod-play").addEventListener("click", function () {
      var rootOffset = parseInt(modKeySelect.value, 10);
      var ex = EXAMPLES[modExampleSelect.value];
      var perChord = 0.9;
      ex.chords.forEach(function (c, i) {
        var chordRootMidi = 60 + ((rootOffset + c.o) % 12);
        var midis = CHORD_FORMULAS[c.q].map(function (o) { return chordRootMidi + o; });
        var dur = i === ex.chords.length - 1 ? perChord * 1.3 : perChord * 0.95;
        midis.forEach(function (midi) { playTone(midiToFreq(midi), i * perChord, dur); });
        setTimeout(function () {
          document.querySelectorAll("#mt-mod-row .mt-scale-chip").forEach(function (chip) {
            chip.classList.remove("mt-scale-chip-active");
          });
          var chip = document.getElementById("mt-mod-chip-" + i);
          if (chip) chip.classList.add("mt-scale-chip-active");
        }, i * perChord * 1000);
      });
      setTimeout(function () {
        document.querySelectorAll("#mt-mod-row .mt-scale-chip").forEach(function (chip) {
          chip.classList.remove("mt-scale-chip-active");
        });
      }, ex.chords.length * perChord * 1000);
    });

    renderModulation();
  }
})();
</script>
