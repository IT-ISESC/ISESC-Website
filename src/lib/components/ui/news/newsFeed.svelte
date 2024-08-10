<script lang="ts">
  import NewsCard from '$lib/components/ui/news/newsCard/newsCard.svelte'
	import type { News } from './newsCard/newsCard';



  export let news: News[] 

</script>

<div class="grid grid-flow-col auto-cols-[85%] gap-6 px-8 overflow-x-auto overscroll-contain grid-rows-[min-content] snap-x snap-mandatory scroll-px-8">
  {#each news as Onew (Onew.id)}
    <NewsCard className="snap-start" news={Onew}/>
  {/each}
</div>