<script>
	import ISESC_Logo from '$lib/assets/logo.png';
</script>

<div class="NavBar">
	<img alt="ISESC Logo" src={ISESC_Logo} />
	<div class="Links">
		<a href="/">Home</a>
		<a href="/academic">Academic</a>
		<a href="/directory">Directory</a>
		<a href="/news">News</a>
	</div>
</div>

<style>
	.NavBar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 25px 20px 10px 20px;
		color: #012d48;
		width: 600px;
		margin: auto;
	}

	.NavBar img {
		height: 25px;
	}

	.Links a {
		font-weight: bold;
		color: #012d48;
		text-decoration: none;
		margin-left: 10px;
	}

	.Links a:hover {
		border-radius: 5px;
		background: #f2e8cf;
		padding: 0px 5px 0px 5px;
	}

	@media (max-width: 640px) {
		.NavBar {
			width: 100%;
			margin: 0;
		}
	}
</style>
