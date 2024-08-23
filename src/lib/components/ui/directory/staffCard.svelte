<script>
	import no_staff from '$lib/assets/directory/staff_images/no_staff.svg';

	export let nickname = 'Missing';
	export let fullname = 'Missing';
	export let tag = 'Missing';
	export let role = 'Missing';
	export let image = no_staff;

	export let tagColor = '#84140e';
</script>

<div class="relative">
	<div id="wrapper">
		<!-- svelte-ignore a11y_img_redundant_alt -->
		<img alt="Staff Image" src={image} />
		<p id="nickname">P'{nickname}</p>
		<p id="fullname">{fullname}</p>
		<div class="mt-[-5px]">
			<p id="tag" style="--tag-background: {tagColor};">{tag}</p>
		</div>
		<p id="role">{role}</p>
	</div>
	<span id="shadowBox"> </span>
</div>

<style>
	#shadowBox {
		width: 135px;
		height: 200px;
		border-radius: 13.714px;
		background: #2b7292;
		box-shadow: 3px 4px 7.2px 0px rgba(0, 0, 0, 0.25);
		position: absolute;
		left: 15px;
		top: 15px;
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
		width: 90px;
		align-self: center;
	}

	#nickname {
		font-size: 12px;
	}
	#fullname {
		font-size: 9px;
		margin-top: -2.5px;
	}

	#tag {
		display: inline-block;
		bottom: 10px;

		color: #f6f6f3;
		font-weight: bold;
		font-size: 10px;

		border-radius: 50px;
		background: var(--tag-background);
		padding: 0px 5px 0px 5px;
	}

	#role {
		color: #012d48;
		font-size: 10px;
		font-weight: bold;
		margin-top: 0;
		line-height: 12.5px;
	}
</style>
