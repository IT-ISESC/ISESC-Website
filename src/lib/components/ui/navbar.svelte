<script>
	import ISESC_Logo from '$lib/assets/logo.png';
</script>

<div class="NavBar">
	<a href="/">
		<img alt="ISESC Logo" src={ISESC_Logo} />
	</a>
	<div class="Links">
		<a href="/">Home</a>
		<a href="/directory">Academic</a>
		<a href="/news">News</a>
		<a href="/fun">Fun</a>
	</div>
</div>

<style>
	.NavBar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 25px 20px 10px 20px;
		color: #012d48;
	}

	.NavBar img {
		height: 25px;
	}

	.Links a {
		font-weight: bold;
		color: #012d48;
		text-decoration: none;
		margin-left: 20px;
		transition: 0.5s;
	}

	.Links a:hover {
		border-radius: 5px;
		background: #f2e8cf;
		padding: 0px 2.5px 0px 2.5px;
	}
</style>
