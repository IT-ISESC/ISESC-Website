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
	<h1 class="text-3xl font-bold text-primary-blue">Normal Withdraw</h1>
</div>

<div class="mt-5 flex flex-col items-center">
	<div class="flex w-[337px] flex-col items-start space-y-[15px]">
		<!-- Bullet components -->
		<BulletPoint
			text='Log in to <a href="https://www2.reg.chula.ac.th/" class="text-[#2B7292] underline hover:no-underline" target="_blank" rel="noopener noreferrer">www.reg.chula.ac.th</a> and choose the menu “Request for Course Withdrawal”'
		/>
		<BulletPoint
			text="Select the course you want to withdraw, click “SAVE”, then click “PRINT CR48”"
		/>
		<BulletPoint text="Print out the document and sign your signature" />
		<BulletPoint text="Send the document to your advisor and course lecturer for signatures" />
        <BulletPoint text="Send the document to the Faculty’s registrar office via email: pimchanok.p@chula.ac.th and CC sittipun.eng@gmail.com" />
        <BulletPoint text="You can check the result of your withdrawal in RegChula in the “Student Registration Result” menu" />
	</div>
</div>
