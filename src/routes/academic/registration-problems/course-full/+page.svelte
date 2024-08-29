<script>
	import BulletPoint from '$lib/components/ui/page-info/BulletPoint.svelte';

	function handleBackClick() {
		// Navigate to the previous page
		window.history.back();
	}
</script>

<button
	on:click={handleBackClick}
	class="left-4p-2 absolute top-4 ml-5 mt-16 flex items-center justify-center rounded-full text-[#2B7292]"
>
	<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5">
		<path
			d="M12 6l-6 6 6 6"
			stroke="#2B7292"
			stroke-width="2"
			fill="none"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</button>

<div class="mt-10 flex items-center justify-center">
	<h1 class="text-3xl font-bold text-primary-blue">Course Full</h1>
</div>

<div class="mt-5 flex flex-col items-center">
	<div class="flex w-[337px] flex-col items-start space-y-[15px]">
		<p class="mb-2 ml-1 text-[16px] font-bold text-[#2B7292]">Core Courses</p>

		<!-- Bullet components -->
		<BulletPoint text="Contact the course’s lecturer for permission to take the course" />
		<BulletPoint
			text="The lecturer will contact the ISE Office directly to open up more spaces in the course"
		/>
		<BulletPoint text="When the course open, register the course in RegChula" />
	</div>
</div>

<div class="mt-5 flex flex-col items-center">
	<div class="flex w-[337px] flex-col items-start space-y-[5px]">
		<p class="-mb-2 ml-1 text-[16px] font-bold text-[#2B7292]">Approved Electives</p>
		<p class="ml-1 text-[12px] font-bold text-[#2B7292]" style="margin-bottom: 8px;">
			(courses denoted with ‘*’)
		</p>
		<!-- Bullet components -->
		<BulletPoint text="Students may request form samples at at the ISE Office Only" />
	</div>
</div>
