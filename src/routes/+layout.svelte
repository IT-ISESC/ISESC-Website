<script>
	import '../app.css';
	import Navbar from '$lib/components/ui/navbar.svelte';
	export let title = 'ISESC';
	let favicon = '/default-favicon.ico';
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />
<div style="max-width: 640px; margin: auto;">
	<slot></slot>
</div>
