import useWindowSize from './hoooks/windowSize';

const App = () => {
	const windowSize = useWindowSize();

	return (
		<div>
			<h1>Window Size</h1>
			<p>Width: {windowSize.width}</p>
			<p>Height: {windowSize.height}</p>
		</div>
	);
};

export default App;
