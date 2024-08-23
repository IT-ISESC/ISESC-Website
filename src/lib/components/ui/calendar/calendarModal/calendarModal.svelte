<script lang="ts">
  import { flyAndScale } from "$lib/utils"; 
  import { fade } from 'svelte/transition'
  import Icon from '$lib/components/ui/icons/icon.svelte'
  import { cn } from '$lib/utils'
  import { createTabs, melt } from '@melt-ui/svelte';
  import { cubicInOut } from 'svelte/easing';
  import { crossfade } from 'svelte/transition';
  import type { News } from "../../news/newsCard/newsCard";
  
  export let portalled
  export let overlay
  export let modalContent
  export let title
  export let description
  export let close
  export let news: News[]
  export let ids: number[]

  const {
    elements: { root, list, content, trigger },
    states: { value },
  } = createTabs({
    defaultValue: 'tab-1',
  });

  let className = '';
  export { className as class };

  const filteredNews = news.filter((Onew) => ids.includes(Onew.id))

  const triggers = filteredNews.map((Onew, i) => ({
    id: `tab-${i + 1}`,
    title: Onew.topic
  }))

  const [send, receive] = crossfade({
    duration: 250,
    easing: cubicInOut,
  });
</script>

<div {...$portalled} use:portalled>
<div {...$overlay} use:overlay class="fixed inset-0 z-50 bg-black/50" transition:fade={{ duration: 150 }}>
<div
  {...$root} use:root
  {...$modalContent} use:modalContent
  class={cn(
    'flex max-w-[25rem] flex-col overflow-hidden rounded-xl shadow-lg  data-[orientation=vertical]:flex-row',
    'fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-0 h-3/5 shadow-lg',
  )}
  transition:flyAndScale={{
    duration: 150,
    y: 8,
    start: 0.96,
  }}
