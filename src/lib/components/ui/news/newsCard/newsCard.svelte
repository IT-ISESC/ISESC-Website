<script lang="ts">
	import { createDialog } from '@melt-ui/svelte';
	import { type TagProps } from '../../tag';
	import Tag from '../../tag/tag.svelte';
	import { flyAndScale } from '$lib/utils';
	import { fade } from 'svelte/transition';
	import { cn } from '$lib/utils';
	import { type News } from './newsCard';
	import { ScrollArea } from 'bits-ui';

	const {
		elements: { trigger, overlay, content, title, description, close, portalled },
		states: { open }
	} = createDialog({
		forceVisible: true
	});

	export let news: News;
	const { topic, tags, dates, imgSrc, newsDescription } = news;

	export let className: string;
</script>

<div
	class={cn('relative w-full rounded-[15px] bg-secondary-blue pb-1 pr-1', className)}
	{...$trigger}
	use:trigger
>
	<img
		{...$trigger}
		use:trigger
		src={imgSrc}
		alt="news"
		class="left-0 top-0 w-full rounded-[15px] object-cover brightness-75"
	/>
	<div class="absolute left-6 top-2 flex flex-col gap-2">
		<h1 class="text-xl font-bold text-white">{topic}</h1>
	</div>
	<div class="absolute bottom-2 left-6 flex flex-col gap-2">
		<h3 class="whitespace-pre-line text-sm font-semibold text-white">{dates}</h3>
		<div class="bottom-4 left-6 flex flex-row gap-2">
			{#each tags as tag}
				<Tag {...tag.props}>
					{tag.label}
				</Tag>
			{/each}
		</div>
	</div>
</div>

{#if $open}
	<div class="" {...$portalled} use:portalled>
		<div
			{...$overlay}
			use:overlay
			class="fixed inset-0 z-50 bg-black/50"
			transition:fade={{ duration: 150 }}
		></div>
		<div
			class="fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[90vw]
            max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white
            p-4 shadow-lg"
			transition:flyAndScale={{
				duration: 150,
				y: 8,
				start: 0.96
			}}
			{...$content}
			use:content
		>
			<ScrollArea.Root class="relative h-96 px-4">
				<ScrollArea.Viewport class="h-full w-full p-2">
					<ScrollArea.Content>
						<div class="pr-6">
							<h2 {...$title} use:title class="m-0 text-lg font-medium text-black">
								{topic}
							</h2>
							<p
								{...$description}
								use:description
								class="mb-5 mt-2 whitespace-pre-line leading-normal text-zinc-600"
							>
								{newsDescription}
							</p>
						</div>

						<button
							{...$close}
							use:close
							aria-label="close"
							class="text-magnum-800 hover:bg-magnum-100 focus:shadow-magnum-400 absolute right-1 top-1 inline-flex
                h-6 w-6 appearance-none items-center justify-center
                rounded-full p-1"
						>
							X
						</button>
					</ScrollArea.Content>
				</ScrollArea.Viewport>
				<ScrollArea.Scrollbar
					orientation="vertical"
					class="hover:bg-dark-10 flex h-full w-2.5 touch-none select-none rounded-full border-l border-l-transparent p-px transition-all hover:w-3"
				>
					<ScrollArea.Thumb
						class="relative flex-1 rounded-full bg-muted-foreground opacity-40 transition-opacity hover:opacity-100"
					/>
				</ScrollArea.Scrollbar>
				<ScrollArea.Corner />
			</ScrollArea.Root>
		</div>
	</div>
{/if}
