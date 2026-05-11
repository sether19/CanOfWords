// Can of Words — Puzzle Data v5.5
// To update puzzles: edit this file, rename to puzzles-v5.6.js (or next version),
// then update the <script src="..."> reference in index.html to match.

const PUZZLE_START_DATE = '2026-05-05';
const PUZZLES = [

  // ── WEEK 1 (May 5) ─────────────────────────────────
  { clue: 'Shakespeare',   sentence: 'ZW5nbGlzaCBwbGF5d3JpZ2h0IHdobyB3cm90ZSBoYW1sZXQgYW5kIG1hY2JldGg=',        type: 'regular' }, // Tue May 5
  { clue: 'Coffee',        sentence: 'aG90IG1vcm5pbmcgZHJpbmsgYnJld2VkIGZyb20gcm9hc3RlZCBiZWFucw==',            type: 'regular' }, // Wed May 6
  { clue: 'Avocado',       sentence: 'Y3JlYW15IGZydWl0IHJlcXVpcmVkIHRvIG1ha2UgZ3VhY2Ftb2xl',                type: 'regular' }, // Thu May 7
  { clue: 'Calm?',         sentence: 'a25vd24gdG8gY29tZSBiZWZvcmUgdGhlIHN0b3Jt',                         type: 'playful' }, // Fri May 8
  { clue: 'Tofu!',         sentence: 'c2lsa2VuIHNvZnQgZmlybSBleHRyYSBmaXJt',                            type: 'playful' }, // Sat May 9
  { clue: 'Buffalo;',      sentence: 'bGFyZ2UgYW1lcmljYW4gYmlzb24gY2l0eSBpbiBuZXcgeW9yayBzdGF0ZQ==',            type: 'sunday'  }, // Sun May 10

  // ── WEEK 2 (May 11) ────────────────────────────────
  { clue: 'Penguin',       sentence: 'ZmxpZ2h0bGVzcyBiaXJkIG5hdGl2ZSB0byB0aGUgc291dGhlcm4gaGVtaXNwaGVyZQ==',              type: 'regular' }, // Mon May 11
  { clue: 'Piano',         sentence: 'bGFyZ2Uga2V5Ym9hcmQgaW5zdHJ1bWVudCB3aXRoIGJsYWNrIGFuZCB3aGl0ZSBrZXlz',    type: 'regular' }, // Tue May 12
  { clue: 'Volcano',       sentence: 'bW91bnRhaW4gdGhhdCBlcnVwdHMgbW9sdGVuIGxhdmEgYW5kIGFzaA==',               type: 'regular' }, // Wed May 13
  { clue: 'Honey',         sentence: 'c3dlZXQgZ29sZGVuIHN5cnVwIG1hZGUgYnkgYmVlcyBpbiBhIGhpdmU=',             type: 'regular' }, // Thu May 14
  { clue: 'Pizza!',        sentence: 'ZG91Z2ggc2F1Y2UgY2hlZXNlIHRvcHBpbmdz',                            type: 'playful' }, // Fri May 15
  { clue: 'Elevator?',     sentence: 'Z29pbmcgdXAgZ29pbmcgZG93biBnb2luZyB1cCBnb2luZyBkb3du',               type: 'playful' }, // Sat May 16
  { clue: 'Pinto;',        sentence: 'c3BlY2tsZWQgaG9yc2UgY29hdCBwYXR0ZXJuIHBvcHVsYXIgdmFyaWV0eSBvZiBiZWFu',   type: 'sunday'  }, // Sun May 17

  // ── WEEK 3 (May 18) ────────────────────────────────
  { clue: 'G. Washington', sentence: 'Zmlyc3QgcHJlc2lkZW50IG9mIHRoZSBVU0E=',                                        type: 'regular' }, // Mon May 18
  { clue: 'Sushi',         sentence: 'amFwYW5lc2UgZGlzaCBvZiByaWNlIGFuZCByYXcgZmlzaCB3cmFwcGVkIGluIHNlYXdlZWQ=',             type: 'regular' }, // Tue May 19
  { clue: 'Titanic',       sentence: 'dW5zaW5rYWJsZSBzaGlwIHRoYXQgc2FuayBvbiBpdHMgbWFpZGVuIHZveWFnZQ==',                    type: 'regular' }, // Wed May 20
  { clue: 'The Simpsons',  sentence: 'bG9uZ2VzdCBydW5uaW5nIGFuaW1hdGVkIHNpdGNvbSBzZXQgaW4gc3ByaW5nZmllbGQ=',                type: 'regular' }, // Thu May 21
  { clue: 'T-Shirt!',      sentence: 'c21hbGwgbWVkaXVtIGxhcmdlIFhMIFhYTCBYWFhM',                                   type: 'playful' }, // Fri May 22
  { clue: 'Sneeze?',       sentence: 'Y2F0YWx5c3QgZm9yIHNheWluZyBibGVzcyB5b3U=',                                     type: 'playful' }, // Sat May 23
  { clue: 'Sage;',         sentence: 'aGVyYiB1c2VkIGluIGNvb2tpbmcgd2lzZSBhbmQga25vd2xlZGdlYWJsZSBwZXJzb24=',                type: 'sunday'  }, // Sun May 24

  // ── WEEK 4 (May 25) ────────────────────────────────
  { clue: 'Nostalgia',     sentence: 'Yml0dGVyc3dlZXQgbG9uZ2luZyBmb3IgYSB0aW1lIHRoYXQgaGFzIHBhc3NlZA==',                    type: 'regular' }, // Mon May 25
  { clue: 'James Bond',    sentence: 'YnJpdGlzaCBzcHkgd2hvIHByZWZlcnMgaGlzIG1hcnRpbmkgc2hha2VuIG5vdCBzdGlycmVk',            type: 'regular' }, // Tue May 26
  { clue: 'Slipper',       sentence: 'Z2xhc3Mgc2hvZSBsZWZ0IGJlaGluZCBieSBjaW5kZXJlbGxh',                              type: 'regular' }, // Wed May 27
  { clue: 'Sunglasses',    sentence: 'dGludGVkIGxlbnNlcyB3b3JuIHRvIHNoaWVsZCBleWVzIGZyb20gYnJpZ2h0IGxpZ2h0',               type: 'regular' }, // Thu May 28
  { clue: 'Corn!',         sentence: 'Y29iIHBvcHBlZCBjcmVhbWVkIGZsYWtlcyBjYXJhbWVs',                                 type: 'playful' }, // Fri May 29
  { clue: "Murphy's Law?", sentence: 'YW55dGhpbmcgdGhhdCBjYW4gZ28gd3Jvbmcgd2lsbCBnbyB3cm9uZw==',                          type: 'playful' }, // Sat May 30
  { clue: 'Mercury;',      sentence: 'Y2xvc2VzdCBwbGFuZXQgdG8gdGhlIHN1biBsZWdlbmRhcnkgcXVlZW4gZnJvbnRtYW4=',                type: 'sunday'  }, // Sun May 31

  // ── WEEK 5 (Jun 1) ─────────────────────────────────
  { clue: 'Marathon',      sentence: 'bG9uZyBydW5uaW5nIHJhY2Ugb2YganVzdCBvdmVyIHR3ZW50eSBzaXggbWlsZXM=',                   type: 'regular' }, // Mon Jun 1
  { clue: 'Mount Everest', sentence: 'dGFsbGVzdCBwZWFrIG9uIHBsYW5ldCBlYXJ0aA==',                                      type: 'regular' }, // Tue Jun 2
  { clue: 'Umbrella',      sentence: 'Zm9sZGluZyBjYW5vcHkgY2FycmllZCB0byBzdGF5IGRyeSBpbiB0aGUgcmFpbg==',                    type: 'regular' }, // Wed Jun 3
  { clue: 'Chess',         sentence: 'c3RyYXRlZ3kgYm9hcmQgZ2FtZSB3aXRoIGtpbmdzIGFuZCBxdWVlbnM=',                         type: 'regular' }, // Thu Jun 4
  { clue: 'Monday?',       sentence: 'd2lkZWx5IGFncmVlZCB1cG9uIHdvcnN0IGRheSBvZiB0aGUgd2Vlaw==',                          type: 'playful' }, // Fri Jun 5
  { clue: 'Tuesday?',      sentence: 'd2lkZWx5IGFncmVlZCB1cG9uIGJlc3QgZGF5IGZvciB0YWNvcw==',                             type: 'playful' }, // Sat Jun 6
  { clue: 'Wednesday;',    sentence: 'd2lkZWx5IGtub3duIGFzIGh1bXAgZGF5IGNoYXJhY3RlciBmcm9tIHRoZSBhZGRhbXMgZmFtaWx5',         type: 'sunday'  }, // Sun Jun 7

  // ── WEEK 6 (Jun 8) ─────────────────────────────────
  { clue: 'Thermos',       sentence: 'aW5zdWxhdGVkIGZsYXNrIHRoYXQga2VlcHMgZHJpbmtzIGhvdCBvciBjb2xk',                     type: 'regular' }, // Mon Jun 8
  { clue: 'Armpit',        sentence: 'cGxhY2UgdG8gYXBwbHkgZGVvZG9yYW50IG9yIGFudGlwZXJzcGlyYW50',                        type: 'regular' }, // Tue Jun 9
  { clue: 'Decaf',         sentence: 'b3JkZXIgZGV0YWlsIGZvciBjdXN0b21lcnMgYXQgc3RhcmJ1Y2tz',                           type: 'regular' }, // Wed Jun 10
  { clue: 'Seltzer',       sentence: 'd2F0ZXIgY2FyYm9uYXRlZCB3aXRoIGNhcmJvbiBkaW94aWRl',                              type: 'regular' }, // Thu Jun 11
  { clue: 'Bagel!',        sentence: 'cGxhaW4gc2VzYW1lIGV2ZXJ5dGhpbmcgcmFpc2luIHB1bXBlcm5pY2tlbA==',                       type: 'playful' }, // Fri Jun 12
  { clue: 'Bread?',        sentence: 'Z3JlYXRlc3QgdGhpbmcgc2luY2UgaXRzZWxmIGFjY29yZGluZyB0byB0aGUgc2F5aW5n',               type: 'playful' }, // Sat Jun 13
  { clue: 'Ace;',          sentence: 'dW50b3VjaGVkIHRlbm5pcyBzZXJ2ZSBoaWdoIGNhcmQgaW4gYSByb3lhbCBmbHVzaA==',                 type: 'sunday'  }, // Sun Jun 14

  // ── WEEK # (####) ── TEMPLATE ───────────────────────
  // { clue: 'mmmmm',      sentence: 'bW1tbW0=',              type: 'regular' }, // Mon
  // { clue: 'ttttt',      sentence: 'dHR0dHQ=',              type: 'regular' }, // Tue
  // { clue: 'wwwww',      sentence: 'd3d3d3c=',              type: 'regular' }, // Wed
  // { clue: 'ttttt',      sentence: 'dHR0dHQ=',              type: 'regular' }, // Thu
  // { clue: 'fffff!',     sentence: 'ZmZmZmY=',              type: 'playful' }, // Fri
  // { clue: 'sssss?',     sentence: 'c3Nzc3M=',              type: 'playful' }, // Sat
  // { clue: 'sssss;',     sentence: 'c3Nzc3M=',              type: 'sunday'  }, // Sun

];
