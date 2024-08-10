<script>
	import NewsFeed from '$lib/components/ui/news/newsFeed.svelte';
  import Calendar from '$lib/components/ui/calendar/calendar.svelte'
  export let data
  const { news } = data
</script>
<div class="container flex flex-row justify-between py-7 pl-7 pr-3 align-middle gap-28">
  <h1 class="text-4xl text-primary-blue font-bold">News</h1>
  <!-- Placeholder for seach bar -->
</div>
<div>
  <NewsFeed {news}/>
</div>
<div class="container flex flex-col pt-12 justify-between gap-2">
  <h1 class="text-4xl text-primary-blue font-bold">Event Calendar</h1>
  <Calendar />
</div>