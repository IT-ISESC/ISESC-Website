<script>
	import prof_dir from '$lib/assets/directory/prof_dir.svg';
</script>

<div id="professor">
	<img id="prof_dir" alt="Stack of Paper" src={prof_dir} />
	<span id="span_text">
		<h1>Professor Directory</h1>
		<p>Find your professors through our google sheet!</p>
		<a
			href="https://docs.google.com/spreadsheets/d/1nF9Eqpusd9Fl16sln1QYuV1WNxjPWDv3Pe1TwafwQWc/edit?gid=1164428359#gid=1164428359"
			>Click here to view</a
		>
	</span>
</div>

<style>
	#professor {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
	}

	#prof_dir {
		width: 160px;
	}

	#span_text {
		width: 160px;
		position: relative;
		z-index: 1;
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
		color: #2b2b2b;
		font-size: 13px;
		margin-bottom: 5px;
	}

	a {
		color: #fff;
		font-size: 14px;
		font-weight: bold;
		margin-bottom: 5px;
		border-radius: 16px;
		background: #2b7292;
		padding: 2.5px 10px 5px 10px;
	}
</style>
