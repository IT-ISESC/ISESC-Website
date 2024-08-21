<script>
	export const title = 'Home Page';
	import ProfessorDirectory from '$lib/components/ui/directory/professorDirectory.svelte';
	import StaffCard from '$lib/components/ui/directory/staffCard.svelte';
	import StaffDirectory from '$lib/components/ui/directory/staffDirectory.svelte';
</script>

<div class="flex flex-col items-center justify-center">
	<ProfessorDirectory />
	<hr class="screens-sm:w-[85%] bg-blue1 mx-auto my-[20px] h-px w-full max-w-[600px] border-none" />
	<StaffDirectory />
</div>

<div class="screens-sm:w-[90%] mx-auto flex w-full max-w-[600px] flex-wrap justify-around">
	<!-- <StaffCard nickname="" fullname="" tag="Academic Affairs" role="" /> -->

	<!-- Academic Affairs -->
	<StaffCard
		nickname="Sorn"
		fullname="Suputtra Dachkun"
		tag="Academic Affairs"
		role="Head of Academics"
	/>
	<StaffCard
		nickname="Prinze"
		fullname="Sittipun Wunnasaen"
		tag="Academic Affairs"
		role="Registration Officer"
	/>

	<StaffCard
		nickname="Mik"
		fullname="Thanaphon Amattayakul"
		tag="Academic Affairs"
		role="Academic Officer"
	/>
	<StaffCard
		nickname="Poon"
		fullname="Punsita Bhuddhakulsomsri"
		tag="Academic Affairs"
		role="Academic Officer"
	/>
	<StaffCard
		nickname="Ploy"
		fullname="Panyata Sukyai"
		tag="Academic Affairs"
		role="Academic Officer"
	/>

	<!-- Administrative Affairs -->
</div>

<style>
	* {
		overflow: hidden;
	}
</style>
