<script lang="ts">
	import { ScrollArea } from 'bits-ui';
	import type { News } from '../newsCard/newsCard';
	import Icon from '$lib/components/ui/icons/icon.svelte';
	import type { IconName } from '../../icons';
	import Button from '../../button/button.svelte';
	import { goto } from '$app/navigation';
	import closeIcon from '$lib/assets/icons/close.svg'
	import clock from '$lib/assets/icons/clock.svg'
	import locationIcon from '$lib/assets/icons/location.svg'
	import link from '$lib/assets/icons/link.svg'
	import instagram from '$lib/assets/icons/instagram.svg'
	import facebook from '$lib/assets/icons/facebook.svg'
	import register from '$lib/assets/icons/register.svg'
	import SelfScroll from '$lib/components/ui/scrollArea/scrollArea.svelte'

	export let news: News;
	export let portalled;
	export let overlay;
	export let content;
	export let title;
	export let description;
	export let close;
	const { topic, newsDescription, links, dates } = news;
	const { time, location } = dates[0]
	const newLinks = links || [];
	const presetIcons: {
		[key: string]: any;
	} = {
		Instagram: instagram,
		Facebook: facebook,
		Register: register,
		'More Information': link,
	};
	$: iconNames = newLinks.map((link) => presetIcons[link[0]] || 'link');
</script>
<!-- <SelfScroll title={topic} description={newsDescription} links={links || [['', '']]} time={time || ''} location={location || ''}/> -->

<ScrollArea.Root class="relative h-96 px-4 z-[1003]">
	<ScrollArea.Viewport class="h-full w-full p-2">
		<ScrollArea.Content>
			<div class="pr-6 top-0">
				<h2 {...$title} use:title class="m-0 text-lg font-medium text-black">
					{topic}
				</h2>
				{#if time}
					<div class="flex flex-row gap-2 items-center justify-start align-center text-center">
						 <img class="size-auto" id="clock" alt="clock" src={clock} />
						<h4
							class="my-1 whitespace-break-spaces text-sm font-semibold leading-none tracking-[-0.01em] text-foreground"
						>
							{time}
						</h4>
					</div>
				{/if}
				{#if location}
					<div class="mb-2 flex flex-row gap-2 items-center justify-start align-center text-center">
						 <img class="size-auto" id="location" alt="location" src={locationIcon} />
						<h4
							class="my-1 whitespace-break-spaces text-sm font-semibold leading-none tracking-[-0.01em] text-foreground"
						>
							{location}
						</h4>
					</div>
				{/if}
				<p
					{...$description}
					use:description
					class="mb-5 mt-2 whitespace-pre-line leading-normal text-zinc-600"
				>
					{newsDescription}
				</p>
				<div class="item-center flex flex-col justify-center gap-2 pt-4 text-center align-middle">
					{#each newLinks as link, i (i)}
						<p
							on:click={() => {
								window.location = link[1]
							}}
							class="cursor-pointer item-center flex flex-row justify-start gap-2 pt-4 text-center align-middle"
						>
							<img class="size-auto" alt="logo" src={iconNames[i]} />
							{link[0]}
						</p>
					{/each}
				</div>

			</div>

			<!-- <button
				{...$close}
				use:close
				aria-label="close"
				class="text-magnum-800 hover:bg-magnum-100 focus:shadow-magnum-400 absolute right-1 top-1 inline-flex
                h-6 w-6 appearance-none items-center justify-center
                rounded-full p-1"
			>
				<img class="size-6" id="close" alt="close" src={closeIcon} />
			</button> -->
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