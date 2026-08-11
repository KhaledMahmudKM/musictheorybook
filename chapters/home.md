# Concise Music Theory Book

<img src="cover_image.jpeg" alt="Cover Image" width="100%" >

---

## Learn the Language Behind Music

Music theory is not a set of rules meant to restrict creativity — it is a **map of how music works**. Once you understand it, you can listen more deeply, play more confidently, and create music with intention rather than guesswork.

This book gives you a structured, beginner-friendly path through the essential ideas that shape Western music, from the simplest notes to full song structures — and unlike a printed book, every chapter here is interactive. Click a keyboard, build a chord, or play through a progression instead of just reading about it.

### 🎧 Try it right now

<div class="mt-widget" id="mt-home-teaser-widget">
  <div class="mt-widget-label">🎧 Hear the Difference — Major vs. Minor</div>
  <div class="mt-chord-row">
    <button class="mt-btn" id="mt-home-teaser-major">▶ Play a Major Chord</button>
    <button class="mt-btn" id="mt-home-teaser-minor">▶ Play a Minor Chord</button>
  </div>
  <div class="mt-status" id="mt-home-teaser-status">One note is all that changes between them — Chapter 7 explains exactly which one.</div>
</div>

---

## What This Book Covers

In a clear, progressive format, this book teaches you how music is built:

- Notes, intervals, and scales
- Rhythm and musical timing
- Major, minor, and modal systems
- Chords and chord construction
- Seventh and extended harmony
- Chord progressions and cadences
- Musical form and structure
- Melody writing and development
- Key relationships and modulation
- Practical analysis and composition techniques

Each chapter builds directly on the previous one, so you always know **what to learn next and why it matters** — and each one includes playable widgets (keyboards, scale and chord builders, progression players, ear-training quizzes) so you can hear every concept as you read it.

---

## Who This Book Is For

This book is designed for:

- Beginners learning music theory for the first time
- Self-taught musicians who want structure
- Songwriters who want to understand harmony
- Producers working with chords and MIDI
- Instrumentalists who want to go beyond memorization
- Anyone curious about how music actually works

No advanced background is required — just curiosity, a device with sound, and consistency.

---

## What You Will Be Able To Do

By the end of this book, you will be able to:

- Understand how songs are constructed
- Identify keys, chords, and progressions by ear and theory
- Write basic chord progressions confidently
- Build melodies that fit harmonically
- Recognize common patterns across genres
- Analyze real music using Roman numerals and structure
- Understand why music "feels" the way it does

---

## How the Book Is Organized

The book follows a step-by-step learning path:

1. Foundations of sound and notes
2. Scales and tonal systems
3. Chords and harmony
4. Progressions and functional harmony
5. Melody and musical expression
6. Form and structure
7. Real-world application and analysis

Each chapter is concise, focused, and designed for practical understanding — not memorization. A quick-reference **Appendix** is also available for looking up intervals, chords, and progressions on the fly.

---

## Why This Approach Works

Instead of overwhelming you with complex theory all at once, this book:

- Introduces concepts gradually
- Reinforces ideas through repetition
- Connects theory to real musical examples you can hear immediately
- Focuses on patterns, not memorization
- Builds intuition alongside knowledge

Music theory becomes easier when you see — and hear — how everything connects.

---

## Start Learning Music Today

Whether you're writing your first song, learning an instrument, or just curious about how your favorite music works, this book gives you the tools to understand it.

Start from the beginning and build your knowledge step by step.

**Music is not random. Once you understand the system, you can speak its language.**

<script>
(function () {
  "use strict";

  if (!window.MTAudio) {
    console.error("MTAudio engine not found — make sure js/audio-engine.js is loaded in index.html");
    return;
  }
  var playTone = window.MTAudio.playTone;
  var midiToFreq = window.MTAudio.midiToFreq;

  var teaserWidget = document.getElementById("mt-home-teaser-widget");
  if (teaserWidget) {
    var status = document.getElementById("mt-home-teaser-status");

    document.getElementById("mt-home-teaser-major").addEventListener("click", function () {
      [60, 64, 67].forEach(function (midi) { playTone(midiToFreq(midi), 0, 1.1); }); // C E G
      status.textContent = "That's a C Major chord (C E G) \u2014 bright and stable.";
    });
    document.getElementById("mt-home-teaser-minor").addEventListener("click", function () {
      [60, 63, 67].forEach(function (midi) { playTone(midiToFreq(midi), 0, 1.1); }); // C Eb G
      status.textContent = "That's a C Minor chord (C E\u266d G) \u2014 same shape, one note lowered.";
    });
  }
})();
</script>
