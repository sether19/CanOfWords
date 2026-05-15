// Can of Words — Puzzle Data v7.1
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

    // ── WEEK 2 (May 11) ────────────────────────────────
    { clue: 'Penguin', sentence: 'ZmxpZ2h0bGVzcyBiaXJkIG5hdGl2ZSB0byB0aGUgc291dGhlcm4gaGVtaXNwaGVyZQ==', type: 'regular', par: 2 }, // Mon May 11
    { clue: 'Piano', sentence: 'bGFyZ2Uga2V5Ym9hcmQgaW5zdHJ1bWVudCB3aXRoIGJsYWNrIGFuZCB3aGl0ZSBrZXlz', type: 'regular', par: 1 }, // Tue May 12
    { clue: 'Volcano', sentence: 'bW91bnRhaW4gdGhhdCBlcnVwdHMgbW9sdGVuIGxhdmEgYW5kIGFzaA==', type: 'regular', par: 2 }, // Wed May 13
    { clue: 'Honey', sentence: 'c3dlZXQgZ29sZGVuIHN5cnVwIG1hZGUgYnkgYmVlcyBpbiBhIGhpdmU=', type: 'regular', par: 1 }, // Thu May 14
    { clue: 'Pizza!', sentence: 'ZG91Z2ggc2F1Y2UgY2hlZXNlIHRvcHBpbmdz', type: 'playful', par: 2 }, // Fri May 15
    { clue: 'Elevator?', sentence: 'Z29pbmcgdXAgZ29pbmcgZG93biBnb2luZyB1cCBnb2luZyBkb3du', type: 'playful', par: 2 }, // Sat May 16
    { clue: 'Pinto;', sentence: 'c3BlY2tsZWQgaG9yc2UgY29hdCBwYXR0ZXJuIHBvcHVsYXIgdmFyaWV0eSBvZiBiZWFu', type: 'sunday', par: 3 }, // Sun May 17

    // ── WEEK 3 (May 18) ────────────────────────────────
    { clue: 'G. Washington', sentence: 'Zmlyc3QgcHJlc2lkZW50IG9mIHRoZSB1c2Egd2hvc2UgZmFjZSBncmFjZXMgdGhlIGRvbGxhciBiaWxs', type: 'regular', par: 2 }, // Mon May 18
    { clue: 'Sushi', sentence: 'amFwYW5lc2UgZGlzaCBvZiByaWNlIGFuZCByYXcgZmlzaCB3cmFwcGVkIGluIHNlYXdlZWQ=', type: 'regular', par: 3 }, // Tue May 19
    { clue: 'Oxygen', sentence: 'Y2hlbWljYWwgZWxlbWVudCBlc3NlbnRpYWwgZm9yIGh1bWFuIHJlc3BpcmF0aW9u', type: 'regular', par: 2 }, // Wed May 20
    { clue: 'The Simpsons', sentence: 'bG9uZ2VzdCBydW5uaW5nIGFuaW1hdGVkIHNob3cgc2V0IGluIHNwcmluZ2ZpZWxk', type: 'regular', par: 2 }, // Thu May 21
    { clue: 'T-Shirt!', sentence: 'c21hbGwgbWVkaXVtIGxhcmdlIHhsIGRvdWJsZSB4bCB0cmlwbGUgeGw=', type: 'playful', par: 3 }, // Fri May 22
    { clue: 'Sneeze?', sentence: 'Y2F0YWx5c3QgZm9yIHNheWluZyBibGVzcyB5b3U=', type: 'playful', par: 2 }, // Sat May 23
    { clue: 'Sage;', sentence: 'aGVyYiB1c2VkIGluIGNvb2tpbmcgd2lzZSBhbmQga25vd2xlZGdlYWJsZSBwZXJzb24=', type: 'sunday', par: 3 }, // Sun May 24

    // ── WEEK 4 (May 25) ────────────────────────────────
    { clue: 'Nostalgia', sentence: 'Yml0dGVyc3dlZXQgbG9uZ2luZyBmb3IgYSB0aW1lIHRoYXQgaGFzIHBhc3NlZA==', type: 'regular', par: 3 }, // Mon May 25
    { clue: 'James Bond', sentence: 'c3B5IHdobyBwcmVmZXJzIGhpcyBtYXJ0aW5pIHNoYWtlbiBub3Qgc3RpcnJlZA==', type: 'regular', par: 3 }, // Tue May 26
    { clue: 'Slipper', sentence: 'Z2xhc3Mgc2hvZSBsZWZ0IGJlaGluZCBieSBjaW5kZXJlbGxh', type: 'regular', par: 1 }, // Wed May 27
    { clue: 'Sunglasses', sentence: 'dGludGVkIGxlbnNlcyB3b3JuIHRvIHNoaWVsZCBleWVzIGZyb20gYnJpZ2h0IGxpZ2h0', type: 'regular', par: 3 }, // Thu May 28
    { clue: 'Corn!', sentence: 'Y29iIHBvcHBlZCBjcmVhbWVkIGZsYWtlcyBjYXJhbWVs', type: 'playful', par: 2 }, // Fri May 29
    { clue: "Murphy's Law?", sentence: 'YW55dGhpbmcgdGhhdCBjYW4gZ28gd3Jvbmcgd2lsbCBnbyB3cm9uZw==', type: 'playful', par: 1 }, // Sat May 30
    { clue: 'Mercury;', sentence: 'Y2xvc2VzdCBwbGFuZXQgdG8gdGhlIHN1biBsZWdlbmRhcnkgcXVlZW4gZnJvbnRtYW4=', type: 'sunday', par: 3 }, // Sun May 31

    // ── WEEK 5 (Jun 1) ─────────────────────────────────
    { clue: 'Marathon', sentence: 'bG9uZyBydW5uaW5nIHJhY2Ugb2YganVzdCBvdmVyIHR3ZW50eSBzaXggbWlsZXM=', type: 'regular', par: 3 }, // Mon Jun 1
    { clue: 'Mount Everest', sentence: 'dGFsbGVzdCBtb3VudGFpbiBwZWFrIG9uIHBsYW5ldCBlYXJ0aA==', type: 'regular', par: 1 }, // Tue Jun 2
    { clue: 'Umbrella', sentence: 'Zm9sZGluZyBjYW5vcHkgY2FycmllZCB0byBzdGF5IGRyeSBpbiB0aGUgcmFpbg==', type: 'regular', par: 2 }, // Wed Jun 3
    { clue: 'Titanic', sentence: 'bmluZXRpZXMgYmVzdCBwaWN0dXJlIG9zY2FyIHdpbm5lcg==', type: 'regular', par: 2 }, // Thu Jun 4
    { clue: 'Monday?', sentence: 'd2lkZWx5IGFncmVlZCB1cG9uIHdvcnN0IGRheSBvZiB0aGUgd2Vlaw==', type: 'playful', par: 3 }, // Fri Jun 5
    { clue: 'Tuesday?', sentence: 'd2lkZWx5IGFncmVlZCB1cG9uIGJlc3QgZGF5IGZvciB0YWNvcw==', type: 'playful', par: 3 }, // Sat Jun 6
    { clue: 'Wednesday;', sentence: 'd2lkZWx5IGtub3duIGFzIGh1bXAgZGF5IGRhdWdodGVyIGluIHRoZSBhZGRhbXMgZmFtaWx5', type: 'sunday', par: 4 }, // Sun Jun 7

    // ── WEEK 6 (Jun 8) ─────────────────────────────────
    { clue: 'Thermos', sentence: 'aW5zdWxhdGVkIGZsYXNrIHRoYXQga2VlcHMgZHJpbmtzIGhvdCBvciBjb2xk', type: 'regular', par: 2 }, // Mon Jun 8
    { clue: 'Armpit', sentence: 'cGxhY2UgdG8gYXBwbHkgZGVvZG9yYW50IG9yIGFudGlwZXJzcGlyYW50', type: 'regular', par: 2 }, // Tue Jun 9
    { clue: 'Decaf', sentence: 'b3JkZXIgZGV0YWlsIGZvciBjdXN0b21lcnMgYXQgc3RhcmJ1Y2tz', type: 'regular', par: 3 }, // Wed Jun 10
    { clue: 'Seltzer', sentence: 'd2F0ZXIgY2FyYm9uYXRlZCB3aXRoIGNhcmJvbiBkaW94aWRl', type: 'regular', par: 2 }, // Thu Jun 11
    { clue: 'Bagel!', sentence: 'cGxhaW4gc2VzYW1lIGV2ZXJ5dGhpbmcgcmFpc2luIHB1bXBlcm5pY2tlbA==', type: 'playful', par: 3 }, // Fri Jun 12
    { clue: 'Bread?', sentence: 'Z3JlYXRlc3QgdGhpbmcgc2luY2UgaXRzZWxmIGFjY29yZGluZyB0byB0aGUgc2F5aW5n', type: 'playful', par: 3 }, // Sat Jun 13
    { clue: 'Ace;', sentence: 'dW50b3VjaGVkIHRlbm5pcyBzZXJ2ZSBoaWdoIGNhcmQgaW4gYSByb3lhbCBmbHVzaA==', type: 'sunday', par: 2 }, // Sun Jun 14

    // ── WEEK 7 (Jun 15) ────────────────────────────────
    { clue: 'Escalator', sentence: 'bW92aW5nIHN0YWlyY2FzZSBmb3VuZCBpbiBtYWxscyBhbmQgYWlycG9ydHM=', type: 'regular', par: 2 }, // Mon Jun 15
    { clue: 'Spaghetti', sentence: 'bG9uZyBwYXN0YSB0cmFkaXRpb25hbGx5IHNlcnZlZCB3aXRoIG1lYXRiYWxscw==', type: 'regular', par: 1 }, // Tue Jun 16
    { clue: 'Flamingo', sentence: 'dGFsbCBwaW5rIGJpcmQga25vd24gZm9yIHN0YW5kaW5nIG9uIG9uZSBsZWc=', type: 'regular', par: 2 }, // Wed Jun 17
    { clue: 'Hourglass', sentence: 'ZGV2aWNlIHRoYXQgbWVhc3VyZXMgdGltZSB1c2luZyBmYWxsaW5nIHNhbmQ=', type: 'regular', par: 2 }, // Thu Jun 18
    { clue: 'Chess!', sentence: 'cGF3biByb29rIGtuaWdodCBiaXNob3AgcXVlZW4ga2luZw==', type: 'playful', par: 1 }, // Fri Jun 19
    { clue: 'Socks?', sentence: 'bGF1bmRyeSBpdGVtIG1vc3QgbGlrZWx5IHRvIGRpc2FwcGVhcg==', type: 'playful', par: 2 }, // Sat Jun 20
    { clue: 'Guinness;', sentence: 'ZmFtb3VzIGlyaXNoIHN0b3V0IGFubnVhbCBib29rIG9mIHdvcmxkIHJlY29yZHM=', type: 'sunday', par: 2 }, // Sun Jun 21

    // ── WEEK 8 (Jun 22) ────────────────────────────────
    { clue: 'Dictionary', sentence: 'YWxwaGFiZXRpY2FsIHJlZmVyZW5jZSBib29rIG9mIHdvcmQgZGVmaW5pdGlvbnM=', type: 'regular', par: 2 }, // Mon Jun 22
    { clue: 'Calendar', sentence: 'dG9vbCB1c2VkIHRvIG9yZ2FuaXplIGRheXMgbW9udGhzIGFuZCB5ZWFycw==', type: 'regular', par: 3 }, // Tue Jun 23
    { clue: 'Boomerang', sentence: 'Y3VydmVkIHRocm93aW5nIHRvb2wgdGhhdCByZXR1cm5zIHRvIGl0cyB0aHJvd2Vy', type: 'regular', par: 2 }, // Wed Jun 24
    { clue: 'Chameleon', sentence: 'cmVwdGlsZSBmYW1vdXMgZm9yIGNoYW5naW5nIHRoZSBjb2xvciBvZiBpdHMgc2tpbg==', type: 'regular', par: 1 }, // Thu Jun 25
    { clue: 'Snooze!', sentence: 'bmluZSBtb3JlIG1pbnV0ZXMgb2Ygc2xlZXAgcGxlYXNl', type: 'playful', par: 2 }, // Fri Jun 26
    { clue: 'Match?', sentence: 'dGhlIHJlc3VsdCBvZiB0d28gcGVvcGxlIHN3aXBpbmcgcmlnaHQ=', type: 'playful', par: 3 }, // Sat Jun 27
    { clue: 'Bark;', sentence: 'b3V0ZXIgbGF5ZXIgb2YgYSB0cmVlIHNvdW5kIGEgZG9nIG1ha2Vz', type: 'sunday', par: 2 }, // Sun Jun 28

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
