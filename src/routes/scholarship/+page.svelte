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
		<a
			href="https://drive.google.com/file/d/1kZum-LZgcw3lsjDXKSJRrumCzGO_ERjD/view?usp=sharing"
			target="_blank"
			class="flex h-[50px] w-[337px] cursor-pointer items-center rounded-[20px] bg-[#EBF2F6] shadow-md"
		>
			<p class="ml-4 font-bold text-[#2B7292]">
				How to apply for a scholarship and documents checklist.
			</p>
		</a>
	</div>
</div>
