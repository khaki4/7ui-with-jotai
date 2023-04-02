import { atom, useAtom, Provider } from "jotai";

const countAtom = atom(0);
countAtom.debugLabel = "countAtom";

export function Counter() {
  const [count, increase] = useAtom(countAtom);
  return (
    <Provider>
      <div>cnt: {count}</div>
      <div onClick={() => increase((p) => p + 1)}>increase</div>
    </Provider>
  );
}
