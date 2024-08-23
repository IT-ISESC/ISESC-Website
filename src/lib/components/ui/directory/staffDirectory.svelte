<script>
	import staff_dir from '$lib/assets/directory/staff_dir.svg';
</script>

<div id="staff">
	<span id="span_text">
		<h1>Staff Directory</h1>
		<!-- TODO Placeholder for a proper drop down menu and sorting system -->
		<p>Find the staff according to your topic!</p>
	</span>
	<img id="staff_dir" alt="Magnifying Glass" src={staff_dir} />
</div>

<style>
	#staff {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		position: relative;
		right: 65px;
		margin-bottom: 25px;
		position: relative;
		width: 320px;
	}

	#span_text {
		position: relative;
		z-index: 1;
	}

	#staff_dir {
		height: auto;
		position: absolute;
		left: 170px;
		top: -25px;
		z-index: -1;
		overflow: hidden;
	}

	h1 {
		width: 50px;
		color: #2b2b2b;
		font-size: 24px;
		font-weight: bold;
		line-height: 25px;
		margin-bottom: 5px;
	}

	p {
		color: white;
		font-weight: bold;
		font-size: 14px;
		width: 180px;
		margin-bottom: 5px;
		border-radius: 16px;
		border: 0px solid #000;
		background: #2b7292;
		padding: 5px 10px;
	}
</style>
