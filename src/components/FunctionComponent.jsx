function FunctionComponent() {
	var [value, setValue] = React.useState(0);

	const variable = "FC var ";

	return (
		<React.Fragment>
			{console.log(variable, value)}
			<h1>{value}</h1>
			<button onClick={increment}>Add</button>
			<button onClick={decrement}>Minus</button>
			<button onClick={reset}>Reset</button>
		</React.Fragment>
	);

	function increment() {
		setValue(value + 1);
	}

	function decrement() {
		setValue(value - 1);
	}

	function reset() {
		setValue(0);
	}
}

export default FunctionComponent;
