// Can of Words — Puzzle Data v8.5
// To update puzzles: edit this file, rename to puzzles-v#.#.js (or next version),
// then update the <script src="..."> reference in index.html to match.

const PUZZLE_START_DATE = '2026-05-05';
const PUZZLES = [

    // ── WEEK 1 (May 5) ─────────────────────────────────
    { clue: 'Shakespeare', sentence: 'ZW5nbGlzaCBwbGF5d3JpZ2h0IHdobyB3cm90ZSBoYW1sZXQgYW5kIG1hY2JldGg=', type: 'regular', par: 2 }, // Tue May 5
    { clue: 'Coffee', sentence: 'aG90IG1vcm5pbmcgZHJpbmsgYnJld2VkIGZyb20gcm9hc3RlZCBiZWFucw==', type: 'regular', par: 2 }, // Wed May 6
    { clue: 'Avocado', sentence: 'Y3JlYW15IGZydWl0IHJlcXVpcmVkIHRvIG1ha2UgZ3VhY2Ftb2xl', type: 'regular', par: 2 }, // Thu May 7
    { clue: 'Calm?', sentence: 'a25vd24gdG8gY29tZSBiZWZvcmUgdGhlIHN0b3Jt', type: 'playful', par: 1 }, // Fri May 8
    { clue: 'Tofu!', sentence: 'c2lsa2VuIHNvZnQgZmlybSBleHRyYSBmaXJt', type: 'playful', par: 2 }, // Sat May 9
    { clue: 'Buffalo;', sentence: 'bGFyZ2UgYW1lcmljYW4gYmlzb24gY2l0eSBpbiBuZXcgeW9yayBzdGF0ZQ==', type: 'sunday', par: 2 }, // Sun May 10

    // ── WEEK 2 (May 11) ─────────────────────────────────
    { clue: 'Penguin', sentence: 'ZmxpZ2h0bGVzcyBiaXJkIG5hdGl2ZSB0byB0aGUgc291dGhlcm4gaGVtaXNwaGVyZQ==', type: 'regular', par: 2 }, // Mon May 11
    { clue: 'Piano', sentence: 'bGFyZ2Uga2V5Ym9hcmQgaW5zdHJ1bWVudCB3aXRoIGJsYWNrIGFuZCB3aGl0ZSBrZXlz', type: 'regular', par: 1 }, // Tue May 12
    { clue: 'Volcano', sentence: 'bW91bnRhaW4gdGhhdCBlcnVwdHMgbW9sdGVuIGxhdmEgYW5kIGFzaA==', type: 'regular', par: 2 }, // Wed May 13
    { clue: 'Honey', sentence: 'c3dlZXQgZ29sZGVuIHN5cnVwIG1hZGUgYnkgYmVlcyBpbiBhIGhpdmU=', type: 'regular', par: 1 }, // Thu May 14
    { clue: 'Pizza!', sentence: 'ZG91Z2ggc2F1Y2UgY2hlZXNlIHRvcHBpbmdz', type: 'playful', par: 2 }, // Fri May 15
    { clue: 'Elevator?', sentence: 'Z29pbmcgdXAgZ29pbmcgZG93biBnb2luZyB1cCBnb2luZyBkb3du', type: 'playful', par: 3 }, // Sat May 16
    { clue: 'Pinto;', sentence: 'c3BlY2tsZWQgaG9yc2UgY29hdCBwYXR0ZXJuIHBvcHVsYXIgdmFyaWV0eSBvZiBiZWFu', type: 'sunday', par: 3 }, // Sun May 17

    // ── WEEK 3 (May 18) ─────────────────────────────────
    { clue: 'G. Washington', sentence: 'Zmlyc3QgcHJlc2lkZW50IG9mIHRoZSB1c2Egd2hvc2UgZmFjZSBncmFjZXMgdGhlIGRvbGxhciBiaWxs', type: 'regular', par: 2 }, // Mon May 18
    { clue: 'Sushi', sentence: 'amFwYW5lc2UgZGlzaCBvZiByaWNlIGFuZCByYXcgZmlzaCB3cmFwcGVkIGluIHNlYXdlZWQ=', type: 'regular', par: 2 }, // Tue May 19
    { clue: 'Oxygen', sentence: 'Y2hlbWljYWwgZWxlbWVudCBlc3NlbnRpYWwgZm9yIGh1bWFuIHJlc3BpcmF0aW9u', type: 'regular', par: 2 }, // Wed May 20
    { clue: 'The Simpsons', sentence: 'bG9uZ2VzdCBydW5uaW5nIGFuaW1hdGVkIHNob3cgc2V0IGluIHNwcmluZ2ZpZWxk', type: 'regular', par: 2 }, // Thu May 21
    { clue: 'T-Shirt!', sentence: 'c21hbGwgbWVkaXVtIGxhcmdlIHhsIGRvdWJsZSB4bCB0cmlwbGUgeGw=', type: 'playful', par: 3 }, // Fri May 22
    { clue: 'Sneeze?', sentence: 'aW52b2x1bnRhcnkgY2F0YWx5c3QgZm9yIHNheWluZyBibGVzcyB5b3U=', type: 'playful', par: 2 }, // Sat May 23
    { clue: 'Sage;', sentence: 'aGVyYiB1c2VkIGluIGNvb2tpbmcgd2lzZSBhbmQga25vd2xlZGdlYWJsZSBwZXJzb24=', type: 'sunday', par: 3 }, // Sun May 24

    // ── WEEK 4 (May 25) ─────────────────────────────────
    { clue: 'Nostalgia', sentence: 'Yml0dGVyc3dlZXQgbG9uZ2luZyBmb3IgYSB0aW1lIHRoYXQgaGFzIHBhc3NlZA==', type: 'regular', par: 3 }, // Mon May 25
    { clue: 'James Bond', sentence: 'c3B5IHdobyBwcmVmZXJzIGhpcyBtYXJ0aW5pIHNoYWtlbiBub3Qgc3RpcnJlZA==', type: 'regular', par: 2 }, // Tue May 26
    { clue: "Murphy's Law", sentence: 'YW55dGhpbmcgdGhhdCBjYW4gZ28gd3Jvbmcgd2lsbCBnbyB3cm9uZw==', type: 'regular', par: 1 }, // Wed May 27
    { clue: 'Sunglasses', sentence: 'dGludGVkIGxlbnNlcyB3b3JuIHRvIHNoaWVsZCBleWVzIGZyb20gYnJpZ2h0IGxpZ2h0', type: 'regular', par: 2 }, // Thu May 28
    { clue: 'Corn!', sentence: 'Y29iIHBvcHBlZCBjcmVhbWVkIGZsYWtlcyBjYXJhbWVs', type: 'playful', par: 2 }, // Fri May 29
    { clue: 'Slipper?', sentence: 'Z2xhc3MgZm9vdHdlYXIgdGhhdCB3YXMgbGVmdCBiZWhpbmQgYnkgY2luZGVyZWxsYQ==', type: 'playful', par: 1 }, // Sat May 30
    { clue: 'Mercury;', sentence: 'Y2xvc2VzdCBwbGFuZXQgdG8gdGhlIHN1biBsZWdlbmRhcnkgcXVlZW4gZnJvbnRtYW4=', type: 'sunday', par: 3 }, // Sun May 31

    // ── WEEK 5 (Jun 1) ─────────────────────────────────
    { clue: 'Marathon', sentence: 'bG9uZyBydW5uaW5nIHJhY2Ugb2YganVzdCBvdmVyIHR3ZW50eSBzaXggbWlsZXM=', type: 'regular', par: 2 }, // Mon Jun 1
    { clue: 'Adobe', sentence: 'c3VuIGRyaWVkIGJ1aWxkaW5nIG1hdGVyaWFsIG1hZGUgb2Ygd2V0IGVhcnRoIGFuZCBzdHJhdw==', type: 'regular', par: 3 }, // Tue Jun 2
    { clue: 'Umbrella', sentence: 'Zm9sZGluZyBjYW5vcHkgY2FycmllZCB0byBzdGF5IGRyeSBpbiB0aGUgcmFpbg==', type: 'regular', par: 2 }, // Wed Jun 3
    { clue: 'Titanic', sentence: 'bmluZXRpZXMgYmVzdCBwaWN0dXJlIG9zY2FyIHdpbm5lciBzdGFycmluZyBrYXRlIHdpbnNsZXQ=', type: 'regular', par: 2 }, // Thu Jun 4
    { clue: 'Monday?', sentence: 'c29jaWFsbHkgYWdyZWVkIHVwb24gd29yc3QgZGF5IG9mIHRoZSB3ZWVr', type: 'playful', par: 3 }, // Fri Jun 5
    { clue: 'Tuesday?', sentence: 'c29jaWFsbHkgYWdyZWVkIHVwb24gYmVzdCBkYXkgZm9yIHRhY29z', type: 'playful', par: 2 }, // Sat Jun 6
    { clue: 'Wednesday;', sentence: 'c29jaWFsbHkga25vd24gYXMgaHVtcCBkYXkgZGF1Z2h0ZXIgaW4gdGhlIGFkZGFtcyBmYW1pbHk=', type: 'sunday', par: 2 }, // Sun Jun 7

    // ── WEEK 6 (Jun 8) ─────────────────────────────────
    { clue: 'Thermos', sentence: 'aW5zdWxhdGVkIGZsYXNrIHRoYXQga2VlcHMgZHJpbmtzIGhvdCBvciBjb2xk', type: 'regular', par: 2 }, // Mon Jun 8
    { clue: 'Armpit', sentence: 'cGxhY2UgdG8gYXBwbHkgZGVvZG9yYW50IG9yIGFudGlwZXJzcGlyYW50', type: 'regular', par: 2 }, // Tue Jun 9
    { clue: 'Decaf', sentence: 'Y29mZmVlIHNob3Agb3B0aW9uIGZvciB0aG9zZSBhdm9pZGluZyBjYWZmZWluZQ==', type: 'regular', par: 1 }, // Wed Jun 10
    { clue: 'Club Soda', sentence: 'Y2FyYm9uYXRlZCB3YXRlciBjb250YWluaW5nIGFkZGVkIG1pbmVyYWwgc2FsdHM=', type: 'regular', par: 2 }, // Thu Jun 11
    { clue: 'Bagel!', sentence: 'cGxhaW4gc2VzYW1lIGV2ZXJ5dGhpbmcgY2lubmFtb24gcmFpc2luIHB1bXBlcm5pY2tlbCBvbmlvbg==', type: 'playful', par: 2 }, // Fri Jun 12
    { clue: 'Sliced Bread?', sentence: 'aHVtYmxlIGxvYWYgdGhhdCBiZWNhbWUgdGhlIGJlbmNobWFyayBvZiBhbGwgZ3JlYXQgaWRlYXM=', type: 'playful', par: 3 }, // Sat Jun 13
    { clue: 'Ace;', sentence: 'dW50b3VjaGVkIHRlbm5pcyBzZXJ2ZSBoaWdoIGNhcmQgaW4gYSByb3lhbCBmbHVzaA==', type: 'sunday', par: 2 }, // Sun Jun 14

    // ── WEEK 7 (Jun 15) ─────────────────────────────────
    { clue: 'Escalator', sentence: 'bW92aW5nIHN0YWlyY2FzZSB0eXBpY2FsbHkgZm91bmQgaW4gbWFsbHMgYW5kIGFpcnBvcnRz', type: 'regular', par: 2 }, // Mon Jun 15
    { clue: 'Spaghetti', sentence: 'bG9uZyBwYXN0YSB0cmFkaXRpb25hbGx5IHNlcnZlZCB3aXRoIG1lYXRiYWxscw==', type: 'regular', par: 1 }, // Tue Jun 16
    { clue: 'Flamingo', sentence: 'dGFsbCBwaW5rIGJpcmQga25vd24gZm9yIHN0YW5kaW5nIG9uIG9uZSBsZWc=', type: 'regular', par: 2 }, // Wed Jun 17
    { clue: 'Hourglass', sentence: 'ZGV2aWNlIHRoYXQgbWVhc3VyZXMgdGltZSB1c2luZyBmYWxsaW5nIHNhbmQ=', type: 'regular', par: 2 }, // Thu Jun 18
    { clue: 'Chess!', sentence: 'cGF3biByb29rIGtuaWdodCBiaXNob3AgcXVlZW4ga2luZw==', type: 'playful', par: 1 }, // Fri Jun 19
    { clue: 'Sock?', sentence: 'Y2xvdGhpbmcgaXRlbSBtb3N0IGxpa2VseSB0byBkaXNhcHBlYXIgZHVyaW5nIGxhdW5kcnk=', type: 'playful', par: 3 }, // Sat Jun 20
    { clue: 'Guinness;', sentence: 'ZmFtb3VzIGlyaXNoIHN0b3V0IGFubnVhbCBib29rIG9mIHdvcmxkIHJlY29yZHM=', type: 'sunday', par: 2 }, // Sun Jun 21

    // ── WEEK 8 (Jun 22) ─────────────────────────────────
    { clue: 'Dictionary', sentence: 'YWxwaGFiZXRpY2FsIHJlZmVyZW5jZSBib29rIG9mIHdvcmQgZGVmaW5pdGlvbnM=', type: 'regular', par: 2 }, // Mon Jun 22
    { clue: 'Calendar', sentence: 'dG9vbCB1c2VkIHRvIG9yZ2FuaXplIGRheXMgbW9udGhzIGFuZCB5ZWFycw==', type: 'regular', par: 3 }, // Tue Jun 23
    { clue: 'Boomerang', sentence: 'Y3VydmVkIHRocm93aW5nIHRvb2wgdGhhdCByZXR1cm5zIHRvIGl0cyB0aHJvd2Vy', type: 'regular', par: 2 }, // Wed Jun 24
    { clue: 'Chameleon', sentence: 'cmVwdGlsZSBmYW1vdXMgZm9yIGNoYW5naW5nIHRoZSBjb2xvciBvZiBpdHMgc2tpbg==', type: 'regular', par: 1 }, // Thu Jun 25
    { clue: 'Snooze!', sentence: 'bmluZSBtb3JlIG1pbnV0ZXMgb2Ygc2xlZXAgcGxlYXNl', type: 'playful', par: 2 }, // Fri Jun 26
    { clue: 'Match?', sentence: 'dGhlIHJlc3VsdCBvZiB0d28gcGVvcGxlIHN3aXBpbmcgcmlnaHQ=', type: 'playful', par: 3 }, // Sat Jun 27
    { clue: 'Bark;', sentence: 'b3V0ZXIgbGF5ZXIgb2YgYSB0cmVlIHNvdW5kIGEgZG9nIG1ha2Vz', type: 'sunday', par: 2 }, // Sun Jun 28

    // ── WEEK 9 (Jun 29) ─────────────────────────────────
    { clue: 'Igloo', sentence: 'ZG9tZSBzaGFwZWQgc2hlbHRlciBidWlsdCBmcm9tIGJsb2NrcyBvZiBjb21wYWN0ZWQgc25vdw==', type: 'regular', par: 2 }, // Mon Jun 29
    { clue: 'Passport', sentence: 'Z292ZXJubWVudCBpc3N1ZWQgZG9jdW1lbnQgcmVxdWlyZWQgdG8gdHJhdmVsIGludGVybmF0aW9uYWxseQ==', type: 'regular', par: 2 }, // Tue Jun 30
    { clue: 'Porcupine', sentence: 'c2xvdyBtb3Zpbmcgcm9kZW50IGNvdmVyZWQgaW4gc2hhcnAgZGVmZW5zaXZlIHF1aWxscw==', type: 'regular', par: 3 }, // Wed Jul 1
    { clue: 'Metronome', sentence: 'bWVjaGFuaWNhbCBkZXZpY2UgbXVzaWNpYW5zIHVzZSB0byBrZWVwIGEgc3RlYWR5IHRlbXBv', type: 'regular', par: 2 }, // Thu Jul 2
    { clue: 'Smore!', sentence: 'bWFyc2htYWxsb3cgc3RpY2sgZmlyZSBncmFoYW0gY3JhY2tlciBjaG9jb2xhdGU=', type: 'playful', par: 1 }, // Fri Jul 3
    { clue: 'Independence Day!', sentence: 'YWxpZW4gaW52YXNpb24gYmxvY2tidXN0ZXIgc3RhcnJpbmcgd2lsbCBzbWl0aCBhbmQgamVmZiBnb2xkYmx1bQ==', type: 'playful', par: 2 }, // Sat Jul 4
    { clue: 'Marco Polo;', sentence: 'Z2FtZSBwbGF5ZWQgaW4gYW5kIG91dCBvZiB0aGUgcG9vbCBmYW1vdXMgaXRhbGlhbiBleHBsb3Jlcg==', type: 'sunday', par: 3 }, // Sun Jul 5

    // ── WEEK 10 (Jul 6) ─────────────────────────────────
    { clue: 'Thermostat', sentence: 'd2FsbCBtb3VudGVkIGRldmljZSB1c2VkIHRvIHJlZ3VsYXRlIHJvb20gdGVtcGVyYXR1cmU=', type: 'regular', par: 2 }, // Mon Jul 6
    { clue: 'Polaroid', sentence: 'Y2FtZXJhIHRoYXQgcHJpbnRzIHBob3RvcyBpbnN0YW50bHkgYWZ0ZXIgeW91IHRha2UgdGhlbQ==', type: 'regular', par: 1 }, // Tue Jul 7
    { clue: 'Periscope', sentence: 'b3B0aWNhbCBkZXZpY2UgdXNlZCBieSBzdWJtYXJpbmVzIHRvIHNlZSBhYm92ZSB0aGUgd2F0ZXI=', type: 'regular', par: 2 }, // Wed Jul 8
    { clue: 'Lava Lamp', sentence: 'ZGVjb3JhdGl2ZSBsaWdodCB3aXRoIGJsb2JzIG9mIHdheCB0aGF0IGViYiBhbmQgZmxvdw==', type: 'regular', par: 2 }, // Thu Jul 9
    { clue: 'Reindeer!', sentence: 'ZGFzaGVyIGRhbmNlciBwcmFuY2VyIHZpeGVuIHJ1ZG9scGggY29tZXQgY3VwaWQgZG9ubmVyIGJsaXR6ZW4=', type: 'playful', par: 2 }, // Fri Jul 10
    { clue: "3.14's?", sentence: 'cHVtcGtpbiBwZWFjaCBhcHBsZSBjaGVycnkga2V5IGxpbWUgYmx1ZWJlcnJ5IGNvY29udXQgY3JlYW0gcGVjYW4=', type: 'playful', par: 2 }, // Sat Jul 11
    { clue: 'Lemon;', sentence: 'c291ciB5ZWxsb3cgY2l0cnVzIGZydWl0IGRlZmVjdGl2ZSBjYXIgc29sZCB0byBhbiB1bnN1c3BlY3RpbmcgYnV5ZXI=', type: 'sunday', par: 3 }, // Sun Jul 12

    // ── WEEK 11 (Jul 13) ─────────────────────────────────
    { clue: 'Tupperware', sentence: 'YWlydGlnaHQgcGxhc3RpYyBjb250YWluZXIgdXNlZCB0byBzdG9yZSBsZWZ0b3ZlcnMgaW4gdGhlIGZyaWRnZQ==', type: 'regular', par: 2 }, // Mon Jul 13
    { clue: 'Bonsai', sentence: 'bWluaWF0dXJlIHRyZWUgY2FyZWZ1bGx5IHNoYXBlZCBieSB5ZWFycyBvZiBwYXRpZW50IHBydW5pbmc=', type: 'regular', par: 2 }, // Tue Jul 14
    { clue: 'Confetti', sentence: 'c21hbGwgY29sb3JmdWwgcGllY2VzIG9mIHBhcGVyIHRocm93biBhdCBjZWxlYnJhdGlvbnMgYW5kIHBhcmFkZXM=', type: 'regular', par: 2 }, // Wed Jul 15
    { clue: 'Whirlpool', sentence: 'cmFwaWRseSBzcGlubmluZyBjaXJjdWxhciBjdXJyZW50IG9mIHdhdGVy', type: 'regular', par: 1 }, // Thu Jul 16
    { clue: 'Bookworm?', sentence: 'cGVyc29uIHdobyByZWFkcyBvYnNlc3NpdmVseSBkZXNwaXRlIGhhdmluZyBubyByZXNlbWJsYW5jZSB0byBhIHdvcm0=', type: 'playful', par: 2 }, // Fri Jul 17
    { clue: 'Password!', sentence: 'bXVzdCBjb250YWluIHVwcGVyY2FzZSBsb3dlcmNhc2UgbnVtYmVyIGFuZCBvbmUgc3BlY2lhbCBjaGFyYWN0ZXI=', type: 'playful', par: 3 }, // Sat Jul 18
    { clue: 'Pitcher;', sentence: 'bGFyZ2UgY29udGFpbmVyIHVzZWQgZm9yIHBvdXJpbmcgbGlxdWlkcyBwbGF5ZXIgd2hvIHRocm93cyB0aGUgYmFzZWJhbGw=', type: 'sunday', par: 2 }, // Sun Jul 19

    // ── WEEK 12 (Jul 20) ─────────────────────────────────
    { clue: 'Déjà Vu', sentence: 'ZWVyaWUgZmVlbGluZyB0aGF0IHlvdSBoYXZlIGxpdmVkIHRocm91Z2ggdGhpcyBleGFjdCBtb21lbnQgYmVmb3Jl', type: 'regular', par: 2 }, // Mon Jul 20
    { clue: 'Icicle', sentence: 'aGFuZ2luZyBzcGlrZSBvZiBpY2UgdGhhdCBmb3JtcyB3aGVuIGRyaXBwaW5nIHdhdGVyIGZyZWV6ZXM=', type: 'regular', par: 2 }, // Tue Jul 21
    { clue: 'Treehouse', sentence: 'c21hbGwgd29vZGVuIHN0cnVjdHVyZSBidWlsdCB1cCBpbiB0aGUgYnJhbmNoZXMgb2YgYSB0cmVl', type: 'regular', par: 2 }, // Wed Jul 22
    { clue: 'Crossword', sentence: 'd29yZCBwdXp6bGUgd2hlcmUgYW5zd2VycyBhcmUgZmlsbGVkIGludG8gYSBncmlkIG9mIG51bWJlcmVkIHNxdWFyZXM=', type: 'regular', par: 2 }, // Thu Jul 23
    { clue: 'Sandcastle?', sentence: 'YXJjaGl0ZWN0dXJhbCBtYXN0ZXJwaWVjZSB0aGF0IHdpbGwgbm90IHN1cnZpdmUgaGlnaCB0aWRl', type: 'playful', par: 2 }, // Fri Jul 24
    { clue: 'Butterfingers?', sentence: 'cGVyc29uIHdobyBkcm9wcyBldmVyeXRoaW5nIGRlc3BpdGUgaGF2aW5nIHBlcmZlY3RseSBub3JtYWwgaGFuZHM=', type: 'playful', par: 3 }, // Sat Jul 25
    { clue: 'Dash;', sentence: 'c2hvcnQgZmFzdCBzcHJpbnQgcHVuY3R1YXRpb24gbWFyayB1c2VkIHRvIGJyZWFrIHVwIGEgc2VudGVuY2U=', type: 'sunday', par: 2 }, // Sun Jul 26

    // ── WEEK 13 (Jul 27) ─────────────────────────────────
    { clue: 'Pinball', sentence: 'YXJjYWRlIGdhbWUgd2hlcmUgYSBtZXRhbCBiYWxsIHJpY29jaGV0cyBiZXR3ZWVuIGJ1bXBlcnMgYW5kIGZsaXBwZXJz', type: 'regular', par: 2 }, // Mon Jul 27
    { clue: 'Sundial', sentence: 'YW5jaWVudCB0aW1la2VlcGluZyBkZXZpY2UgdGhhdCB1c2VzIHRoZSBzaGFkb3cgY2FzdCBieSB0aGUgc3Vu', type: 'regular', par: 2 }, // Tue Jul 28
    { clue: 'Trapdoor', sentence: 'aGlkZGVuIGhpbmdlZCBwYW5lbCBpbiBhIGZsb29yIG9yIHN0YWdlIHRoYXQgb3BlbnMgdG8gYSBzcGFjZSBiZWxvdw==', type: 'regular', par: 2 }, // Wed Jul 29
    { clue: 'Origami', sentence: 'amFwYW5lc2UgYXJ0IG9mIGZvbGRpbmcgYSBzaW5nbGUgc2hlZXQgb2YgcGFwZXIgaW50byBkZWNvcmF0aXZlIHNoYXBlcw==', type: 'regular', par: 1 }, // Thu Jul 30
    { clue: 'Daylight Savings?', sentence: 'dHdpY2UgeWVhcmx5IHJlbWluZGVyIHRoYXQgdGltZSBpcyBhIGh1bWFuIGNvbnN0cnVjdA==', type: 'playful', par: 2 }, // Fri Jul 31
    { clue: 'Cheese!', sentence: 'cHJvdm9sb25lIGJyaWUgcGFybWVzYW4gY2hlZGRhciBnb3VkYSBtb3p6YXJlbGxhIGdvcmdvbnpvbGEgc3dpc3M=', type: 'playful', par: 3 }, // Sat Aug 1
    { clue: 'Pool;', sentence: 'cGxhY2Ugd2hlcmUgcGVvcGxlIHN3aW0gc2hhcmVkIGNvbGxlY3Rpb24gb2YgbW9uZXkgb3IgcmVzb3VyY2Vz', type: 'sunday', par: 2 }, // Sun Aug 2

    // ── WEEK 14 (Aug 3) ─────────────────────────────────
    { clue: 'Lullaby', sentence: 'c29mdCBnZW50bGUgc29uZyBzdW5nIHRvIGVhc2UgYSBjaGlsZCB0byBzbGVlcA==', type: 'regular', par: 1 }, // Mon Aug 3
    { clue: 'Hammock', sentence: 'c3VzcGVuZGVkIGJlZCBvZiB3b3ZlbiBmYWJyaWMgb3Igcm9wZSBzdHJ1bmcgYmV0d2VlbiB0d28gdHJlZXM=', type: 'regular', par: 2 }, // Tue Aug 4
    { clue: 'Loch Ness', sentence: 'ZGVlcCBzY290dGlzaCBsYWtlIHNhaWQgdG8gYmUgaG9tZSB0byBhIGxlZ2VuZGFyeSBzZWEgbW9uc3Rlcg==', type: 'regular', par: 2 }, // Wed Aug 5
    { clue: 'Scarecrow', sentence: 'aHVtYW5vaWQgZmlndXJlIHBsYWNlZCBpbiBmaWVsZHMgdG8gZnJpZ2h0ZW4gYmlyZHMgYXdheSBmcm9tIGNyb3Bz', type: 'regular', par: 2 }, // Thu Aug 6
    { clue: 'Goat?', sentence: 'YWNyb255bSB1c2VkIHRvIGRlc2NyaWJlIHRoZSBncmVhdGVzdCBvZiBhbGwgdGltZSB3aXRoaW4gYSBjYXRlZ29yeQ==', type: 'playful', par: 2 }, // Fri Aug 7
    { clue: 'Sewer?', sentence: 'YXJ0aXNhbiB3aG8gdXNlcyBuZWVkbGVzIGFuZCB0aHJlYWQgdG8gY29uc3RydWN0IGFuZCByZXBhaXIgYXBwYXJlbA==', type: 'playful', par: 3 }, // Sat Aug 8
    { clue: 'Spare;', sentence: 'ZXh0cmEgb25lIGtlcHQgaW4gcmVzZXJ2ZSBrbm9ja2luZyBkb3duIGFsbCByZW1haW5pbmcgYm93bGluZyBwaW5z', type: 'sunday', par: 2 }, // Sun Aug 9

    // ── WEEK # (####) ── TEMPLATE ───────────────────────
    // { clue: 'mmmmm',      sentence: 'bW1tbW0=',              type: 'regular', par: 2 }, // Mon
    // { clue: 'ttttt',      sentence: 'dHR0dHQ=',              type: 'regular', par: 2 }, // Tue
    // { clue: 'wwwww',      sentence: 'd3d3d3c=',              type: 'regular', par: 2 }, // Wed
    // { clue: 'ttttt',      sentence: 'dHR0dHQ=',              type: 'regular', par: 2 }, // Thu
    // { clue: 'fffff!',     sentence: 'ZmZmZmY=',              type: 'playful', par: 2 }, // Fri
    // { clue: 'sssss?',     sentence: 'c3Nzc3M=',              type: 'playful', par: 2 }, // Sat
    // { clue: 'sssss;',     sentence: 'c3Nzc3M=',              type: 'sunday',  par: 2 }, // Sun
    // User Submitted Format:
    // { clue: 'Piano', sentence: 'BASE64...', type: 'regular', par: 2, credit: 'Josh' }

];