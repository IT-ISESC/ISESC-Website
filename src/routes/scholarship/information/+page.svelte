<script>
	function handleBackClick() {
		window.history.back();
	}
</script>

<div class="container">
	<div class="flex justify-center space-x-2">
		<button on:click={handleBackClick} class="mr-5">
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
		<h1 class="text-2xl font-bold text-primary-blue">What are ISE Scholarships?</h1>
	</div>

	<br />
	<h2 class="mb-2 text-[16px] font-bold text-[#2B7292]">Types of Scholarships:</h2>
	<p>
		<strong>Academic Excellence Scholarship:</strong> Awarded to ISE students based on their academic
		performance and behavior. Only a few top-ranking candidates receive the Academic Excellence Scholarship
		each year. The scholarship is renewed automatically for the second semester of the grant year.
	</p>
	<p>
		<strong>Financial Crisis Scholarship:</strong> Awarded to ISE students facing immediate financial
		crises. The student's academic performance and behavior are also considered when granting this scholarship.
		The scholarship must be reapplied for each semester, along with relevant supporting documents.
	</p>

	<br />
	<h2 class="mb-2 text-[16px] font-bold text-[#2B7292]">Levels of Scholarships:</h2>
	<p>
		<strong>ISE50/CR50:</strong> Student receives a <strong>fifty percent program fee</strong> waiver.
	</p>
	<p><strong>ISE100/CR100:</strong> Student receives a <strong>full program fee</strong> waiver.</p>

	<br />
	<p>
		<i>
			Note: For ISE students, tuition fees will be approximately 21,000-25,000 baht per term, and
			program fees will be approximately 70,000-84,000 baht per term.
		</i>
	</p>
	<br />
</div>

<style>
	.container {
		max-width: 600px;
		color: #2b7292;
	}

	h2 {
		font-size: 20px;
	}
	p {
		font-size: 15px;
	}
</style>
