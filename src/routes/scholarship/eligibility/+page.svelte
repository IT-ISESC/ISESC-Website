<script>
	import BulletPoint from '$lib/components/ui/page-info/BulletPoint.svelte';

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
		<h1 class="text-2xl font-bold text-primary-blue">Eligibility and Work Hours</h1>
	</div>

	<br />
	<h2 class="mb-2 text-[16px] font-bold text-secondary-blue">
		Conditions to Maintain the Scholarships:
	</h2>
	<span>
		<BulletPoint
			text="Students must work at least 8 hours per week as assigned by the ISE Office during the school year (Work Study)."
		/>
		<BulletPoint
			text="Students must maintain student status and must not take academic leave during the assistantship period."
		/>
		<BulletPoint
			text="Students must not violate any rules, regulations, or codes of conduct outlined by both the Faculty of Engineering and Chulalongkorn University."
		/>
		<BulletPoint
			text="Students must maintain a yearly cumulative grade point average above 3.25 (calculated at the end of the second semester each year) for ISE50 and a cumulative grade point average above 3.60 for ISE100."
		/>
	</span>

	<br />
	<h2 class="mb-2 text-[16px] font-bold text-secondary-blue">
		Determination of Working Hours for ISE Scholarship Students:
	</h2>
	<span>
		<BulletPoint
			text="Work assigned by the faculty, including research, TA (teacher assistant), tutor, faculty project work, etc."
		/>
		<BulletPoint
			text="Student affairs work, such as university activities assigned by the university or faculty."
		/>
		<BulletPoint
			text="Faculty public relations work, such as booth arrangement, guidance, and both internal public relations and university work. Set hours credit to your actual workplace, excluding travel and overnight time."
		/>
		<BulletPoint
			text="Administrative work, including library work, registration work, and document preparation work."
		/>
		<BulletPoint
			text="Other activities on behalf of the university or faculty, such as preparing for welcoming guests of the faculty or conducting guided tours of places or activities on campus."
		/>
	</span>

	<br />
	<h2 class="text-[16px] font-bold text-secondary-blue">
		Unofficial Grades of those who received the scholarship in 2023AY:
	</h2>

	<!-- TODO: CSS for the table -->
	<div class="flex justify-center">
		<table>
			<thead>
				<tr>
					<th></th>
					<th>ADME</th>
					<th>AERO</th>
					<th>AI</th>
					<th>ICE</th>
					<th>NANO</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>2nd Year</td>
					<td>3.40</td>
					<td>3.4X</td>
					<td>3.68</td>
					<td>3.72</td>
					<td>3.28</td>
				</tr>
			</tbody>
		</table>
	</div>
	<br />
</div>

<style>
	.container {
		max-width: 600px;
	}

	table {
		width: 60%;
		margin: 20px auto;
		font-size: 12px;
		text-align: center;
		font-family: inter;
	}

	th,
	td {
		border: 1px solid #ddd;
		padding: 10px;
	}

	th {
		background-color: #6195bc;
		color: white;
		font-weight: bold;
	}
</style>
