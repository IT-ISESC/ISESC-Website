<script>
	import ProfessorDirectory from '$lib/components/ui/directory/professorDirectory.svelte';
	import StaffCard from '$lib/components/ui/directory/staffCard.svelte';
	import StaffDirectory from '$lib/components/ui/directory/staffDirectory.svelte';
</script>

<div id="directories">
	<ProfessorDirectory />
	<hr />
	<StaffDirectory />
</div>

<div>
	<StaffCard />
</div>

<style>
	hr {
		height: 1px;
		width: 85%;
		border: none;
		margin: 20px auto 20px auto;
		background-color: #2b7292;
	}

	#directories {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
</style>
