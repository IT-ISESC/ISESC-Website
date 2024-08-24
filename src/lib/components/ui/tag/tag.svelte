<script lang="ts">
  import { type TagProps, tagVariants } from "./index";
  import { cn } from "$lib/utils";
	import Icon from "../icons/icon.svelte";
  import close from '$lib/assets/icons/close.svg'
  import Close from '$lib/components/ui/icons/close.svelte'

	let className: TagProps["class"] = undefined;
  export let variant: TagProps["variant"] = "default";
  export let size: TagProps["size"] = "default";
  export let closable: boolean = false
  export let closeCallback: (v: TagProps["variant"]) => void = (v: TagProps["variant"]) => {}
  export { className as class }
</script>


<div class={cn(tagVariants({ variant, size, className }))}>
  <slot />
  {#if closable}
    <div on:click={() => closeCallback(variant)} {...$$restProps}>
      <!-- <Icon name="close" class="size-auto text-white aria-hidden:true fill-none stroke-current stroke-2"  /> -->
       <!-- <img class="size-6 [&>*]:stroke-white" id="close" alt="close" src={close} /> -->
        <Close class="size-auto stroke-white fill-current"/>
    </div>
  {/if}
</div>