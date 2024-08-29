<script>
	import { onMount } from 'svelte';

	onMount(() => {
		setTimeout(() => {
			window.location.href = '/staff-search';
		}, 1000); // Delay of 1000ms or 1 second
	});
</script>

<div id="container">
	<h1 id="title">Error 404 - Page Not Found</h1>
	<p id="subtitle">You will be redirected to the homepage shortly.</p>
	<p id="subtitle">
		If you are not redirected, <a href="/">click here</a>.
	</p>
</div>

<style>
	#container {
		text-align: center;
	}

	#title {
		margin-top: 50px;
		font-size: 70px;
	}

	#subtitle {
		font-size: 35px;
	}
	#subtitle a:hover {
		color: #012d48;
		text-decoration: underline;
	}

	@media (max-width: 480px) {
		#title {
			font-size: 35px;
		}
		#subtitle {
			font-size: 17.5px;
		}
	}
</style>