>
  <div
    {...$list} use:list
    class="flex shrink-0 overflow-x-auto bg-neutral-100
    data-[orientation=vertical]:flex-col data-[orientation=vertical]:border-r"
    aria-label="Manage your account"
  >
    {#each triggers as triggerItem}
      <button {...$trigger(triggerItem.id)} use:trigger class="trigger relative">
        {triggerItem.title}
        {#if $value === triggerItem.id}
          <div
            in:send={{ key: 'trigger' }}
            out:receive={{ key: 'trigger' }}
            class="absolute bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-magnum-400"
          ></div>
        {/if}
      </button>
    {/each}
  </div>
  <div {...$content('tab-1')} use:content class="grow bg-white p-5">
    <p class="mb-5 leading-normal text-neutral-900">
      Make changes to your account here. Click save when you're done.
    </p>
    <fieldset class="mb-4 flex w-full flex-col justify-start">
      <label
        class="mb-2.5 block text-sm leading-none text-neutral-900"
        for="name"
      >
        Name
      </label>
      <input id="name" value="Thomas G. Lopes" />
    </fieldset>

    <div class="mt-5 flex justify-end">
      <button class="save">Save changes</button>
    </div>
  </div>
  <div {...$content('tab-2')} use:content class="grow bg-white p-5">
    <p class="mb-5 leading-normal text-neutral-900">
      Change your password here. Click save when you're done.
    </p>
    <fieldset class="mb-4 flex w-full flex-col justify-start">
      <label
        class="mb-2.5 block text-sm leading-none text-neutral-900"
        for="newPassword"
      >
        New password
      </label>
      <input id="newPassword" type="password" />
    </fieldset>
    <div class="mt-5 flex justify-end">
      <button class="save">Save changes</button>
    </div>
  </div>
  <div {...$content('tab-3')} use:content class="grow bg-white p-5">
    <p class="mb-5 leading-normal text-neutral-900">
      Change your settings here. Click save when you're done.
    </p>

    <fieldset class="mb-4 flex w-full flex-col justify-start">
      <label
        class="mb-2.5 block text-sm leading-none text-neutral-900"
        for="newEmail"
      >
        New email
      </label>
      <input id="newEmail" type="email" />
    </fieldset>
    <div class="mt-5 flex justify-end">
      <button class="save">Save changes</button>
    </div>
  </div>
</div>
</div>
</div>

<style lang="postcss">
  .trigger {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: default;
    user-select: none;

    border-radius: 0;
    background-color: theme(colors.neutral.100);

    color: theme(colors.neutral.900);
    font-weight: 500;
    line-height: 1;

    flex: 1;
    height: theme(spacing.12);
    padding-inline: theme(spacing.2);

    &:focus {
      position: relative;
    }

    &:focus-visible {
      @apply z-10 ring-2;
    }

    &[data-state='active'] {
      @apply focus:relative;
      background-color: white;
      color: theme('colors.secondary.blue');
    }
  }

  input {
    height: theme(spacing.8);
    flex-shrink: 0;
    flex-grow: 1;
    border-radius: theme(borderRadius.md);
    border: 1px solid theme(colors.neutral.200);
    padding-inline: theme(spacing[2.5]);
    line-height: 1;
    color: theme(colors.neutral.900);

    &:focus {
      border-color: theme(colors.secondary.blue);
    }
  }

  .save {
    display: inline-flex;
    height: theme(spacing.8);
    cursor: default;
    align-items: center;
    justify-content: center;
    border-radius: theme(borderRadius.md);
    background-color: theme(colors.secondary.lightBlue);
    padding-inline: theme(spacing.4);
    line-height: 1;
    font-weight: theme(fontWeight.semibold);
    color: theme(colors.primary.blue);
    @apply transition;

    &:hover {
      opacity: 0.75;
    }

    &:focus {
      @apply !ring-green-600;
    }
  }
</style>

<!-- <div class="" {...$portalled} use:portalled>
	<div
		{...$overlay}
		use:overlay
		class="fixed inset-0 z-50 bg-black/50"
		transition:fade={{ duration: 150 }}
	></div>
	<div
		class="fixed left-1/2 top-1/2 z-50 max-h-[85vh] w-[90vw]
            max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white
            p-6 shadow-lg"
		transition:flyAndScale={{
			duration: 150,
			y: 8,
			start: 0.96
		}}
		{...$content}
		use:content
	>
		<h2 {...$title} use:title class="m-0 text-lg font-medium text-black">Edit profile</h2>
		<p {...$description} use:description class="mb-5 mt-2 leading-normal text-zinc-600">
			Make changes to your profile here. Click save when you're done.
		</p>

		<fieldset class="mb-4 flex items-center gap-5">
			<label class="w-[90px] text-right text-black" for="name"> Name </label>
			<input
				class="inline-flex h-8 w-full flex-1 items-center justify-center
                    rounded-sm border border-solid px-3 leading-none text-black"
				id="name"
				value="Thomas G. Lopes"
			/>
		</fieldset>
		<fieldset class="mb-4 flex items-center gap-5">
			<label class="w-[90px] text-right text-black" for="username"> Username </label>
			<input
				class="inline-flex h-8 w-full flex-1 items-center justify-center
                    rounded-sm border border-solid px-3 leading-none text-black"
				id="username"
				value="@thomasglopes"
			/>
		</fieldset>
		<div class="mt-6 flex justify-end gap-4">
			<button
				{...$close}
				use:close
				class="inline-flex h-8 items-center justify-center rounded-sm
                    bg-zinc-100 px-4 font-medium leading-none text-zinc-600"
			>
				Cancel
			</button>
			<button
				{...$close}
				use:close
				class="bg-magnum-100 text-magnum-900 inline-flex h-8 items-center
                    justify-center rounded-sm px-4 font-medium leading-none"
			>
				Save changes
			</button>
		</div>
		<button
			{...$close}
			use:close
			aria-label="close"
			class="text-magnum-800 hover:bg-magnum-100 focus:shadow-magnum-400 absolute right-4 top-4 inline-flex
                h-6 w-6 appearance-none items-center justify-center
                rounded-full p-1"
		>
      <Icon name="close" />
		</button>
	</div>
</div> -->
