<script>
  import Hero from "$lib/components/Hero/Hero.svelte"
  import IntroductionSection from "$lib/components/IntroductionSection/IntroductionSection.svelte"
  import LaunchStepsSection from "$lib/components/LaunchStepsSection/LaunchStepsSection.svelte"
  import ShowcaseSection from "$lib/components/ShowcaseSection/ShowcaseSection.svelte"
  import TimeEfficiencySection from "$lib/components/TimeEfficiencySection/TimeEfficiencySection.svelte"
</script>

<section class="bg-neutral-50">
  <Hero />
  <main class="container-secondary">
    <IntroductionSection />
    <ShowcaseSection />
    <TimeEfficiencySection />
    <LaunchStepsSection />
  </main>
</section>
