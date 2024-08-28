<script>
	import AcademicDisplay from '$lib/components/ui/landing/academicDisplay.svelte';
	import Directory from '$lib/components/ui/landing/directory.svelte';
	import NewsFeed from '$lib/components/ui/news/newsFeed.svelte';

	export let data;
	const { news } = data;
</script>

<AcademicDisplay />
<br />
<NewsFeed {news} title={true} />
<br />
<Directory />
