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
	<h1 class="text-3xl font-bold text-primary-blue">Late Course Adding</h1>
</div>

<div class="mt-5 flex flex-col items-center">
	<div class="flex w-[337px] flex-col items-start space-y-[5px]">
		<p class="mb-2 ml-1 text-[16px] font-bold text-[#2B7292]">Core Courses</p>
		<!-- Bullet components -->
		<BulletPoint
			text="Fill in the Request Form"
			subtext="Google Form : link (student email only)"
		/>
		<BulletPoint
			text="The Request form to register above credits document will be filled out automatically and sent to the student's email"
		/>
		<BulletPoint text="Send the document to your advisor for approval" />
		<BulletPoint text="Download the 2nd document and fill in accordingly" />
		<BulletPoint text="Send the 2nd document to the course lecturer for signature and approval" />
		<BulletPoint text="Submit the file at the ISE Office" />
	</div>
</div>
