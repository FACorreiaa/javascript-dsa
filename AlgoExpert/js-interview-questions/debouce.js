function debounce(callback, delay, immediate = false) {
	let timerId;
	return function (...args) {
		clearTimeout(timerId);

		const shoudCallImmediatly = timerId === null && immediate;
		if (shoudCallImmediatly) {
			callback.apply(this, args);
		}

		timerId = setTimeout(() => {
			if (!imediate) {
				callback.apply(this, ...args);
			}
			timerId = null;
		}, delay);
	};
}
