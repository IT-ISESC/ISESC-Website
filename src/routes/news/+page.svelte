<script lang="ts">
	import NewsFeed from '$lib/components/ui/news/newsFeed.svelte';
	import EventOnCalendar from '$lib/components/ui/calendar/eventOnCalendar.svelte'
	import Combobox from '$lib/components/ui/combobox/combobox.svelte';
	import type { TagVariant } from '$lib/components/ui/tag/index.js';
	import Tag from '$lib/components/ui/tag/tag.svelte';
	import type { TagProps } from '$lib/components/ui/tag/index.js'
	import { createSearchStore, searchHandler } from '$lib/stores/search.js';
	import { onDestroy } from 'svelte';
	import type { News } from '$lib/components/ui/news/newsCard/newsCard.js';

	export let data;
	const { news } = data;

	const colors = [
		['bg-purple-500', 'bg-purple-300'],
		['bg-blue-500', 'bg-blue-300'],
		['bg-green-500', 'bg-green-300'],
		['bg-yellow-500', 'bg-yellow-300'],
		['bg-orange-500', 'bg-orange-300'],
		['bg-red-500', 'bg-red-300'],
	];

	type NewsToBeSearched = News & { searchTerms: string[] };
	const searchNews: NewsToBeSearched[] = news.map((Onew: News) => ({
		...Onew,
		searchTerms: Onew.tags.map((tag) => tag.label)
	}));

	const searchStore = createSearchStore(searchNews);

	const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	onDestroy(() => {
		unsubscribe();
	});

	let selectedTags: Array<{ value: TagVariant; label: string }> = [];
	$: $searchStore.search = selectedTags.map((tag) => tag.label);

	const closeCallback = (v: TagProps["variant"]) => {
		selectedTags = selectedTags.filter((tag) => tag.value !== v)
	}
</script>

<div class="container flex flex-row justify-between gap-20 p-7 align-middle">
	<h1 class="text-4xl font-bold text-primary-blue">News</h1>
	<Combobox bind:selectedTags />
</div>
<div class="container flex gap-2 pb-5 overflow-x-auto overscroll-contain">
	{#each selectedTags as tag, i (i)}
		<Tag variant={tag.value} size="sm" closable={true} {closeCallback}>
			{tag.label} 
		</Tag>
	{/each}
</div>
<div>
	{#if $searchStore.filtered.length}
		<NewsFeed news={$searchStore.filtered} {colors}/>
	{:else}
    <div class="flex text-center align-middle justify-center items-center text-xl font-semibold text-secondary-lightBlue">
      No Results Found...
    </div>
	{/if}
</div>
<div class="container flex flex-col justify-between gap-2 py-12">
	<h1 class="text-4xl font-bold text-primary-blue">Event Calendar</h1>
	<EventOnCalendar news={$searchStore.filtered} />
</div>
