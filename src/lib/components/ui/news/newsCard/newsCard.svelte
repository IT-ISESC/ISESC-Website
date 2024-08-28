<script lang="ts">
	import { createDialog } from '@melt-ui/svelte';
	import Tag from '../../tag/tag.svelte';
	import { flyAndScale } from '$lib/utils';
	import { fade } from 'svelte/transition';
	import { cn } from '$lib/utils';
	import { type News } from './newsCard';
	import NewsModal from '../newsModal/newsModal.svelte';
	import whiteLogo from '$lib/assets/news/logo_white.svg';
	import { browser } from '$app/environment';

	const {
		elements: { trigger, overlay, content, title, description, close, portalled },
		states: { open }
	} = createDialog({
		forceVisible: true,
	});

	export let news: News;
	const { topic, tags, dates, imgSrc, newsDescription } = news;
	const dateDisplay = dates[0].display;

	export let className: string;

	$: {
		if (browser && $open !== undefined) {
			const body = document.body;
			if ($open === true) {
				body.classList.add('pointer-events-none');
			} else {
				setTimeout(() => {
					body.classList.remove('pointer-events-none')
				}, 100)
			}
		}
	}
	$: console.log($open)
</script>

<div
	class={cn(
		`relative h-full w-full cursor-pointer rounded-[0.9375rem] bg-secondary-blue pb-1 pr-1 `,
		className
	)}
	{...$trigger}
	use:trigger
>
	{#if imgSrc === 'default'}
		<div
			class="object cover left-0 top-0 flex h-full w-full items-center justify-center rounded-[0.9375rem] bg-primary-blue align-middle brightness-75"
		>
			<img
				class="aspect-square w-3/12 opacity-30"
				id="white-logo"
				alt="white-logo"
				src={whiteLogo}
			/>
		</div>
	{:else}
		<img
			{...$trigger}
			use:trigger
			src={imgSrc}
			alt="news"
			class="left-0 top-0 w-full rounded-[0.9375rem] object-cover brightness-75"
		/>
	{/if}
	<div class="absolute left-4 top-2 flex max-w-64 flex-col gap-2">
		<h1 class="text-xl font-bold text-white">{topic}</h1>
	</div>
	<div class="absolute bottom-2 left-4 flex flex-col gap-2">
		<h3 class="whitespace-pre-line text-sm font-semibold text-white">{dateDisplay}</h3>
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
	<div class="pointer-events-auto z-[1001]" {...$portalled} use:portalled>
		<div
			{...$overlay}
			use:overlay
			class="fixed inset-0 z-[1002] bg-black/50"
			transition:fade={{ duration: 150 }}
		></div>
		<div
			class="fixed left-1/2 top-1/2 z-[1002] max-h-[85vh] w-[90vw]
            -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white
            p-4 shadow-lg"
			transition:flyAndScale={{
				duration: 0,
				y: 8,
				start: 0.96
			}}
			{...$content}
			use:content
		>
			<NewsModal {news} {title} {description} {content} {close} {portalled} {overlay} />
		</div>
	</div>
{/if}
