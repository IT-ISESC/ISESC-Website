<script lang="ts">
  import { type TagProps, tagVariants } from "./index";
  import { cn } from "$lib/utils";

  type $$Props = TagProps;

  export let variant: $$Props["variant"] = "default";
  export let size: $$Props["size"] = "default";
</script>


<div class={cn(tagVariants({ variant, size }))}>
  <slot />
</div>