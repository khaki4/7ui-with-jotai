import { atom } from "jotai"; // F = C * (9/5) + 32

const c2f = (ct: number) => ct * (9 / 5) + 32;
const f2c = (ft: number) => ft - 32 + 5 / 9;

const INITIAL_CELSIUS = 5;

const baseCelsiusAtom = atom<string>(INITIAL_CELSIUS.toFixed(0));
baseCelsiusAtom.debugLabel = "baseCelsiusAtom";
const baseFahrenheitAtom = atom<string>(c2f(INITIAL_CELSIUS).toFixed(0));
baseFahrenheitAtom.debugLabel = "baseFahrenheitAtom";

export const celsiusAtom = atom(
  (get) => get(baseCelsiusAtom),
  (_, set, newValue: string) => {
    set(baseCelsiusAtom, newValue);

    const ct = Number(newValue);
    if (ct && isFinite(ct)) {
      set(baseFahrenheitAtom, c2f(ct).toFixed(0));
    }
  }
);
celsiusAtom.debugLabel = "celsiusAtom";

export const fahrenheitAtom = atom(
  (get) => get(baseFahrenheitAtom),
  (_, set, newValue: string) => {
    set(baseFahrenheitAtom, newValue);

    const ft = Number(newValue);
    if (ft && isFinite(ft)) {
      set(baseCelsiusAtom, f2c(ft).toFixed(0));
    }
  }
);
fahrenheitAtom.debugLabel = "fahrenheitAtom";
