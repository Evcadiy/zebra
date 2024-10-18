<script>
  import VideoBox from "../VideoBox/VideoBox.svelte"
  import HeroText from "./HeroText/HeroText.svelte"
</script>

<section
  class="w-screen pt-[64px] h-full lg:h-screen bg-gradient-to-b from-white to-[#f1f5f9]"
>
  <div
    class="container max-w-[95rem] mx-auto lg:flex flex-col flex-wrap items-center justify-center h-full"
  >
    <div class="lg:w-1/2">
      <HeroText />
    </div>
    <div class="lg:w-1/2 lg:pl-4 lg:pr-2 lg:pb-10">
      <VideoBox />
    </div>
  </div>
</section>
