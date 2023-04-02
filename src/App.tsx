import { DevTools } from "jotai-devtools";
import { Counter } from "./tasks/Counter";

function App() {
  return (
    <>
      <DevTools isInitialOpen />
      <div className="App">
        <Counter />
      </div>
    </>
  );
}

export default App;
