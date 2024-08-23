<section>
	<h4 class="text-xl, font-bold">News</h4>
	<br />
	<div
		class="news-container"
		on:wheel|preventDefault={(event) => (event.currentTarget.scrollLeft += event.deltaY)}
	>
		<!--Replace with Svelte Components-->
		<div class="event"></div>
		<div class="event"></div>
		<div class="event"></div>
		<div class="event"></div>
		<div class="event"></div>
	</div>
</section>

<style>
	::-webkit-scrollbar {
		display: none;
	}

	::-webkit-scrollbar-thumb {
		display: none;
	}

	section {
		overflow: hidden;
	}

	section > h4 {
		padding-left: 36px;
		font-size: 1.25rem;
		font-weight: bold;
	}

	section > .news-container {
		margin-left: -8px;
		margin-right: -8px;
		padding-left: 44px;
		padding-right: 44px;
		display: flex;
		flex-direction: row;
		overflow-x: scroll;
		column-gap: 0.5rem;
		scrollbar-width: none;
	}

	.event {
		/* TODO Check variable for colours again */
		background-color: #2b7292;
		border-radius: 24px;
		min-width: 248px;
		height: 140px;
	}
</style>
