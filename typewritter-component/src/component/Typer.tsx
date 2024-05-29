import TypingEffect from './TypingEffect';

const Typer = () => {
	return (
		<div>
			<TypingEffect
				textArray={['Hello', 'World']}
				typingSpeed={100}
				eraseSpeed={50}
				eraseDelay={1000}
			/>
		</div>
	);
};

export default Typer;
