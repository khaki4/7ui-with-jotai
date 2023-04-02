import { DevTools } from "jotai-devtools";
import { TemperatureConverter } from "./tasks/TemperatureConverter";

function App() {
  return (
    <>
      <DevTools isInitialOpen />
      {/*<Counter />*/}
      <TemperatureConverter />
    </>
  );
}

export default App;
