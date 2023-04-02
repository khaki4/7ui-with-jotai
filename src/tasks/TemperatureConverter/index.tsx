import { useAtom } from "jotai";
import { celsiusAtom, fahrenheitAtom } from "./atoms";

export function TemperatureConverter() {
  const [ct, setCt] = useAtom(celsiusAtom);
  const [ft, setFt] = useAtom(fahrenheitAtom);
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <input type="text" value={ct} onChange={(e) => setCt(e.target.value)} />
      <span>Celsius = </span>
      <input type="text" value={ft} onChange={(e) => setFt(e.target.value)} />
      <span>Fahrenheit</span>
    </div>
  );
}
