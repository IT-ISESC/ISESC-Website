<script>
	import Book_Academic from '$lib/assets/landing/book_academic.svg';
</script>

<section>
	<div class="col-left">
		<h2>
			<br />
			<!-- TODO Check variable for colours again -->
			<span style="color: #2B7292;">ACADEMIC</span> <br />
			SYSTEM!
		</h2>
		<br />
		<a href="/academic" class="font-medium">Click Here to view</a>
	</div>
	<div class="col-right">
		<img src={Book_Academic} alt="Book Academic" />
	</div>
</section>

<style>
	section {
		display: grid;
		grid-auto-flow: column;
		grid-template-columns: 1fr 1fr;
		column-gap: 1rem;
		place-items: center;
		padding-left: 36px;
		padding-right: 36px;
		overflow: hidden;
		height: 256px;
	}

	section > .col-left > h2 {
		color: #012d48;
		font-size: max(24px, 4vw);
		font-weight: bold;
		line-height: max(25px, 4vw);
		margin-bottom: -8px;
	}

	section > .col-right {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	@media screen and (width < 320px) {
		section {
			display: flex;
			justify-content: center;
			padding-left: 0;
			padding-right: 0;
		}

		section > .col-right {
			display: none;
		}
	}

	section > .col-left > a {
		border: none;
		border-radius: 16px;
		padding: 0.5rem;
		color: #fcfcfc;
		font-size: 12px;
		--bg: #2b7292;
		background-color: var(--bg);
		transition: background-color 0.5s;
	}

	section > .col-left > a:hover,
	section > .col-left > a:focus {
		--bg: #6195bc;
	}

	section > .col-right > img {
		max-width: min(100%, 240px);
	}
</style>
