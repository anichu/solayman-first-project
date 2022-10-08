import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="">
			<button onClick={() => setCount((previousValue) => previousValue + 1)}>
				plus
			</button>
			<p>{count}</p>
			<button onClick={() => setCount((previousValue) => previousValue - 1)}>
				minus
			</button>
		</div>
	);
}

export default App;
