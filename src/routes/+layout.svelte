<script>
	import '../styles/app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div style="height: 100vh;">
	{@render children?.()}
</div>
