<script>
  import BulletPoint from '$lib/components/ui/page-info/BulletPoint.svelte';

  function handleBackClick() {
    // Navigate to the previous page
    window.history.back();
  }
</script>
 
<button on:click={handleBackClick} class="absolute top-4 left-4p-2 rounded-full flex items-center justify-center text-[#2B7292] mt-16 ml-5">
    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5">
      <path d="M12 6l-6 6 6 6" stroke="#2B7292" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>

<div class="flex items-center justify-center mt-10">
  <h1 class="text-3xl font-bold text-primary-blue">Course Full</h1>
</div>

<div class="flex flex-col items-center mt-5">
  <div class="w-[337px] flex flex-col items-start space-y-[5px]">
      <p class="text-[16px] text-[#2B7292] font-bold mb-2 ml-1">Core Courses</p>

      <!-- Bullet components -->
      <BulletPoint text="Contact the course’s lecturer for permission to take the course"/>
      <BulletPoint text="The lecturer will contact the ISE Office directly to open up more spaces in the course"/>
      <BulletPoint text="When the course open, register the course in RegChula"/>
  </div>
</div>

<div class="flex flex-col items-center mt-5">
  <div class="w-[337px] flex flex-col items-start space-y-[5px]">
      <p class="text-[16px] text-[#2B7292] font-bold -mb-2 ml-1">Approved Electives</p>
      <p class="text-[12px] text-[#2B7292] font-bold ml-1 " style="margin-bottom: 8px;">(courses denoted with ‘*’)</p>
      <!-- Bullet components -->
      <BulletPoint text="Students may request form samples at at the ISE Office Only"/>
  </div>
</div>
