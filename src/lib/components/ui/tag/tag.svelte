<script lang="ts">
  import { type TagProps, tagVariants } from "./index";
  import { cn } from "$lib/utils";
	import Icon from "../icons/icon.svelte";


  export let variant: TagProps["variant"] = "default";
  export let size: TagProps["size"] = "default";
  export let closable: boolean = false
  export let closeCallback: (v: TagProps["variant"]) => void = (v: TagProps["variant"]) => {}
</script>


<div class={cn(tagVariants({ variant, size }))}>
  <slot />
  {#if closable}
    <div on:click={() => closeCallback(variant)} {...$$restProps}>
      <Icon name="close" class="size-auto text-white aria-hidden:true fill-none stroke-current stroke-2"  />
    </div>
  {/if}
</div>