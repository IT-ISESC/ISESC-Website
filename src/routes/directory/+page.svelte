<script>
	export const title = 'Home Page';
	import ProfessorDirectory from '$lib/components/ui/directory/professorDirectory.svelte';
	import StaffCard from '$lib/components/ui/directory/staffCard.svelte';
	import StaffDirectory from '$lib/components/ui/directory/staffDirectory.svelte';
</script>

<div class="flex flex-col items-center justify-center">
	<ProfessorDirectory />
	<hr class="hr-custom bg-secondary-blue" />

	<StaffDirectory />
</div>
<br />
<div class="screens-sm:w-[90%] mx-auto flex w-full max-w-[750px] flex-wrap justify-around">
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
	<StaffCard
		nickname="New"
		fullname="Sasiwipa Phurikantinet"
		tag="Administrative Affairs"
		role="Head of ISE Office & Administrative Affairs"
		tagColor="#d4a314"
	/>
	<StaffCard
		nickname="Plai"
		fullname="Jirasaya Chan-on"
		tag="Administrative Affairs"
		role="Finance & Accounting Officer"
		tagColor="#d4a314"
	/>
	<StaffCard
		nickname="Pueng"
		fullname="Sawarach Suphaporn"
		tag="Administrative Affairs"
		role="Finance & Accounting Officer"
		tagColor="#d4a314"
	/>
	<StaffCard
		nickname="Net"
		fullname="Supaphan Pattamanate"
		tag="Administrative Affairs"
		role="Head of Finance & Accounting"
		tagColor="#d4a314"
	/>
	<StaffCard nickname="Boat" tagColor="#d4a314" />
	<StaffCard nickname="Prae" tagColor="#d4a314" />
	<StaffCard
		nickname="O"
		fullname="Supatcharin Namvothee"
		tag="Administrative Affairs"
		role="Human Resource Officer"
		tagColor="#d4a314"
	/>
	<StaffCard
		nickname="Ple"
		fullname="Phachphicha Pliansanae"
		tag="Administrative Affairs"
		role="Office Administration Officer"
		tagColor="#d4a314"
	/>

	<!-- International Services -->
	<StaffCard
		nickname="Bobby"
		fullname="Nattanan Sritabovornpaiboon"
		tag="International Services"
		role="Accreditation Officer"
		tagColor="#148442"
	/>
	<StaffCard
		nickname="Fon"
		fullname="Fonthong Tangjitwatanakul"
		tag="International Services"
		role="International Service Officer"
		tagColor="#148442"
	/>

	<!-- Student Affairs and Public Relations -->
	<StaffCard
		nickname="Bam"
		fullname="Waranya Phana-ngam"
		tag="Student Affairs & PR"
		role="PR & Marketing Specialist Officer"
		tagColor="#146a84"
	/>
	<StaffCard
		nickname="First"
		fullname="Pamigar Muangpun"
		tag="Student Affairs & PR"
		role="PR & Marketing Specialist Officer"
		tagColor="#146a84"
	/>
</div>

<style>
	* {
		overflow: hidden;
	}

	.hr-custom {
		width: 100%;
		max-width: 800px;
		height: 1px;
		/* background-color: var(--secondary-blue); */
		border: none;
		margin: 20px auto;
	}

	@media (max-width: 800px) {
		.hr-custom {
			width: 85%;
		}
	}
</style>
