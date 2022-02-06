export default function Test(props) {
	const { object } = props;
	console.log(object);
	return (
		<React.Fragment>
			<h1>Hello, {object.name}</h1>
		</React.Fragment>
	);
}
