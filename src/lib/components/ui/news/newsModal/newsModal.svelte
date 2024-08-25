<script lang="ts">
	import { ScrollArea } from 'bits-ui';
	import type { News } from '../newsCard/newsCard';
	import Icon from '$lib/components/ui/icons/icon.svelte';
	import type { IconName } from '../../icons';
	import Button from '../../button/button.svelte';
	import { goto } from '$app/navigation';
	import closeIcon from '$lib/assets/icons/close.svg'

	export let news: News;
	export let portalled;
	export let overlay;
	export let content;
	export let title;
	export let description;
	export let close;
	const { topic, newsDescription, links } = news;
	const newLinks = links || [];
	const presetIcons: {
		[key: string]: IconName;
	} = {
		Instagram: 'instagram',
		Facebook: 'facebook',
		Register: 'register',
		'More Information': 'link'
	};
	$: iconNames = newLinks.map((link) => presetIcons[link[0]] || 'link');
</script>

<ScrollArea.Root class="relative h-96 px-4">
	<ScrollArea.Viewport class="h-full w-full p-2">
		<ScrollArea.Content>
			<div class="pr-6 top-0">
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

				<!-- TODO: Fix Scroll Area Jump to Anchor Tag Problem -->
				<!-- <div class="item-center flex flex-col justify-center gap-2 pt-4 text-center align-middle">
					{#each newLinks as link, i (i)}
						<a
							href={link[1]}
							class="item-center flex flex-row justify-start gap-2 pt-4 text-center align-middle"
						>
							<Icon
								name={`${iconNames[i]}`}
								class={`size-auto ${iconNames[i] === 'link' && 'fill-none stroke-black stroke-2'}`}
							/>
							{link[0]}
						</a>
					{/each}
				</div> -->
			</div>

			<button
				{...$close}
				use:close
				aria-label="close"
				class="text-magnum-800 hover:bg-magnum-100 focus:shadow-magnum-400 absolute right-1 top-1 inline-flex
                h-6 w-6 appearance-none items-center justify-center
                rounded-full p-1"
			>
				<!-- <Icon
					name="close"
					class="aria-hidden:true size-auto fill-none stroke-current stroke-2 text-black"
				/> -->
				<img class="size-6" id="close" alt="close" src={closeIcon} />
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