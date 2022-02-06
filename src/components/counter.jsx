export default function Counter(props) {
	const { decrementEvent, incrementEvent, onDelete, counter } = props;

	return (
		<React.Fragment>
			<div className="item">
				<span className={getBadgeDesign(counter.value)}>{getBadgeZero(counter.value)}</span>
				<button onClick={() => incrementEvent(counter)}>+</button>
				<button
					className={buttonDisable(counter.value)}
					onClick={() => decrementEvent(counter)}
				>
					-
				</button>

				<button onClick={() => onDelete(counter)}>Delete</button>
			</div>
		</React.Fragment>
	);

	function getBadgeZero(value) {
		return value === 0 ? "Zero" : value;
	}

	function getBadgeDesign(value) {
		let temp = "badge badge-";
		temp += value === 0 ? "warning" : "normal";
		return temp;
	}

	function buttonDisable(value) {
		if (value === 0) return "button-disable";
	}
}

// class Counter extends React.Component {
// 	render() {
// 		const { counter, decrementEvent, incrementEvent, onDelete } = this.props;

// 		return (
// 			<React.Fragment>
// 				<div className="item">
// 					<span className={this.getBadgeDesign()}>{this.getBadgeZero()}</span>
// 					<button onClick={() => incrementEvent(counter)}>+</button>
// 					<button
// 						className={this.buttonDisable()}
// 						onClick={() => decrementEvent(counter)}
// 					>
// 						-
// 					</button>

// 					<button onClick={() => onDelete(counter)}>Delete</button>
// 				</div>
// 			</React.Fragment>
// 		);
// 	}

// 	getBadgeZero = () => {
// 		const { value: count } = this.props.counter;
// 		return count === 0 ? "Zero" : count;
// 	};

// 	getBadgeDesign = () => {
// 		let temp = "badge badge-";
// 		temp += this.props.counter.value === 0 ? "warning" : "normal";
// 		return temp;
// 	};

// 	buttonDisable = () => {
// 		if (this.props.counter.value === 0) return "button-disable";
// 	};

// 	componentWillUnmount() {
// 		console.log("delete index ", this.props.counter.id);
// 	}
// }
