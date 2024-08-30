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
	<h1 class="text-3xl font-bold text-primary-blue">S/U or V/W Registration</h1>
</div>

<div class="mt-5 flex flex-col items-center">
	<div class="flex w-[337px] flex-col items-start space-y-[15px]">
		<!-- Bullet components -->
		<BulletPoint
			text="Fill in the Request Form"
			subtext='Google Form : <a href="https://docs.google.com/forms/d/e/1FAIpQLScmgKc7iH8h1iFefL-yMArThil3mtEpxR9Zhep9wYIuxPDqXg/viewform" class="text-[#6997b6] underline hover:no-underline" target="_blank" rel="noopener noreferrer">link</a>  (student email only)' />
		<BulletPoint
			text="The Request form to register above credits document will be filled out automatically and sent to the student's email"
            subtext='Example : <a href="https://drive.google.com/file/d/166PqswzZ50eIqSNVpIHqv_jy1grSV4aT/view" class="text-[#6997b6] underline hover:no-underline" target="_blank" rel="noopener noreferrer">PDF</a>' />
		<BulletPoint text="Send the document to your advisor and course lecturer for signatures" />
		<BulletPoint text="Submit the file at the ISE Office" />
	</div>
</div>
