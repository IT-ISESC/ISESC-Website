<script>
	import Cards from '$lib/components/ui/cards/Cards.svelte';
</script>

<div class="mt-10 flex items-center justify-center">
	<h1 class="text-3xl font-bold text-primary-blue">Academic System</h1>
</div>

<div class="mt-5 flex flex-col items-center">
	<div class="flex w-[337px] flex-col items-start space-y-[5px]">
		<p class="mb-2 ml-1 text-[16px] font-bold text-[#9CABB4]">Registration Problems</p>

		<!-- Cards components -->
		<Cards topic="Course Full" link="academic/registration-problems/course-full" />
		<Cards topic="Late Course Adding" link="/academic/registration-problems/late-course-adding" />
		<Cards
			topic="S/U or V/W Registration"
			link="/academic/registration-problems/s-u-or-v-w-registration"
		/>
	</div>
</div>

<div class="mt-5 flex flex-col items-center">
	<div class="flex w-[337px] flex-col items-start space-y-[5px]">
		<p class="mb-2 ml-1 text-[16px] font-bold text-[#9CABB4]">Withdrawal</p>

		<!-- Cards components -->
		<Cards topic="Normal Withdraw" link="academic/withdrawal/normal-withdraw" />
		<Cards topic="Late Course Withdrawal" link="/academic/withdrawal/late-course-withdrawal" />
	</div>
</div>

<div class="mt-5 flex flex-col items-center">
	<div class="flex w-[337px] flex-col items-start space-y-[5px]">
		<p class="mb-2 ml-1 text-[16px] font-bold text-[#9CABB4]">Grade/Scores Review</p>

		<!-- Cards components -->
		<Cards topic="Grade Appeal Form" link="academic/grade-scores-review/grade-appeal-form" />
		<Cards topic="Exam Reviewing" link="/academic/grade-scores-review/exam-reviewing" />
	</div>
</div>

<div class="mt-5 flex flex-col items-center">
	<div class="flex w-[337px] flex-col items-start space-y-[5px]">
		<p class="mb-2 ml-1 text-[16px] font-bold text-[#9CABB4]">Exams Conflict</p>

		<!-- Cards components -->
		<Cards topic="Midterm Exam Conflict" link="academic/exams-conflict" />
		<Cards topic="Final Exam Conflict" link="academic/exams-conflict" />
	</div>
</div>