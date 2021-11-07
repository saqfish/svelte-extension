import Options from './Options.svelte';

const options = new Options({
	target: document.body,
	props: {
		text: 'Welcome to the options page!'
	}
});

export default options;
