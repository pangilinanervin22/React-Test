import { Component } from "react";
import ClassComponent from "./ClassComponent";
import Counter from "./counter";
import FunctionComponent from "./FunctionComponent";
import Test from "../common/test";

class Counters extends Component {
	state = {
		total: 0,
		counters: [
			{ id: 1, value: 5 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
		],
		users: [
			{ id: 1, name: "ervin" },
			{ id: 2, name: "monti" },
			{ id: 3, name: "lue" },
			{ id: 4, name: "ivo" },
		],
	};

	componentDidUpdate() {
		console.log("update arrayCounter");
	}

	render() {
		return (
			<div>
				<header className="item">
					Total Item :<span className="total">{this.getTotalCounter()}</span>
				</header>
				<button onClick={this.handleReset}>Reset</button>
				<button onClick={this.addCounter}>Add Counter</button>
				{this.state.counters.map((item) => {
					console.log(item);
					return (
						<Counter
							key={item.id}
							counter={item}
							onDelete={this.deleteCounter}
							decrementEvent={this.handleDecrement}
							incrementEvent={this.handleIncrement}
						/>
					);
				})}

				<div>
					<h1>Example</h1>
					<h3>Stateless Function Component</h3>
					<FunctionComponent />
					<h3>Class Component</h3>
					<ClassComponent />
				</div>

				{this.state.users.map((index) => (
					<Test object={index} key={index.id} />
				))}
			</div>
		);
	}

	getTotalCounter = () => {
		let total = 0;
		this.state.counters.forEach((val) => (total += val.value));

		return total;
	};

	addCounter = () => {
		const counters = [...this.state.counters];
		const lastItem = counters.length && counters[counters.length - 1];
		counters.push({ id: lastItem.id + 1, value: 0 });
		this.setState({ counters });
	};

	deleteCounter = (counter) => {
		const counters = this.state.counters.filter((index) => index.id !== counter.id);
		this.setState({ counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map((item) => {
			item.value = 0;
			return item;
		});
		this.setState({ counters });
	};

	handleIncrement = (counter) => {
		const counters = this.state.counters;
		const index = counters.indexOf(counter);
		counters[index].value++;
		this.setState({ counters });
	};

	handleDecrement = (counter) => {
		if (counter.value === 0) return;

		const counters = this.state.counters;
		const index = counters.indexOf(counter);
		counters[index].value--;
		this.setState({ counters });
	};
}

export default Counters;
