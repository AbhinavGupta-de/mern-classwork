import { useEffect, useState } from 'react';

type Props = {
	textArray: string[];
	typingSpeed: number;
	eraseSpeed: number;
	eraseDelay: number;
};

const TypingEffect = ({
	textArray,
	typingSpeed,
	eraseSpeed,
	eraseDelay,
}: Props) => {
	const [text, setText] = useState('');
	const [isTyping, setIsTyping] = useState(true);
	const [currentTextIndex, setCurrentTextIndex] = useState(0);

	useEffect(() => {
		const handleTyping = () => {
			if (isTyping) {
				if (text !== textArray[currentTextIndex]) {
					setText((prev) => textArray[currentTextIndex].slice(0, prev.length + 1));
				} else if (eraseDelay > 0) {
					setTimeout(() => setIsTyping(false), eraseDelay);
				} else {
					setIsTyping(false);
				}
			} else {
				if (text !== '') {
					setText((prev) => prev.slice(0, prev.length - 1));
				} else {
					setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
					setIsTyping(true);
				}
			}
		};

		const timeout = setTimeout(
			() => {
				handleTyping();
			},
			isTyping ? typingSpeed : eraseSpeed
		);

		return () => clearTimeout(timeout);
	}, [text, isTyping, currentTextIndex]);

	return <h1>Typing Effect {text}</h1>;
};

export default TypingEffect;
