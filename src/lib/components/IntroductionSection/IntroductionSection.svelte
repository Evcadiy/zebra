<script>
  import VideoBox from "../VideoBox/VideoBox.svelte"
  import IntroductionButton from "./IntroductionButton/IntroductionButton.svelte"
</script>

<section class="flex flex-col items-center text-center max-w-screen-lg">
  <h1
    class="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-balance"
  >
    Get the perfect product launch plan with Notion templates
  </h1>
  <p
    class="max-w-[600px] text-muted-foreground text-center text-pretty md:text-lg text-base mx-4 font-light mt-4 md:mt-8"
  >
    Reclaim hours of research time with comprehensive launch checklists and
    hand-curated marketing directories.
  </p>
  <div
    class="flex pr-6 rounded-lg bg-black hover:bg-opacity-70 hover:cursor-pointer transition-bg-opacity duration-300 items-center text-white flex-wrap mt-14"
  >
    <a
      href="/"
      class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-70 hover:no-underline disabled:pointer-events-none text-primary-foreground shadow-sm px-6 [&>svg]:h-4 [&>svg]:w-4 rounded-lg h-12 md:h-14 text-base md:text-lg md:w-auto"
      >Get full access</a
    >
    <div
      class="bg-red-500 text-destructive-foreground rounded-full px-2 py-0.5 md:py-1 md:text-sm ml-1 text-xs md:sm"
    >
      40% OFF
    </div>
  </div>
  <p class="mt-4 text-muted-foreground text-sm">
    Last discount for early-customers ends in <span
      class="text-red-400 font-medium">3d 20h 30m 48s</span
    >
  </p>
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
