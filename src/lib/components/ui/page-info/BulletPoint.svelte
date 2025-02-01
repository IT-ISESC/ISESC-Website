<script>
  export let text = "Info";
  export let subtext = ""; // Optional subtext
</script>

<div class="flex items-start">
  <!-- Bullet Point -->
  <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 mt-[3px]">
    <circle cx="7" cy="7" r="7" fill="#D9D9D9" />
  </svg>
  
  <!-- Text Info -->
  <div class="ml-2">
    <!-- Render text as HTML -->
    <p class="text-[14px] text-[#2B7292] font-medium">{@html text}</p>
    {#if subtext}
      <!-- Render subtext as HTML -->
      <p class="text-[12px] text-[#6997b6] font-medium">{@html subtext}</p>
    {/if}
  </div>
</div>
