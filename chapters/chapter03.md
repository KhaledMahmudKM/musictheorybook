# Chapter 3 — Rhythm and Time

## Learning Objectives

By the end of this chapter, you should be able to:

- Explain the concepts of beat, pulse, and rhythm.
- Understand tempo and how it is measured.
- Recognize common note values and rests.
- Interpret simple time signatures.
- Distinguish between simple and compound meter.
- Understand syncopation.
- Count basic rhythms.

> 🎧 This chapter is interactive — start the metronome below and keep it running while you read; it makes every section that follows much easier to feel rather than just picture.

---

## Introduction

If **pitch** determines *what* notes we hear, **rhythm** determines *when* we hear them.

Rhythm gives music its movement and structure. Without rhythm, music would be a collection of notes with no sense of timing or flow.

Whether it is a classical symphony, a jazz improvisation, or a rock song, every piece of music relies on rhythm.

---

## Beat

A **beat** is the regular pulse that underlies a piece of music. It is the steady "heartbeat" that listeners naturally tap their feet or clap their hands to.

For example, if you clap steadily once every second, each clap represents one beat.

Although the beat usually remains constant, the notes played by the musicians may occur on the beat, between beats, or may last for several beats.

---

## Pulse

The terms **pulse** and **beat** are often used interchangeably.

The pulse is the underlying, evenly spaced timing that provides a framework for the music.

Think of a clock ticking every second:

```
Tick   Tick   Tick   Tick
```

Each tick is like a musical beat. The rhythm of a melody is created by arranging notes around this steady pulse.

---

## Rhythm

**Rhythm** is the pattern of long and short sounds organized over the beat.

For example, both of the following rhythms may use the same four beats, but they sound very different:

```
Beat:    1    2    3    4

Rhythm A:
♪    ♪    ♪    ♪

Rhythm B:
♩       ♫    ♩
```

The beat stays the same, while the rhythm changes.

---

## Tempo

**Tempo** is the speed at which music is performed, usually measured in **beats per minute (BPM)**.

| Tempo | Approximate BPM |
|--------|----------------:|
| Largo | 40–60 |
| Adagio | 66–76 |
| Andante | 76–108 |
| Moderato | 108–120 |
| Allegro | 120–168 |
| Presto | 168–200+ |

For example, 60 BPM means one beat every second, while 120 BPM means two beats every second. Many modern pieces specify the tempo numerically (for example, **♩ = 120**), while others use traditional Italian terms.

### 🎚️ Try it — Metronome & Time Signature

Set a tempo and a time signature, then press Start. Watch the dots light up in time, and notice how the **first dot in each measure is accented** — a slightly higher, stronger click, just like the "strong beat" musicians feel at the top of every measure. Switch to 6/8 to hear the difference between simple and compound meter (covered further down).

<div class="mt-widget" id="mt-metronome-widget">
  <div class="mt-widget-label">🎚️ Metronome &amp; Time Signature</div>
  <div class="mt-metronome-controls">
    <label class="mt-field">
      Tempo: <span id="mt-bpm-value">100</span> BPM
      <input type="range" id="mt-bpm-slider" class="mt-slider" min="40" max="200" step="1" value="100">
    </label>
    <label class="mt-field">
      Time Signature
      <select id="mt-meter-select" class="mt-select">
        <option value="2/4">2/4</option>
        <option value="3/4">3/4</option>
        <option value="4/4" selected>4/4</option>
        <option value="6/8">6/8</option>
      </select>
    </label>
  </div>
  <div class="mt-beat-dots" id="mt-beat-dots"></div>
  <button class="mt-btn" id="mt-metronome-toggle">▶ Start</button>
  <div class="mt-status" id="mt-metronome-status">Not running.</div>
</div>

---

## Note Values

Each note has a duration relative to the beat. The most common note values are:

| Note | Name | Duration |
|------|------|---------:|
| 𝅝 | Whole note | 4 beats |
| 𝅗𝅥 | Half note | 2 beats |
| ♩ | Quarter note | 1 beat |
| ♪ | Eighth note | 1/2 beat |
| ♬ | Sixteenth note | 1/4 beat |

If the quarter note represents one beat:

```
Whole Note
|--------4 beats--------|

Half Notes
|----2----|----2----|

Quarter Notes
|1|2|3|4|

Eighth Notes
|1 &|2 &|3 &|4 &|
```

