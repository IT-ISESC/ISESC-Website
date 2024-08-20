<script lang="ts">
	import { ScrollArea } from 'bits-ui';
	import Icon from '../icons/icon.svelte';
	import type { IconName } from '../icons/index';
	import { onDestroy, onMount } from 'svelte';

	export let title: string;
	export let description: string;
	const presetIcons: {
		[key: string]: IconName;
	} = {
		Instagram: 'instagram',
		Facebook: 'facebook',
		Register: 'register',
		'More Information': 'link'
	};
	export let links: Array<[string, string]>;
	$: iconNames = links.map((link) => presetIcons[link[0]] || 'link');
	export let time: string;
	export let location: string;
</script>

<div
	class="border-dark-10 bg-background-alt h-[40vh] w-full rounded-[10px] border px-2 py-4 shadow-card"
>
	<ScrollArea.Root class="relative h-full px-4 ">
		<ScrollArea.Viewport class="h-full w-full">
			<ScrollArea.Content>
				<h4
					class="mb-4 mt-2 whitespace-break-spaces text-sm font-semibold leading-none tracking-[-0.01em] text-foreground"
				>
					{title}
				</h4>
				{#if time}
					<div class="flex flex-row gap-2 items-center justify-start align-center text-center">
						<Icon name="clock" class="size-auto fill-none stroke-black stroke-2" />
						<h4
							class="my-1 whitespace-break-spaces text-sm font-semibold leading-none tracking-[-0.01em] text-foreground"
						>
							{time}
						</h4>
					</div>
				{/if}
				{#if location}
					<div class="mb-2 flex flex-row gap-2 items-center justify-start align-center text-center">
						<Icon name="location" class="size-auto fill-none stroke-black stroke-2" />
						<h4
							class="my-1 whitespace-break-spaces text-sm font-semibold leading-none tracking-[-0.01em] text-foreground"
						>
							{location}
						</h4>
					</div>
				{/if}
				<p class="text-foreground-alt whitespace-break-spaces text-sm leading-5">
					{description}
				</p>
				<div class="item-center flex flex-col justify-center gap-2 pt-4 text-center align-middle">
					{#each links as link, i (i)}
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
				</div>
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
