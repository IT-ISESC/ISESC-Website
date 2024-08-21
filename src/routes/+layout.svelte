<script>
	import '../app.css';
	import Navbar from '$lib/components/ui/navbar.svelte';
	export let title = 'ISESC';
	// TODO Make ISESC.ico to use
	let favicon = '/default-favicon.ico';
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />
<slot></slot>