Each shorter note divides the beat into smaller equal parts.

> **Note:** The actual duration of a note depends on the tempo. A quarter note lasts longer at 60 BPM than at 120 BPM.

### 🎚️ Try it — Note Value Explorer

Every button below plays **one full measure of 4 beats** at a fixed practice tempo (80 BPM) — only the note value changes. Notice how the whole note ticks just once for the whole measure, while the sixteenth note fires rapidly. This is the clearest way to *feel* what "1/4 beat" actually means.

<div class="mt-widget" id="mt-notevalue-widget">
  <div class="mt-widget-label">🎚️ Note Value Explorer — fixed at 80 BPM</div>
  <div class="mt-notevalue-row" id="mt-notevalue-row"></div>
</div>

---

## Dotted Notes

A **dot** placed after a note increases its duration by **half of its original value**.

| Note | Duration |
|------|---------:|
| Half note | 2 beats |
| Dotted half note | 3 beats |
| Quarter note | 1 beat |
| Dotted quarter note | 1½ beats |
| Eighth note | 1/2 beat |
| Dotted eighth note | 3/4 beat |

```
Quarter Note        = 1 beat
Dotted Quarter Note = 1 + 1/2 = 1.5 beats
```

Dotted notes are commonly used in compound meters and many musical styles.

---

## Ties

A **tie** connects two notes of the **same pitch**, combining their durations into a single sustained note.

```
Quarter Note + Quarter Note   →   ♩  ♩
With a tie                    →   ♩‿♩   (one note lasting 2 beats)
```

A tie should not be confused with a **slur**, which connects notes of different pitches and indicates smooth performance rather than longer duration.

---

## Rests

A **rest** indicates silence. Like notes, rests have different durations.

| Rest | Duration |
|------|---------:|
| Whole rest | 4 beats |
| Half rest | 2 beats |
| Quarter rest | 1 beat |
| Eighth rest | 1/2 beat |
| Sixteenth rest | 1/4 beat |

Silence is just as important as sound in creating musical rhythm.

---

## Measures (Bars)

Music is divided into equal sections called **measures**, also known as **bars**. Vertical bar lines separate one measure from the next.

```
| 1 2 3 4 | 1 2 3 4 | 1 2 3 4 |
```

Each measure contains a specific number of beats determined by the **time signature**.

---

## Time Signatures

A **time signature** tells us how beats are organized within each measure. It is written as two numbers:

```
Top Number
-----------
Bottom Number
```

The **top number** tells us how many beats are in each measure. The **bottom number** tells us which note value represents one beat.

| Time Signature | Meaning |
|---------------|---------|
| 4/4 | Four quarter-note beats per measure |
| 3/4 | Three quarter-note beats per measure |
| 2/4 | Two quarter-note beats per measure |
| 6/8 | Six eighth-note beats per measure |

Scroll back up to the metronome widget and try switching between 4/4, 3/4, 2/4, and 6/8 — the number of dots per measure and the accent pattern will change to match.

---

## Simple Meter

A **simple meter** divides each beat into **two equal parts**. Common examples include 2/4, 3/4, and 4/4.

For example, in 4/4 time, a quarter note (1 beat) can be divided into two eighth notes ("1 &").

---

## Compound Meter

A **compound meter** divides each beat into **three equal parts**. The most common example is **6/8**.

Instead of counting `1 2 3 4 5 6`, musicians often feel:

```
1-la-li   2-la-li
```

or

```
ONE-and-a   TWO-and-a
```

Although there are six eighth notes in each measure, they are grouped into **two main beats**. Compound meter creates a flowing, lilting feel that is common in folk music, marches, and ballads — this is exactly what you're hearing when you set the metronome widget above to 6/8: two strong accents per measure, each followed by two softer clicks.

---

## Syncopation

Normally, the strongest accents occur on the main beats. **Syncopation** occurs when emphasis is placed on weak beats or between beats.

For example, in 4/4 time, the natural accent pattern is:

```
Strong   Weak   Medium   Weak
  1       2       3       4
```

A syncopated rhythm might instead emphasize the off-beats:

```
1   &   2   &   3   &   4   &
        ↑           ↑
    accented    accented
```

Syncopation creates energy, surprise, and forward motion. It is common in jazz, rock, pop, funk, and Latin music.

