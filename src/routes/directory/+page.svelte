<script>
	export const title = 'Home Page';
	import ProfessorDirectory from '$lib/components/ui/directory/professorDirectory.svelte';
	import StaffCard from '$lib/components/ui/directory/staffCard.svelte';
	import StaffDirectory from '$lib/components/ui/directory/staffDirectory.svelte';
</script>

<div class="flex flex-col items-center justify-center">
	<ProfessorDirectory />
	<hr class="bg-blue1 screens-sm:w-[85%] mx-auto my-[20px] h-px w-[600px] border-none" />
	<StaffDirectory />
</div>

<div class="screens-sm:w-[90%] mx-auto flex w-[600px] flex-wrap gap-4">
	<!-- <StaffCard nickname="" fullname="" tag="Academic Affairs" role="" /> -->
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
</div>
