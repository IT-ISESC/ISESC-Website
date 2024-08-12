<script lang="ts">
  import { ScrollArea } from "bits-ui";

  export let title: string
  export let description: string
</script>
 
<div
  class="h-[40vh] w-full rounded-[10px] border border-dark-10 bg-background-alt px-2 py-4 shadow-card"
>
  <ScrollArea.Root class="relative h-full px-4 ">
    <ScrollArea.Viewport class="h-full w-full">
      <ScrollArea.Content >
        <h4
          class="mb-4 mt-2 text-sm font-semibold leading-none tracking-[-0.01em] text-foreground whitespace-break-spaces"
        >
          {title}
        </h4>
        <p class="text-sm leading-5 text-foreground-alt whitespace-break-spaces">
          {description}
        </p>
      </ScrollArea.Content>
    </ScrollArea.Viewport>
    <ScrollArea.Scrollbar
      orientation="vertical"
      class="flex h-full w-2.5 touch-none select-none rounded-full border-l border-l-transparent p-px transition-all hover:w-3 hover:bg-dark-10"
    >
      <ScrollArea.Thumb
        class="relative flex-1 rounded-full bg-muted-foreground opacity-40 transition-opacity hover:opacity-100"
      />
    </ScrollArea.Scrollbar>
    <ScrollArea.Corner />
  </ScrollArea.Root>
</div>