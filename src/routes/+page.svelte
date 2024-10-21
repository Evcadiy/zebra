<script>
  import AboutAuthorCard from "$lib/components/AboutAuthorCard/AboutAuthorCard.svelte"
  import DiscordLink from "$lib/components/DiscordLink/DiscordLink.svelte"
  import Hero from "$lib/components/Hero/Hero.svelte"
  import IntroductionSection from "$lib/components/IntroductionSection/IntroductionSection.svelte"
  import LaunchStepsSection from "$lib/components/LaunchStepsSection/LaunchStepsSection.svelte"
  import PricingSection from "$lib/components/PricingSection/PricingSection.svelte"
  import ShowcaseSection from "$lib/components/ShowcaseSection/ShowcaseSection.svelte"
  import TimeEfficiencySection from "$lib/components/TimeEfficiencySection/TimeEfficiencySection.svelte"
  import UserReviewsSection from "$lib/components/UserReviewsSection/UserReviewsSection.svelte"
</script>

<section class="bg-gradient-to-b from-white to-[#f1f5f9]">
  <Hero />
  <main class="container-secondary">
    <IntroductionSection />
    <ShowcaseSection />
    <TimeEfficiencySection />
    <LaunchStepsSection />
    <AboutAuthorCard />
    <UserReviewsSection />
    <PricingSection />
    <DiscordLink />
  </main>
</section>
