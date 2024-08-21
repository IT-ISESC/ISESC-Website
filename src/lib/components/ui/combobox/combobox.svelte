<script lang="ts">
  import { Combobox } from "bits-ui";
  import { flyAndScale } from "$lib/utils"
	import Icon from "../icons/icon.svelte";
	import type { TagVariant } from "../tag";
 
  const tags: Array<{ value: TagVariant, label: string }> = [
    { value: "innovation", label: "Innovation" },
    { value: "competition", label: "Competition" },
    { value: "case", label: "Case" },
    { value: "hackathon", label: "Hackathon" },
  ];
 
  let inputValue = "";
  let touchedInput = false;

  export let selectedTags: Array<{ value: TagVariant, label: string }>
 
  $: filteredTags =
    inputValue && touchedInput
      ? tags.filter((tag) => tag.value?.includes(inputValue.toLowerCase()))
      : tags;

</script>
 
<Combobox.Root items={filteredTags} bind:inputValue bind:touchedInput multiple={true} bind:selected={selectedTags}>
  <div class="flex bg-secondary-blue rounded-lg w-[45%] item-center justify-center gap-1 pl-3">
    <Icon name="search" class="size-auto fill-white/40" />
    <Combobox.Input
      class="inline-flex h-input w-full truncate rounded-9px bg-transparent text-lg placeholder:text-lg placeholder:text-foreground-alt/50 placeholder:text-white/40 placeholder:font-semibold text-white/40 font-semibold focus-visible:outline-none focus:placeholder:text-transparent"
      placeholder="Search"
      aria-label="Search"
    />
  </div>
 
  <Combobox.Content
    class="w-full rounded-xl border border-muted bg-background px-1 py-3 shadow-popover outline-none"
    transition={flyAndScale}
    sideOffset={8}
  >
    {#each filteredTags as tag (tag.value)}
      <Combobox.Item
        class="flex h-10 w-full select-none items-center rounded-button py-3 pl-2 pr-1.5 text-sm capitalize outline-none transition-all duration-75 data-[highlighted]:bg-muted justify-start"
        value={tag.value}
        label={tag.label}
      >
        {tag.label}
        <Combobox.ItemIndicator class="ml-auto" asChild={false}>
          <Icon name="check" class="size-auto text-gray-800 aria-hidden:true fill-none stroke-current stroke-2" />
        </Combobox.ItemIndicator>
      </Combobox.Item>
    {:else}
      <span class="block px-5 py-2 text-sm text-muted-foreground">
        No results found
      </span>
    {/each}
  </Combobox.Content>
  <Combobox.HiddenInput name="favoriteFruit" />
</Combobox.Root>