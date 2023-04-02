import { useAtom } from "jotai";
import { countAtom } from "./atoms";

export function Counter() {
  const [count, increase] = useAtom(countAtom);
  return (
    <div>
      <input type="text" readOnly value={count} />

      <button onClick={increase}>increase</button>
    </div>
  );
}
