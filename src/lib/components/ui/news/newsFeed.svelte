<script lang="ts">
	import NewsCard from '$lib/components/ui/news/newsCard/newsCard.svelte';
	import type { News } from './newsCard/newsCard';

	export let colors: Array<string[]> = [];
	export let title: boolean = false;

	export let news: News[];
</script>

<section class="h-full">
	{#if title}
		<div class="container mx-auto flex flex-row justify-between gap-20 p-7 align-middle md:w-10/12">
			<h1 class="text-3xl font-bold text-primary-blue">News</h1>
		</div>
	{/if}
	<div >
		<!-- Enable lg media query when responsive for desktop -->
		<div
			class={`minimal-scrollbar mx-auto grid h-full snap-x snap-mandatory scroll-px-8 auto-cols-[90%] grid-flow-col grid-rows-1 gap-6 overflow-x-auto px-8 md:w-10/12 md:auto-cols-[55%] ${ false && 'lg:auto-cols-[35%]'}`}
		>
			{#each news as Onew (Onew.id)}
				<NewsCard
					className={`aspect-video snap-start ${colors.length && colors && colors[(Onew.id - 1) % colors.length][0]}`}
					news={Onew}
				/>
			{/each}
		</div>
	</div>
</section>
