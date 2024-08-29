<script>
	// @ts-nocheck

	import ProfessorDirectory from '$lib/components/ui/directory/professorDirectory.svelte';
	import { onMount } from 'svelte';
	import { staffData } from '$lib/components/ui/directory/search/staffData';
	import Search from '$lib/components/ui/directory/search/Search.svelte';
	import StaffCard from '$lib/components/ui/directory/search/Staff.svelte';

	// Get a list of tags
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

	// Filter by tags
	let filteredStaff = [];
	$: if (selectedTag) getStaffByTag();
	const getStaffByTag = () => {
		searchTerm = '';
		if (selectedTag === 'all') {
			return (filteredStaff = []);
		}
		return (filteredStaff = staffData.filter((staff) => staff.tag === selectedTag));
	};

	// Filter by search terms
	let searchTerm = '';
	$: if (searchTerm) selectedTag = '';

	const searchStaff = () => {
		return (filteredStaff = staffData.filter((staff) => {
			// Get all the fields to search by
			let keyword = staff.keywords.toLowerCase();
			let nickname = staff.nickname.toLowerCase();
			let fullname = staff.fullname.toLowerCase();
			let tag = staff.tag.toLowerCase();
			let role = staff.role.toLowerCase();

			// Check if the search term matches any of the fields
			return (
				keyword.includes(searchTerm.toLowerCase()) ||
				nickname.includes(searchTerm.toLowerCase()) ||
				fullname.includes(searchTerm.toLowerCase()) ||
				tag.includes(searchTerm.toLowerCase()) ||
				role.includes(searchTerm.toLowerCase())
			);
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
			<StaffCard {nickname} {fullname} {tag} {role} {tagColor} {image} />
		{/each}
	{:else}
		{#each staffData as { nickname, fullname, tag, tagColor, role, image }}
			<StaffCard {nickname} {fullname} {tag} {role} {tagColor} {image} />
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
