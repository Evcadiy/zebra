<script>
  import Hero from "$lib/components/Hero/Hero.svelte"
  import IntroductionSection from "$lib/components/IntroductionSection/IntroductionSection.svelte"
  import ShowcaseSection from "$lib/components/ShowcaseSection/ShowcaseSection.svelte"
</script>

<section class="bg-neutral-50">
  <Hero />
  <main class="container-secondary">
    <IntroductionSection />
    <ShowcaseSection />
  </main>
</section>
