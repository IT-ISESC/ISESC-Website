<script>
	import Cards from '$lib/components/ui/cards/Cards.svelte';
</script>

<div class="mt-10 flex items-center justify-center">
	<h1 class="text-3xl font-bold text-primary-blue">Scholarship</h1>
</div>

<div class="mt-5 flex flex-col items-center">
	<div class="flex w-[337px] flex-col items-start space-y-[5px]">
		<Cards topic="What are ISE Scholarships?" link="scholarship/information" />
		<Cards
			topic="How to be eligible for a scholarship and what are working hours?"
			link="scholarship/eligibility"
		/>
		<Cards
			topic="How to apply for a scholarship and documents checklist."
			link="scholarship/apply"
		/>
	</div>
</div>