### 🎧 Try it — Straight vs. Syncopated

Both patterns use the same eight eighth-note slots over one measure. Listen to how differently they feel depending on *where* the accent falls.

<div class="mt-widget" id="mt-syncopation-widget">
  <div class="mt-widget-label">🎧 Straight vs. Syncopated</div>
  <div class="mt-syncopation-row">
    <button class="mt-btn" id="mt-sync-straight">▶ On the Beat (accents on 1 2 3 4)</button>
    <button class="mt-btn" id="mt-sync-off">▶ Syncopated (accents on the "&"s)</button>
  </div>
  <div class="mt-status" id="mt-sync-status">Press either button to compare.</div>
</div>

---

## Counting Rhythms

Learning to count rhythms helps musicians perform accurately.

```
Quarter notes:    1   2   3   4
Eighth notes:     1 & 2 & 3 & 4 &
Sixteenth notes:  1 e & a  2 e & a  3 e & a  4 e & a
```

Speaking the counts while clapping the rhythm is an effective way to develop rhythmic accuracy. Try counting "1 & 2 & 3 & 4 &" out loud along with the metronome widget in 4/4 — say a number or "&" on every dot.

---

## Practice Examples

### Example 1
How many beats does a half note receive in 4/4 time?
**Answer:** 2 beats.

### Example 2
How many quarter notes fit into one whole note?
**Answer:** 4 quarter notes.

### Example 3
How many eighth notes fit into one half note?
**Answer:** 4 eighth notes.

### Example 4
What does a 3/4 time signature indicate?
**Answer:** Each measure contains three quarter-note beats.

### Example 5
What is syncopation?
**Answer:** Emphasizing weak beats or off-beats instead of the normally accented beats.

---

## Key Takeaways

- Rhythm organizes sounds over time.
- The beat is the steady pulse of the music.
- Tempo determines the speed of the beat.
- Note values indicate how long notes are held.
- Dotted notes increase a note's duration by half of its original value.
- Ties combine the durations of notes with the same pitch.
- Rests indicate silence.
- Measures divide music into equal sections.
- Time signatures specify how beats are grouped.
- Simple meter divides beats into two parts, while compound meter divides them into three.
- Syncopation places emphasis on unexpected parts of the beat.
- Counting rhythms aloud improves timing and accuracy.

---

## Summary

Rhythm provides the sense of movement and timing in music. In this chapter, you learned how beats form the foundation of rhythm, how tempo controls speed, how note values and rests determine duration, and how time signatures organize beats into measures. You also explored simple and compound meter, dotted notes, ties, and syncopation. Together, these concepts allow musicians to read, perform, and create rhythmic patterns with confidence.

In the next chapter, you will learn how to read standard musical notation, including the staff, clefs, note names, key signatures, dynamics, and other symbols used in sheet music.

