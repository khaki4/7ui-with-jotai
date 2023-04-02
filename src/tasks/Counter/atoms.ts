import { atom } from "jotai";

const baseCountAtom = atom(0);
baseCountAtom.debugLabel = "baseCountAtom";

export const countAtom = atom(
  (get) => get(baseCountAtom),
  (_, set) => set(baseCountAtom, (count) => count + 1)
);
countAtom.debugLabel = "countAtom";
