<script lang="ts">
  import NewsCard from '$lib/components/ui/news/newsCard/newsCard.svelte'
	import type { News } from './newsCard/newsCard';

  export let colors: Array<string[]>

  export let news: News[] 

</script>

<div class="grid grid-flow-col auto-cols-[90%] lg:auto-cols-[70%] gap-6 px-8 overflow-x-auto grid-rows-[min-content] snap-x snap-mandatory scroll-px-8">
  {#each news as Onew (Onew.id)}
    <NewsCard className={`snap-start ${colors[(Onew.id - 1) % colors.length][0]}`} news={Onew} />
  {/each}
</div>