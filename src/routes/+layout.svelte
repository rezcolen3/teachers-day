<script>
	import '../styles/app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="w-screen h-screen flex items-center justify-center">
	{@render children?.()}
</div>
