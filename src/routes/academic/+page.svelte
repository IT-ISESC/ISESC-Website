<script>
    import Cards from '$lib/components/ui/cards/Cards.svelte';
</script>

<div class="flex items-center justify-center mt-10">
    <h1 class="text-3xl font-bold text-primary-blue">Academic System</h1>
</div>

<div class="flex flex-col items-center mt-5">
    <div class="w-[337px] flex flex-col items-start space-y-[5px]">
        <p class="text-[16px] text-[#9CABB4] font-bold mb-2 ml-1">Registration Problems</p>

        <!-- Cards components -->
        <Cards topic="Course Full" link="academic/registration-problems/course-full" />
        <Cards topic="Late Course Adding" link="/academic/registration-problems/late-course-adding" />
        <Cards topic="Registering Course Above Credits" link="/academic/registration-problems/registering-course-above-credits" />
        <Cards topic="S/U or V/W Registration" link="/academic/registration-problems/s-u-or-v-w-registration" />
    </div>
</div>
