<script>
	// @ts-nocheck

	export let searchTerm;
	import staff_dir from '$lib/assets/directory/staff_dir.svg';
	// export let tags;
	// export let selectedTag;
</script>

<div id="staff">
	<span id="span_text">
		<h1>Staff Directory</h1>
		<input
			type="text"
			id="search-field"
			placeholder="Search for your staff!"
			autocomplete="off"
			bind:value={searchTerm}
			on:input
		/>

		<!-- Dropdown menu for tags -->
		<!-- <section class="menu-cont">
			<select class="menu" name="menu" id="menu" bind:value={selectedTag}>
				<option disabled selected value="">Select a tag.</option>
				<option value="all">All tags</option>
				{#each tags as tag}
					<option value={tag}>{tag}</option>
				{/each}
			</select>
		</section> -->
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
		margin-top: 20px;
		margin-bottom: 40px;
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
		top: -40px;
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

	#search-field {
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
