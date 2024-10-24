<script>
  import VideoBox from "../VideoBox/VideoBox.svelte"
  import HeroText from "./HeroText/HeroText.svelte"
</script>

<section class="pt-[64px] h-full lg:h-screen">
  <div
    class="container max-w-[95rem] mx-auto lg:flex flex-col flex-wrap items-center justify-center h-full"
  >
    <div class="lg:w-1/2 xl:w-[37%]">
      <HeroText />
    </div>
    <div class="lg:w-1/2 xl:w-[63%] lg:pl-6 lg:pr-2 lg:pb-20 xl:pl-16">
      <VideoBox />
    </div>
  </div>
</section>
