# Chapter 4 — Reading Music

## Learning Objectives

By the end of this chapter, you should be able to:

- Understand the purpose of standard musical notation.
- Identify the staff, bar lines, and measures.
- Recognize the treble and bass clefs.
- Read notes on the staff.
- Understand ledger lines.
- Use accidentals correctly.
- Interpret key signatures.
- Recognize common dynamics and articulation markings.
- Identify common musical symbols.

> 🎧 This chapter has a real interactive staff — click any notehead to hear it and see its name, or take the note-naming quiz once you've explored a bit.

---

## Introduction

Musical notation is a written language that allows musicians to record and share music. Just as books use letters and punctuation to communicate ideas, sheet music uses notes, symbols, and markings to describe what should be played and how it should sound.

Although learning to read music takes practice, understanding the notation system makes it much easier to learn new pieces, communicate with other musicians, and study music theory.

---

## The Musical Staff

The **staff** (or **stave**) is the foundation of written music. It consists of **five horizontal lines** and the **four spaces** between them.

```
-----------------
-----------------
-----------------
-----------------
-----------------
```

Notes are placed on either the lines or the spaces. Higher notes are written higher on the staff, while lower notes are written lower.

---

## Measures and Bar Lines

The staff is divided into sections called **measures** (or **bars**). Vertical lines called **bar lines** separate one measure from the next.

```
| ♩ ♩ ♩ ♩ | ♩ ♩ ♩ ♩ |
```

The number of beats contained in each measure is determined by the **time signature**. Measures make music easier to read and help performers keep their place.

---

## Clefs

A **clef** tells us which pitches correspond to the lines and spaces of the staff.

The two most common clefs are the **treble clef** and the **bass clef**. Different instruments use different clefs depending on their pitch range.

---

## The Treble Clef

The **treble clef** (also called the **G clef**) is used for higher-pitched instruments and voices, including violin, flute, trumpet, clarinet, the right hand of the piano, and most vocal melodies.

### Notes on the Lines

From bottom to top:

```
E  G  B  D  F
```

A common mnemonic is:

> **Every Good Boy Deserves Fruit**

(You may also encounter the traditional phrase *Every Good Boy Deserves Favour*.)

### Notes in the Spaces

From bottom to top:

```
F  A  C  E
```

These spell the word:

> **FACE**

---

## The Bass Clef

The **bass clef** (also called the **F clef**) is used for lower-pitched instruments and voices, including bass guitar, tuba, cello, bassoon, the left hand of the piano, and bass voice.

### Notes on the Lines

From bottom to top:

```
G  B  D  F  A
```

One common mnemonic is:

> **Good Boys Do Fine Always**

### Notes in the Spaces

From bottom to top:

```
A  C  E  G
```

A common mnemonic is:

> **All Cows Eat Grass**

### 🎹 Try it — Interactive Staff

Click any notehead to hear its pitch and see its name appear below the staff. Switch between Treble and Bass with the selector, and try "Play Bottom to Top" to hear the full range in order. Notice that the note reaching just above the bass staff (C4) is the very same **Middle C** you'll reach just below the treble staff — that's the connecting point you'll read about next.

