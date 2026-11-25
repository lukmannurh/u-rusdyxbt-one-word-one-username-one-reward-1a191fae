# LEDGER — One Word, One Username, One Reward

- Competition: u-rusdyxbt-one-word-one-username-one-reward-1a191fae
- Title: One Word, One Username, One Reward
- Prize: $5 total (1st $2, 2nd $2, 3rd $1)
- Deadline: 27 Nov 2026 06:50 WIB (2026-11-26T23:50:00Z)
- Entry word: `lukman-nur-hakim` (the entrant's own make.fun handle, one word, 16 chars, no spaces, no padding)
- Output: `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`)
- Anchor (init): `a188b064a20713b30c32fe55dce59410ab7ad0ef`, round 34257380, wallet = payout wallet
- LICENSE: init's own, SPDX-License-Identifier: MIT (kept, not replaced)
- .makefun/owner.json: payout wallet

## Local tests (Node v22.23.5)

- Run 1: `MAKEFUN_OUTPUT_DIR=/tmp/oneword-run1 node main.ts` → wrote entry.txt, 16 chars
- Run 2: `MAKEFUN_OUTPUT_DIR=/tmp/oneword-run2 node main.ts` → wrote entry.txt, 16 chars
- Content both runs: `lukman-nur-hakim` (16 bytes, no trailing newline)
- sha256 both runs: `5a7370e970c6cefafb8a18f3e128ba9e11257e878c3eb56de6bba92c74209e18`
- Byte-identical across runs: YES (`cmp` clean)
- Validation in main.ts: length 1–30, no whitespace, no leading/trailing padding, UTF-8 byte length ≤ 30, read-back verification after write. No network calls.

## Submission

- Not submitted yet (parent handles commit/push/bundle/check/submit).
- No claim code (none yet).
