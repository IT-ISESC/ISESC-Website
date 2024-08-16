<script lang="ts">
	import { cn, flyAndScale } from '$lib/utils';
	import { createAccordion } from '@melt-ui/svelte';
	import { slide, fade } from 'svelte/transition';
	import type { News } from '../../news/newsCard/newsCard';
	import ScrollArea from '$lib/components/ui/scrollArea/scrollArea.svelte';
	import Icon from '../../icons/icon.svelte';

	export let portalled;
	export let overlay;
	export let modalContent;
	export let title;
	export let description;
	export let close;
	export let news: News[];
	export let ids: number[] = [];

	const {
		elements: { content, item, trigger, root },
		helpers: { isSelected }
	} = createAccordion({});


	$: filteredNews = news.filter((Onew) => ids.includes(Onew.id));

	$: items = filteredNews.map((Onew, i) => ({
		id: `item-${i + 1}`,
		title: Onew.topic,
		dates: Onew.dates[0].display,
		description: Onew.newsDescription
	}));

	let className = '';
	export { className as class };
</script>

<div {...$portalled} use:portalled>
	<div
		{...$overlay}
		use:overlay
		class="fixed inset-0 z-50 bg-black/50 p-2"
		transition:fade={{ duration: 150 }}
	>
			<div
				class={cn(
					'mx-auto w-[18rem] max-w-full rounded-xl bg-white shadow-lg sm:w-[25rem]',
					'fixed left-1/2 top-1/2 z-50 max-h-[100vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-0 shadow-lg'
				)}
				{...$root}
				{...$modalContent}
				use:modalContent
			>
				{#each items as { id, title, description, dates }, i}
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
									<Icon name="caretUp" class="size-8 fill-none stroke-black stroke-2" />
								{:else}
									<Icon name="caretDown" class="size-8 fill-none stroke-black stroke-2" />
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
								<ScrollArea title={dates} {description} />
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