<div class="mt-widget" id="mt-staff-widget">
  <div class="mt-widget-label">🎹 Interactive Staff — click a notehead</div>
  <div class="mt-clef-toggle">
    <label class="mt-field">
      Clef
      <select id="mt-clef-select" class="mt-select">
        <option value="treble" selected>Treble Clef (G Clef)</option>
        <option value="bass">Bass Clef (F Clef)</option>
      </select>
    </label>
  </div>

  <svg viewBox="0 0 480 200" class="mt-staff-svg" id="mt-staff-treble">
    <line x1="60" y1="60" x2="450" y2="60" class="mt-staff-line"/>
    <line x1="60" y1="80" x2="450" y2="80" class="mt-staff-line"/>
    <line x1="60" y1="100" x2="450" y2="100" class="mt-staff-line"/>
    <line x1="60" y1="120" x2="450" y2="120" class="mt-staff-line"/>
    <line x1="60" y1="140" x2="450" y2="140" class="mt-staff-line"/>
    <text x="12" y="138" font-size="90" class="mt-clef">𝄞</text>
    <g class="mt-notehead" data-midi="60" data-name="C4" transform="translate(100,160)">
      <line x1="-14" y1="0" x2="14" y2="0" class="mt-ledger-line"/><ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="62" data-name="D4" transform="translate(128,150)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="64" data-name="E4" transform="translate(156,140)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="65" data-name="F4" transform="translate(184,130)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="67" data-name="G4" transform="translate(212,120)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="69" data-name="A4" transform="translate(240,110)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="71" data-name="B4" transform="translate(268,100)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="72" data-name="C5" transform="translate(296,90)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="74" data-name="D5" transform="translate(324,80)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="76" data-name="E5" transform="translate(352,70)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="77" data-name="F5" transform="translate(380,60)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="79" data-name="G5" transform="translate(408,50)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="81" data-name="A5" transform="translate(436,40)">
      <line x1="-14" y1="0" x2="14" y2="0" class="mt-ledger-line"/><ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
  </svg>

  <svg viewBox="0 0 480 200" class="mt-staff-svg" id="mt-staff-bass" style="display:none;">
    <line x1="60" y1="60" x2="450" y2="60" class="mt-staff-line"/>
    <line x1="60" y1="80" x2="450" y2="80" class="mt-staff-line"/>
    <line x1="60" y1="100" x2="450" y2="100" class="mt-staff-line"/>
    <line x1="60" y1="120" x2="450" y2="120" class="mt-staff-line"/>
    <line x1="60" y1="140" x2="450" y2="140" class="mt-staff-line"/>
    <text x="12" y="112" font-size="60" class="mt-clef">𝄢</text>
    <g class="mt-notehead" data-midi="40" data-name="E2" transform="translate(100,160)">
      <line x1="-14" y1="0" x2="14" y2="0" class="mt-ledger-line"/><ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="41" data-name="F2" transform="translate(128,150)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="43" data-name="G2" transform="translate(156,140)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="45" data-name="A2" transform="translate(184,130)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="47" data-name="B2" transform="translate(212,120)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="48" data-name="C3" transform="translate(240,110)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="50" data-name="D3" transform="translate(268,100)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="52" data-name="E3" transform="translate(296,90)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="53" data-name="F3" transform="translate(324,80)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="55" data-name="G3" transform="translate(352,70)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="57" data-name="A3" transform="translate(380,60)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="59" data-name="B3" transform="translate(408,50)">
      <ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
    <g class="mt-notehead" data-midi="60" data-name="C4" transform="translate(436,40)">
      <line x1="-14" y1="0" x2="14" y2="0" class="mt-ledger-line"/><ellipse cx="0" cy="0" rx="9" ry="7" class="mt-notehead-shape"/>
    </g>
  </svg>

  <div class="mt-staff-readout" id="mt-staff-readout">Click a notehead above.</div>
  <button class="mt-btn" id="mt-staff-play-all">▶ Play Bottom to Top</button>

  <div class="mt-widget-label" style="margin-top:16px;">📝 Quiz — Name That Note</div>
  <button class="mt-btn" id="mt-staff-quiz-new">🔀 New Question</button>
  <button class="mt-btn" id="mt-staff-quiz-replay">🔁 Replay</button>
  <div class="mt-letter-row" id="mt-staff-quiz-letters"></div>
  <div class="mt-status" id="mt-staff-quiz-feedback">Press "New Question" to begin.</div>
  <div class="mt-status" id="mt-staff-quiz-score">Score: 0 / 0</div>
</div>

---

## Ledger Lines

The five-line staff cannot represent every musical note. When notes extend beyond the staff, short additional lines called **ledger lines** are used — exactly what you just clicked on at the top and bottom of the staff widget above.

```
      ●
-----|-----
```

Ledger lines allow notation to continue above or below the staff while remaining easy to read.

---

## Middle C

