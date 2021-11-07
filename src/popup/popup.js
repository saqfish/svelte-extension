import Popup from './Popup.svelte';

const popup = new Popup({
	target: document.body,
	props: {
		text: 'Welcome to the popup page!'
	}
});

export default popup;
