<script>
	import Navbar from '$lib/components/ui/navbar.svelte';
	import ProfessorDirectory from '$lib/components/ui/directory/professorDirectory.svelte';
	import StaffDirectory from '$lib/components/ui/directory/staffDirectory.svelte';
</script>

<Navbar />
<ProfessorDirectory />
<StaffDirectory />

<hr />

<div id="info">
	<p>Info ...</p>
	<p>Info ...</p>
	<p>Info ...</p>
	<p>Info ...</p>
</div>

<style>
	hr {
		height: 1px;
		width: 85%;
		border: none;
		margin: 20px auto 20px auto;
		background-color: #2b7292;
	}
</style>
