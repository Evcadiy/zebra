<script>
  import CountdownTimer from "../CountdownTimer/CountdownTimer.svelte"
  import VideoBox from "../VideoBox/VideoBox.svelte"
  import IntroductionButton from "./IntroductionButton/IntroductionButton.svelte"
</script>

<section class="flex flex-col items-center text-center max-w-screen-lg">
  <div
    class="text-4xl opacity-75 md:text-5xl lg:text-7xl font-semibold text-center text-balance py-12 md:pb-32 md:pt-6"
  >
    Introducing <span class="text-[#7c3aed]"> Persumi</span>
  </div>
  <h1
    class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-balance"
  >
    Get the perfect product launch plan with Notion templates
  </h1>
  <p
    class="max-w-[600px] text-center text-pretty md:text-lg text-base mx-4 font-light mt-4 md:mt-8"
  >
    Reclaim hours of research time with comprehensive launch checklists and
    hand-curated marketing directories.
  </p>
  <div
    class="flex pr-6 rounded-lg bg-black hover:bg-opacity-70 hover:cursor-pointer transition-bg-opacity duration-300 items-center text-white flex-wrap mt-14"
  >
    <a
      href="/"
      class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-70 hover:no-underline disabled:pointer-events-none shadow-sm px-6 rounded-lg h-12 md:h-14 text-base md:text-lg md:w-auto"
      >Get full access</a
    >
    <div
      class="bg-red-500 rounded-full px-2 py-0.5 md:py-1 md:text-sm ml-1 text-xs md:sm"
    >
      40% OFF
    </div>
  </div>
  <CountdownTimer targetDate={"2025-01-01T00:00:00"} class="text-sm" />
  <div
    class="flex flex-col items-center justify-center gap-4 mt-12 text-left pb-10 md:pb-20"
  >
    <div class="flex gap-4">
      <div class="flex -space-x-3 overflow-hidden flex-shrink-0">
        <IntroductionButton
          src={"https://pbs.twimg.com/profile_images/1817575171907006464/voK08x_7_400x400.jpg"}
          alt="first member"
        />
        <IntroductionButton
          src={"https://pbs.twimg.com/profile_images/1831306216712110080/674w6KtS_400x400.jpg"}
          alt="second member"
        />
        <IntroductionButton
          src={"https://pbs.twimg.com/profile_images/1830918748439506958/E4cv0RQf_400x400.jpg"}
          alt="third member"
        />
        <IntroductionButton
          src={"https://pbs.twimg.com/profile_images/969648155829686273/dyuQeNEe_400x400.jpg"}
          alt="fourth member"
        />
        <IntroductionButton
          src={"https://pbs.twimg.com/profile_images/1807775662645858304/4xLprnNP_400x400.png"}
          alt="fifth member"
        />
      </div>
      <div class="flex flex-col text-sm justify-center">
        <div><span>Tested by <span class="font-bold">281</span></span></div>
        <div><span> founders and developers</span></div>
      </div>
    </div>
  </div>
  <VideoBox />
</section>
