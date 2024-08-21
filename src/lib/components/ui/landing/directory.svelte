<script>
	import Planner from '$lib/assets/landing/planner.svg';
</script>

<section>
	<div class="col-left">
		<img src={Planner} alt="Planner" />
	</div>
	<div class="col-right">
		<h2>
			Professor <br />
			& Staff <br />
			Directory
		</h2>
		<br />
		<a href="/directory">Click Here to view</a>
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

	section > .col-left {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	section > .col-left > img {
		max-width: min(100%, 256px);
		transform: rotateZ(20deg);
	}

	section > .col-right > h2 {
		color: #012d48;
		font-size: max(24px, 4vw);
		font-weight: bold;
		line-height: max(25px, 4vw);
		margin-bottom: 5px;
	}

	section > .col-right > a {
		border: none;
		border-radius: 16px;
		padding: 0.5rem;
		color: #fcfcfc;
		font-size: 12px;
		--bg: #2b7292;
		background-color: var(--bg);
		transition: background-color 0.5s;
	}

	section > .col-right > a:hover,
	section > .col-right > a:focus {
		--bg: #6195bc;
	}

	@media screen and (width < 320px) {
		section {
			display: flex;
			justify-content: center;
			padding-left: 0;
			padding-right: 0;
		}

		section > .col-left {
			display: none;
		}
	}
</style>