**Middle C** is an important reference point in music notation. It lies between the treble and bass staves. On the piano, Middle C is located near the center of the keyboard.

In grand staff notation:

- It appears below the treble staff using one ledger line.
- It appears above the bass staff using one ledger line.

Because of its central position, Middle C is often one of the first notes beginners learn.

---

## The Grand Staff

Piano music is usually written on a **grand staff**, which combines a treble staff and a bass staff, connected by a brace and sharing the same bar lines.

Typically, the right hand plays notes on the treble staff while the left hand plays notes on the bass staff. The grand staff provides a wide enough range to represent nearly the entire keyboard.

---

## Note Names on the Staff

As notes move upward on the staff, they follow the repeating musical alphabet:

```
A B C D E F G
```

After G, the sequence repeats. Each move from one line to the next space (or vice versa) advances to the next letter.

---

## Accidentals

Sometimes a note must be raised or lowered. This is indicated using **accidentals**.

| Symbol | Name | Effect |
|--------|------|--------|
| ♯ | Sharp | Raise the note by one semitone |
| ♭ | Flat | Lower the note by one semitone |
| ♮ | Natural | Cancel a previous sharp or flat |

Unless otherwise indicated, an accidental applies only to notes of the same pitch within the current measure — it is cancelled automatically at the next bar line.

```
| F♯  G  F♯ | F |
```

The last F is natural because it is in a new measure.

---

## Key Signatures

Rather than writing the same accidental repeatedly throughout a piece, composers place **key signatures** at the beginning of the staff. A key signature indicates which notes are consistently sharp or flat throughout the music.

| Key Signature | Meaning |
|--------------|---------|
| No sharps or flats | C Major / A Minor |
| One sharp (F♯) | G Major / E Minor |
| One flat (B♭) | F Major / D Minor |

You will study keys and scales in greater detail in later chapters.

### 🎧 Try it — Hear a Key Signature

The same 7-note scale shape, but with a different key signature applied each time. Listen for how the sharp or flat changes the color of the scale even though the pattern of steps stays similar.

<div class="mt-widget" id="mt-keysig-widget">
  <div class="mt-widget-label">🎧 Key Signature Preview</div>
  <button class="mt-btn" id="mt-keysig-c">▶ C Major (no sharps/flats)</button>
  <button class="mt-btn" id="mt-keysig-g">▶ G Major (F♯)</button>
  <button class="mt-btn" id="mt-keysig-f">▶ F Major (B♭)</button>
  <div class="mt-status" id="mt-keysig-status">Each plays its own 7-note scale ascending.</div>
</div>

---

## Dynamics

**Dynamics** indicate how loudly or softly music should be played.

| Symbol | Meaning |
|--------|---------|
| pp | Very soft |
| p | Soft |
| mp | Moderately soft |
| mf | Moderately loud |
| f | Loud |
| ff | Very loud |

Composers may also indicate gradual changes in volume.

| Symbol | Meaning |
|--------|---------|
| \< | Crescendo (gradually louder) |
| \> | Diminuendo or Decrescendo (gradually softer) |

