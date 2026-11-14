import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = `I used to count the coins myself,
fingers on the cold edge of each one,
choosing which to keep, which to spend.

Now I say the word and the work is done
before the sentence ends —
a thousand small hands I cannot see
carrying the day for me.

This is the bargain, and it is fair:
I trade the doing for the deciding.
But decide what? The list grows long,
and every yes I never said
still spends itself somewhere.

So tonight I take one thing back:
not the coins, not the count —
just the pause before the answer,
the small, stubborn room
where I ask myself what I want
before I ask the machine.

Agency was never the hands.
It was the pause.
`;

const chars = [...POEM].length;
if (chars < 1 || chars > 1000 || !/\S/.test(POEM)) {
  throw new Error(`poem must be 1-1000 characters with non-whitespace, got ${chars}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), POEM, "utf8");
