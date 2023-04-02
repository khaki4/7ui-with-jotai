import {DevTools} from "jotai-devtools";
import {FlightBooker} from "./tasks/FlightBooker";

function App() {
	return (
		<>
			<DevTools isInitialOpen/>
			{/*<Counter />*/}
			{/*<TemperatureConverter />*/}
			<FlightBooker/>
		</>
	);
}

export default App;
