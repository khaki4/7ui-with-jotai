import { useAtom } from "jotai";
import { celsiusAtom, fahrenheitAtom } from "./atoms";

export function TemperatureConverter() {
  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Celsius />
      <Fahrenheit />
    </div>
  );
}

function Celsius() {
  const [ct, setCt] = useAtom(celsiusAtom);
  return (
    <>
      <input type="text" value={ct} onChange={(e) => setCt(e.target.value)} />
      <span>Celsius = </span>
    </>
  );
}

function Fahrenheit() {
  const [ft, setFt] = useAtom(fahrenheitAtom);
  return (
    <>
      <input type="text" value={ft} onChange={(e) => setFt(e.target.value)} />
      <span>Fahrenheit</span>
    </>
  );
}
