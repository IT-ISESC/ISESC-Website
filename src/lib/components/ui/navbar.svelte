<script>
	import ISESC_Logo from '$lib/assets/logo/logo.svg';
</script>

<div class="NavBarContainer">
	<div class="NavBar">
		<img alt="ISESC Logo" src={ISESC_Logo} />
		<div class="Links">
			<a href="/">Home</a>
			<div class="dropdown">
				<button>Academic</button>
				<div class="content">
					<a href="/academic">Academic System</a>
					<hr />
					<a href="/scholarship">Scholarship</a>
					<hr />
					<a href="/directory">Professor & Staff Directory</a>
				</div>
			</div>
			<a href="/news">News</a>
		</div>
	</div>
</div>
<div style="height:70px"></div>

<style>
	.NavBarContainer {
		width: 100%;
		height: 70px;
		background-color: white;
		position: fixed;
		top: 0;
		z-index: 1000;
	}

	.dropdown button {
		cursor: pointer;
		border-radius: 5px;
		padding: 0px 5px 0px 5px;
	}

	.dropdown button:hover {
		border-radius: 5px;
		background: #f2e8cf;
		padding: 0px 5px 0px 5px;
	}

	.dropdown:hover .content {
		display: block;
	}

	.dropdown a {
		display: block;
		margin-left: 0px !important;
		padding-left: 10px;
		background-color: #2b7292;
		color: #ffffff !important;
		z-index: 1000;
		border-radius: 0px !important;
	}

	.dropdown a:hover {
		background: #f2e8cf;
		color: #012d48 !important;
		border-radius: 0px !important;
	}

	.dropdown .content {
		display: none;
		position: absolute;
		width: 150px;
		box-shadow: 2px 2px 5px #012d48;
	}

	.NavBar {
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 25px 20px 10px 20px;
		color: #012d48;
		width: 800px;

		background-color: white;
		z-index: 1000;
		position: fixed;

		left: 50%;
		transform: translateX(-50%);
	}

	.NavBar img {
		height: 25px;
	}

	.Links {
		display: flex;
	}

	.Links button {
		font-weight: bold;
		color: #012d48;
		margin-left: 20px;
	}

	.Links a {
		font-weight: bold;
		color: #012d48;
		text-decoration: none;
		margin-left: 20px;
		border-radius: 5px;
		padding: 0px 5px 0px 5px;
	}

	.Links a:hover {
		border-radius: 5px;
		background: #f2e8cf;
		padding: 0px 5px 0px 5px;
	}

	@media (max-width: 800px) {
		.NavBar {
			width: 100%;
			margin: 0;
		}
	}
</style>
