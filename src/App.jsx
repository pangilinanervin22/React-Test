import { useState } from "react";
import FunctionComponent from "./components/FunctionComponent";
import ClassComponent from "./components/ClassComponent";
import Counters from "./components/counters";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<button type="button" onClick={() => setCount((count) => count + 1)}>
				count is: {count}
			</button>
			<Counters />
			<ClassComponent />
			<FunctionComponent />
			<input type="text" onChange={(e) => changingInput(e.target.value)} />
		</div>
	);

	function changingInput(e) {
		console.log(e);
	}
}

export default App;
