<script>
	// @ts-nocheck

	import ProfessorDirectory from '$lib/components/ui/directory/professorDirectory.svelte';
	// import StaffCard from '$lib/components/ui/directory/staffCard.svelte';
	import StaffDirectory from '$lib/components/ui/directory/staffDirectory.svelte';

	import { onMount } from 'svelte';
	import { staffData } from './staffData';
	import Search from './Search.svelte';
	import StaffCard from './Staff.svelte';
	import Staff from './Staff.svelte';

	let tags = [];
	let selectedTag = '';
	const getTags = () => {
		for (let tagObj of staffData) {
			if (!tags.includes(tagObj.tag)) {
				tags = [...tags, tagObj.tag];
			}
		}
		tags = tags.sort();
	};
	onMount(() => getTags());

	let filteredStaff = [];
	$: if (selectedTag) getStaffByTag();
	const getStaffByTag = () => {
		searchTerm = '';
		if (selectedTag === 'all') {
			return (filteredStaff = []);
		}
		return (filteredStaff = staffData.filter((staff) => staff.tag === selectedTag));
	};

	let searchTerm = '';
	$: if (searchTerm) selectedTag = '';
	const searchStaff = () => {
		return (filteredStaff = staffData.filter((staff) => {
			// TODO Find what to search by
			let staffName = staff.fullname.toLowerCase();
			return staffName.includes(searchTerm.toLowerCase());
		}));
	};
</script>

<div class="flex flex-col items-center justify-center">
	<ProfessorDirectory />
	<hr class="hr-custom bg-secondary-blue" />
	<Search bind:searchTerm on:input={searchStaff} {tags} bind:selectedTag />
</div>

<main class="screens-sm:w-[90%] mx-auto flex w-full max-w-[750px] flex-wrap justify-around">
	{#if searchTerm && filteredStaff.length === 0}
		<h1>No Results</h1>
	{:else if filteredStaff.length > 0}
		{#each filteredStaff as { nickname, fullname, tag, tagColor, role, image }}
			<Staff {nickname} {fullname} {tag} {role} />
		{/each}
	{:else}
		{#each staffData as { nickname, fullname, tag, tagColor, role, image }}
			<Staff {nickname} {fullname} {tag} {role} />
		{/each}
	{/if}
</main>

<style>
	* {
		overflow: hidden;
	}

	.hr-custom {
		width: 100%;
		max-width: 800px;
		height: 1px;
		border: none;
		margin: 20px auto;
	}

	@media (max-width: 800px) {
		.hr-custom {
			width: 85%;
		}
	}
</style>
