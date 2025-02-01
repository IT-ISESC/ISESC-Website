<script lang="ts">
	import { cn } from '$lib/utils';
	import { createAccordion } from '@melt-ui/svelte';
	import { slide, fade } from 'svelte/transition';
	import type { News } from '../../news/newsCard/newsCard';
	import ScrollArea from '$lib/components/ui/scrollArea/scrollArea.svelte';
	import Icon from '../../icons/icon.svelte';
	import type { IconName } from '../../icons';
	import { onMount } from 'svelte';
	import caretUp from '$lib/assets/icons/caretUp.svg';
	import caretDown from '$lib/assets/icons/caretDown.svg';
	import closeIcon from '$lib/assets/icons/close.svg';

	export let portalled;
	export let overlay;
	export let modalContent;
	export let title;
	export let description;
	export let close;
	export let news: News[];
	export let ids: number[] = [];
	export let date: string;

	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({
		defaultValue: 'item-1'
	});

	let items: any = [];

	onMount(() => {
		items = [];
	});

	let filteredNews: News[] = [];
	let eventDateIndex: number[];

	$: if (ids) {
		filteredNews = news.filter((Onew) => ids.includes(Onew.id));
	}
	$: if (filteredNews) {
		eventDateIndex = filteredNews.map((news) => {
			for (let i = 0; i < news.dates.length; i++) {
				if (
					news.dates[i].startDate === date.toString() ||
					news.dates[i].endDate === date.toString()
				) {
					return i;
				}
			}
			return 0;
		});
	}

	$: items = filteredNews.map((Onew, i) => ({
		id: `item-${i + 1}`,
		title: Onew.topic,
		dates: Onew.dates[0].display,
		description: Onew.newsDescription,
		links: Onew.links || [],
		time: Onew.dates[eventDateIndex[0]].time,
		location: Onew.dates[eventDateIndex[0]].location
	}));

	let className = '';
	export { className as class };
</script>

<div {...$portalled} use:portalled class="pointer-events-auto z-[1001]">
	<div
		{...$overlay}
		use:overlay
		class="fixed inset-0 z-[1002] bg-black/50 p-2"
		transition:fade={{ duration: 150 }}
	>
		<!-- Change max width to full when responsive for desktop -->
		<div
			class={cn(
				'mx-auto w-[18rem] rounded-xl bg-white shadow-lg sm:w-[25rem] md:w-9/12 max-w-[640px]',
				'fixed left-1/2 top-1/2 z-[1002] max-h-[100vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-0 shadow-lg'
			)}
			{...$root}
			{...$modalContent}
			use:modalContent
		>
			{#each items as { id, title, description, dates, links, time, location }, i}
				<div
					{...$item(id)}
					use:item
					class="overflow-hidden transition-colors first:rounded-t-xl
            last:rounded-b-xl"
				>
					<h2 class="item-center flex">
						<button
							{...$trigger(id)}
							use:trigger
							class={cn(
								'flex flex-1 cursor-pointer items-center justify-between ',
								'bg-white px-5 py-5 text-base font-medium leading-none',
								'text-black transition-colors hover:bg-neutral-100 focus:!ring-0',
								'focus-visible:text-magnum-800',
								i !== 0 && 'border-t border-t-neutral-300'
							)}
						>
							{title}
							{#if $isSelected(id)}
								<!-- <Icon name="caretUp" class="size-8 fill-none stroke-black stroke-2" /> -->
								<img class="size-6" id="caret-up" alt="caret-up" src={caretUp} />
							{:else}
								<!-- <Icon name="caretDown" class="size-8 fill-none stroke-black stroke-2" /> -->
								<img class="size-6" id="caret-down" alt="caret-down" src={caretDown} />
							{/if}
						</button>
					</h2>
					{#if $isSelected(id)}
						<div
							class={cn('content', 'overflow-hidden bg-neutral-100 text-sm text-neutral-600')}
							{...$content(id)}
							use:content
							transition:slide
						>
							<ScrollArea title={dates} {description} bind:links {time} {location} />
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.content {
		box-shadow: inset 0px 1px 0px theme('colors.neutral.300');
	}
</style>
