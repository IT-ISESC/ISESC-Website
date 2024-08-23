<script lang="ts">
	import NewsCard from '$lib/components/ui/news/newsCard/newsCard.svelte';
	import type { News } from './newsCard/newsCard';

	export let colors: Array<string[]> = [];
	export let title: boolean = false;

	export let news: News[];
</script>

<section>
	{#if title}
		<div class="container flex flex-row align-middle pb-7">
			<h1 class="text-3xl font-bold text-primar-blue">News</h1>
		</div>
  {/if}
	<div
		class="grid snap-x snap-mandatory scroll-px-8 auto-cols-[90%] grid-flow-col grid-rows-[min-content] gap-6 overflow-x-auto px-8 lg:auto-cols-[70%]"
	>
		{#each news as Onew (Onew.id)}
			<NewsCard
				className={`snap-start ${colors.length && colors && colors[(Onew.id - 1) % colors.length][0]}`}
				news={Onew}
			/>
		{/each}
	</div>
</section>