<script>
(function () {
  "use strict";

  if (!window.MTAudio) {
    console.error("MTAudio engine not found — make sure js/audio-engine.js is loaded in index.html");
    return;
  }
  var playClick = window.MTAudio.playClick;

  // ---------- Metronome & Time Signature ----------
  var bpmSlider = document.getElementById("mt-bpm-slider");
  if (bpmSlider) {
    var bpmValueEl = document.getElementById("mt-bpm-value");
    var meterSelect = document.getElementById("mt-meter-select");
    var dotsContainer = document.getElementById("mt-beat-dots");
    var toggleBtn = document.getElementById("mt-metronome-toggle");
    var statusEl = document.getElementById("mt-metronome-status");

    var METERS = {
      "2/4": { clicks: 2, unit: 1,   accents: [0] },
      "3/4": { clicks: 3, unit: 1,   accents: [0] },
      "4/4": { clicks: 4, unit: 1,   accents: [0] },
      "6/8": { clicks: 6, unit: 0.5, accents: [0, 3] }
    };

    var isPlaying = false;
    var timerId = null;
    var currentIndex = 0;
    var dots = [];

    function buildDots() {
      var meterDef = METERS[meterSelect.value];
      dotsContainer.innerHTML = "";
      dots = [];
      for (var i = 0; i < meterDef.clicks; i++) {
        var dot = document.createElement("div");
        dot.className = "mt-dot";
        if (meterDef.accents.indexOf(i) !== -1) dot.classList.add("mt-dot-accent");
        dotsContainer.appendChild(dot);
        dots.push(dot);
      }
      currentIndex = 0;
    }

    function tick() {
      var meterDef = METERS[meterSelect.value];
      var bpm = parseInt(bpmSlider.value, 10);
      var quarterDur = 60 / bpm;
      var intervalMs = quarterDur * meterDef.unit * 1000;

      if (currentIndex >= meterDef.clicks) currentIndex = 0;
      var accent = meterDef.accents.indexOf(currentIndex) !== -1;
      playClick(0, accent);

      dots.forEach(function (d) { d.classList.remove("mt-dot-active"); });
      if (dots[currentIndex]) dots[currentIndex].classList.add("mt-dot-active");

      currentIndex = (currentIndex + 1) % meterDef.clicks;
      timerId = setTimeout(tick, intervalMs);
    }

    function start() {
      isPlaying = true;
      currentIndex = 0;
      toggleBtn.textContent = "■ Stop";
      toggleBtn.classList.add("mt-active-toggle");
      statusEl.textContent = "Running at " + bpmSlider.value + " BPM, " + meterSelect.value + ".";
      tick();
    }
    function stop() {
      isPlaying = false;
      clearTimeout(timerId);
      toggleBtn.textContent = "▶ Start";
      toggleBtn.classList.remove("mt-active-toggle");
      statusEl.textContent = "Stopped.";
      dots.forEach(function (d) { d.classList.remove("mt-dot-active"); });
    }

    bpmSlider.addEventListener("input", function () {
      bpmValueEl.textContent = bpmSlider.value;
      if (isPlaying) statusEl.textContent = "Running at " + bpmSlider.value + " BPM, " + meterSelect.value + ".";
    });
    meterSelect.addEventListener("change", function () {
      buildDots();
      if (isPlaying) statusEl.textContent = "Running at " + bpmSlider.value + " BPM, " + meterSelect.value + ".";
    });
    toggleBtn.addEventListener("click", function () {
      if (isPlaying) stop(); else start();
    });

    buildDots();
  }

  // ---------- Note Value Explorer ----------
  var noteValueRow = document.getElementById("mt-notevalue-row");
  if (noteValueRow) {
    var FIXED_BPM = 80;
    var quarterDur = 60 / FIXED_BPM;
    var measureDur = quarterDur * 4; // one 4-beat measure

    var NOTE_VALUES = [
      { label: "𝅝 Whole Note (1 click)",     clicksPerMeasure: 1 },
      { label: "𝅗𝅥 Half Note (2 clicks)",     clicksPerMeasure: 2 },
      { label: "♩ Quarter Note (4 clicks)",  clicksPerMeasure: 4 },
      { label: "♪ Eighth Note (8 clicks)",   clicksPerMeasure: 8 },
      { label: "♬ Sixteenth Note (16 clicks)", clicksPerMeasure: 16 }
    ];

    NOTE_VALUES.forEach(function (nv) {
      var btn = document.createElement("button");
      btn.className = "mt-btn";
      btn.textContent = nv.label;
      btn.addEventListener("click", function () {
        var interval = measureDur / nv.clicksPerMeasure;
        for (var i = 0; i < nv.clicksPerMeasure; i++) {
          playClick(i * interval, i === 0);
        }
      });
      noteValueRow.appendChild(btn);
    });
  }

  // ---------- Syncopation ----------
  var syncStraight = document.getElementById("mt-sync-straight");
  if (syncStraight) {
    var syncStatus = document.getElementById("mt-sync-status");
    var SYNC_BPM = 80;
    var eighthDur = (60 / SYNC_BPM) / 2;

    function playPattern(accentIndices) {
      for (var i = 0; i < 8; i++) {
        playClick(i * eighthDur, accentIndices.indexOf(i) !== -1);
      }
    }
    syncStraight.addEventListener("click", function () {
      syncStatus.textContent = "Straight: accents land on 1, 2, 3, 4 — the expected beats.";
      playPattern([0, 2, 4, 6]);
    });
    document.getElementById("mt-sync-off").addEventListener("click", function () {
      syncStatus.textContent = "Syncopated: accents land on the off-beats (the \"&\"s) instead.";
      playPattern([1, 3, 5, 7]);
    });
  }
})();
</script>
