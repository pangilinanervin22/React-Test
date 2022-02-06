import { Component } from "react";

class ClassComponent extends Component {
	state = { value: 0 };

	variable = "CC var";

	render() {
		return (
			<React.Fragment>
				{console.log(this.variable, this.state.value)}
				<h1>{this.state.value}</h1>
				<button onClick={this.increment}>Add</button>
				<button onClick={this.decrement}>Minus</button>
				<button onClick={this.reset}>Reset</button>
			</React.Fragment>
		);
	}

	increment = () => {
		this.setState({ value: this.state.value + 1 });
	};

	decrement = () => {
		this.setState({ value: this.state.value - 1 });
	};

	reset = () => {
		this.setState({ value: 0 });
	};
}

export default ClassComponent;
