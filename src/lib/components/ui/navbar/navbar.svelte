<script>
	import ISESC_Logo from '$lib/assets/logo.png';
</script>

<div class="NavBar">
	<img alt="ISESC Logo" src={ISESC_Logo} />
	<div class="Links">
		<a href="/">Home</a>
		<a href="/directory">Academic</a>
		<a href="/news">News</a>
	</div>
</div>

<style>
	.NavBar {
		display: flex;
		justify-content: center;
		vertical-align: middle;
		margin: auto;
		width: 80%;
		gap: 20px;
		color: #012d48;
		font-size: 20px;
		font-weight: bold;
		margin-top: 10px;
	}
	.Links {
		display: flex;
		justify-content: flex-end;
		gap: 20px;
	}
	.Links a:hover {
		border-radius: 5px;
		background: #f2e8cf;
		padding: 0px 5px 0px 5px;
	}

	.NavBar img {
		width: 25px;
		height: 25px;
	}
</style>
