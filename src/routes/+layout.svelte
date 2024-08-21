<script>
	import '../app.css';
	import Navbar from '$lib/components/ui/navbar.svelte';
	import { onNavigate } from '$app/navigation';

	// onNavigate((navigation) => {
	// 	if (!document.startViewTransition) return;

	// 	return new Promise((resolve) => {
	// 		document.startViewTransition(async () => {
	// 			resolve();
	// 			await navigation.complete;
	// 		});
	// 	});
	// });
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