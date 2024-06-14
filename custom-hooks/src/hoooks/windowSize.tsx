// crate a hook that will return the window size

import { useState, useEffect } from 'react';

export default function useWindowSize() {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	function handleResize() {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize);
	}, []);

	return windowSize;
}