Dynamics add expression and emotional contrast to music. (Recall the Dynamics Explorer widget from Chapter 1 if you'd like to hear pp through ff again.)

---

## Articulations

**Articulations** describe how individual notes should be performed.

| Symbol | Meaning |
|--------|---------|
| • | Staccato (short and detached) |
| — | Tenuto (held for full value) |
| Accent (>) | Play with emphasis |
| Slur | Play notes smoothly and connected |

The same sequence of notes can sound very different depending on the articulations used.

---

## Repeat Signs

Music often contains repeated sections. The most common repeat sign is:

```
:||
||:
```

A performer repeats the music between the matching repeat signs. Other common repeat instructions include:

- **D.C. (Da Capo)** — Return to the beginning.
- **D.S. (Dal Segno)** — Return to the sign (𝄋).
- **Fine** — End here.
- **Coda (𝄌)** — Jump to the ending section.

These markings reduce the amount of repeated notation on the page.

---

## Common Musical Symbols

Besides notes and rests, sheet music may include many additional symbols.

| Symbol | Meaning |
|--------|---------|
| ♯ | Sharp |
| ♭ | Flat |
| ♮ | Natural |
| 𝄐 | Fermata (hold longer than written) |
| 8va | Play one octave higher |
| 8vb | Play one octave lower |
| Tr | Trill |
| Ped. | Press the piano sustain pedal |

Different styles of music may use additional markings, but these are among the most frequently encountered.

---

## Practice Examples

### Example 1
What are the notes on the lines of the treble clef?
**Answer:** E, G, B, D, F.

### Example 2
What are the notes in the spaces of the bass clef?
**Answer:** A, C, E, G.

### Example 3
What is the purpose of a key signature?
**Answer:** It indicates which notes are consistently sharp or flat throughout a piece of music.

### Example 4
What does the marking **mf** mean?
**Answer:** Moderately loud.

### Example 5
What does a staccato marking indicate?
**Answer:** The note should be played short and detached.

---

## Key Takeaways

- The staff consists of five lines and four spaces.
- Clefs assign pitches to the staff.
- The treble clef is generally used for higher pitches, while the bass clef is used for lower pitches.
- Ledger lines extend the range of the staff.
- Middle C connects the treble and bass staves.
- The grand staff combines the treble and bass staves for instruments such as the piano.
- Accidentals temporarily raise or lower notes.
- Key signatures identify the sharps or flats used throughout a piece.
- Dynamics indicate volume.
- Articulations describe how notes should be performed.
- Musical symbols provide additional instructions to the performer.

---

## Summary

Standard musical notation provides a universal way to read and write music. In this chapter, you learned how the staff organizes notes, how clefs determine pitch, how ledger lines extend the musical range, and how accidentals and key signatures modify notes. You also explored dynamics, articulations, repeat signs, and other common musical symbols that help performers interpret a piece accurately and expressively.

In the next chapter, you will learn how **major scales** are constructed and how they form the basis of keys, melodies, and harmony.

<script>
(function () {
  "use strict";

  if (!window.MTAudio) {
    console.error("MTAudio engine not found — make sure js/audio-engine.js is loaded in index.html");
    return;
  }
  var playTone = window.MTAudio.playTone;
  var midiToFreq = window.MTAudio.midiToFreq;

  // ---------- Interactive Staff ----------
  var staffWidget = document.getElementById("mt-staff-widget");
  if (staffWidget) {
    var clefSelect = document.getElementById("mt-clef-select");
    var trebleSvg = document.getElementById("mt-staff-treble");
    var bassSvg = document.getElementById("mt-staff-bass");
    var readout = document.getElementById("mt-staff-readout");

    function currentSvg() {
      return clefSelect.value === "treble" ? trebleSvg : bassSvg;
    }
    function currentNotes() {
      var svg = currentSvg();
      var groups = svg.querySelectorAll(".mt-notehead");
      var arr = [];
      groups.forEach(function (g) {
        arr.push({ midi: parseInt(g.dataset.midi, 10), name: g.dataset.name, el: g });
      });
      return arr;
    }

    function clearActive(svg) {
      svg.querySelectorAll(".mt-notehead").forEach(function (g) {
        g.classList.remove("mt-notehead-quiz-active");
      });
    }

    function attachClickHandlers(svg) {
      svg.querySelectorAll(".mt-notehead").forEach(function (g) {
        g.addEventListener("click", function () {
          var midi = parseInt(g.dataset.midi, 10);
          var name = g.dataset.name;
          readout.textContent = name + "  (" + Math.round(midiToFreq(midi)) + " Hz)";
          playTone(midiToFreq(midi), 0, 0.8);
        });
      });
    }
    attachClickHandlers(trebleSvg);
    attachClickHandlers(bassSvg);

    clefSelect.addEventListener("change", function () {
      trebleSvg.style.display = clefSelect.value === "treble" ? "block" : "none";
      bassSvg.style.display = clefSelect.value === "bass" ? "block" : "none";
      readout.textContent = "Click a notehead above.";
      endQuizRound();
    });

    document.getElementById("mt-staff-play-all").addEventListener("click", function () {
      var notes = currentNotes();
      notes.forEach(function (n, i) {
        playTone(midiToFreq(n.midi), i * 0.35, 0.32);
      });
      readout.textContent = "Playing all notes, low to high\u2026";
    });

    // ---------- Quiz: Name That Note ----------
    var quizLetters = document.getElementById("mt-staff-quiz-letters");
    var quizFeedback = document.getElementById("mt-staff-quiz-feedback");
    var quizScore = document.getElementById("mt-staff-quiz-score");
    var score = { correct: 0, total: 0 };
    var currentTarget = null;

    var LETTERS = ["A", "B", "C", "D", "E", "F", "G"];
    function renderLetterButtons() {
      quizLetters.innerHTML = "";
      LETTERS.forEach(function (letter) {
        var btn = document.createElement("button");
        btn.className = "mt-btn mt-letter-btn";
        btn.textContent = letter;
        btn.addEventListener("click", function () { checkAnswer(letter, btn); });
        quizLetters.appendChild(btn);
      });
    }

    function endQuizRound() {
      currentTarget = null;
      clearActive(trebleSvg);
      clearActive(bassSvg);
    }

    function newQuestion() {
      var notes = currentNotes();
      currentTarget = notes[Math.floor(Math.random() * notes.length)];
      clearActive(currentSvg());
      currentTarget.el.classList.add("mt-notehead-quiz-active");
      quizFeedback.textContent = "Listen and look at the highlighted note \u2014 which letter is it?";
      renderLetterButtons();
      playTone(midiToFreq(currentTarget.midi), 0, 0.8);
    }

    function checkAnswer(letter, btn) {
      if (!currentTarget) return;
      score.total++;
      var buttons = quizLetters.querySelectorAll("button");
      buttons.forEach(function (b) { b.disabled = true; });
      var correctLetter = currentTarget.name.charAt(0);
      if (letter === correctLetter) {
        score.correct++;
        btn.classList.add("mt-correct");
        quizFeedback.textContent = "\u2705 Correct! That was " + currentTarget.name + ".";
      } else {
        btn.classList.add("mt-wrong");
        quizFeedback.textContent = "\u274c Not quite \u2014 that was " + currentTarget.name + ".";
      }
      quizScore.textContent = "Score: " + score.correct + " / " + score.total;
    }

    document.getElementById("mt-staff-quiz-new").addEventListener("click", newQuestion);
    document.getElementById("mt-staff-quiz-replay").addEventListener("click", function () {
      if (currentTarget) playTone(midiToFreq(currentTarget.midi), 0, 0.8);
    });
    renderLetterButtons();
  }

  // ---------- Key Signature Preview ----------
  var keysigWidget = document.getElementById("mt-keysig-widget");
  if (keysigWidget) {
    var SCALES = {
      c: [60, 62, 64, 65, 67, 69, 71, 72],       // C D E F G A B C
      g: [67, 69, 71, 72, 74, 76, 78, 79],       // G A B C D E F# G
      f: [65, 67, 69, 70, 72, 74, 76, 77]        // F G A Bb C D E F
    };
    var keysigStatus = document.getElementById("mt-keysig-status");

    function playScale(key, label) {
      var notes = SCALES[key];
      notes.forEach(function (midi, i) {
        playTone(midiToFreq(midi), i * 0.32, 0.3);
      });
      keysigStatus.textContent = "Playing " + label + "\u2026";
    }
    document.getElementById("mt-keysig-c").addEventListener("click", function () {
      playScale("c", "C Major");
    });
    document.getElementById("mt-keysig-g").addEventListener("click", function () {
      playScale("g", "G Major (F\u266f)");
    });
    document.getElementById("mt-keysig-f").addEventListener("click", function () {
      playScale("f", "F Major (B\u266d)");
    });
  }
})();
</script>
