<script>
	import BulletPoint from '$lib/components/ui/page-info/BulletPoint.svelte';

	function handleBackClick() {
		window.history.back();
	}
</script>

<div class="container">
	<div class="flex justify-center space-x-2">
		<button on:click={handleBackClick} class="mr-5">
			<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
				<path
					d="M12 6l-6 6 6 6"
					stroke="#2B7292"
					stroke-width="2"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
				/>
			</svg>
		</button>
		<h1 class="text-2xl font-bold text-primary-blue">Work in Progress</h1>
	</div>
	<br />
	<p>Please come back later :(</p>
</div>

<style>
	.container {
		max-width: 600px;
	}
</style>
