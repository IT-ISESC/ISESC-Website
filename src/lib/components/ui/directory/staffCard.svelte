<script>
	import no_staff from '$lib/assets/directory/staff_images/no_staff.svg';
</script>

<div id="idk">
	<div id="wrapper">
		<!-- svelte-ignore a11y_img_redundant_alt -->
		<img alt="Staff Image" src={no_staff} />
		<p id="nickname">P'Thames</p>
		<p id="fullname">Chiratt Chirarattanachan</p>
		<p id="tag">IT</p>
		<p id="role">Secretary ISESC</p>
	</div>
	<span id="shadowBox"> </span>
</div>

<style>
	#idk {
		position: relative;
	}

	#shadowBox {
		width: 135px;
		height: 200px;
		border-radius: 13.714px;
		background: #2b7292;
		box-shadow: 3px 4px 7.2px 0px rgba(0, 0, 0, 0.25);
		position: absolute;
		left: 15px;
		top: 5px;
		z-index: -1;
	}

	#wrapper {
		width: 135px;
		height: 200px;
		border-radius: 13.714px;
		background: #f6f6f3;
		box-shadow: 3px 4px 7.2px 0px rgba(0, 0, 0, 0.25);
		display: flex;
		flex-direction: column;
		margin: 10px;
		padding: 10px;
	}

	img {
		position: relative;
		top: 10px;
		width: 90px;
		align-self: center;
	}

	#nickname {
		font-size: 12px;
	}
	#fullname {
		font-size: 10px;
	}

	#tag {
		color: #f6f6f3;
		font-weight: bold;
		font-size: 10px;
		border-radius: 50px;
		background: #84140e;
		padding: 2.5px 10px 5px 10px;
		display: inline-block;
	}

	#role {
		color: #012d48;
		font-size: 12px;
		font-weight: bold;
	}
</style>
