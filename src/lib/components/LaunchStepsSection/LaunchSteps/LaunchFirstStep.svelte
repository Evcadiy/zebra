<script>
  import LaunchStepsItem from "../LaunchStepsItem/LaunchStepsItem.svelte"
  import launchIcon1 from "../../../../assets/icons/launchicon1.svg"
  import launchBigImage1 from "../../../../assets/images/launchbigimage1.png"
  import LaunchStepsScrollList from "../LaunchStepsScrollList/LaunchStepsScrollList.svelte"
</script>

<LaunchStepsItem
  class="text-cyan-500"
  title="Don't miss a single launch step"
  text="Stay organized with a comprehensive task management Notion board that ensures all key areas are covered before going live. Simplify the launch process and avoid last-minute oversights by following each essential step."
  image={launchIcon1}
  bigImage={launchBigImage1}
>
  <div class="flex gap-2 flex-wrap mt-10 mb-6 lg:hidden">
    <LaunchStepsScrollList />
  </div>
  <div
    class="hidden self-center lg:w-full group mt-12 mb-6 lg:inline-flex flex-nowrap gap-4 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)]"
  >
    <div
      class="group-hover:paused flex gap-4 items-center animate-infinite-scroll"
    >
      <LaunchStepsScrollList />
    </div>
    <div
      class="group-hover:paused flex gap-4 items-center animate-infinite-scroll"
    >
      <LaunchStepsScrollList />
    </div>
  </div>
</LaunchStepsItem>

<style>
  @keyframes infinite-scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }

  .animate-infinite-scroll {
    animation: infinite-scroll 20s linear infinite;
    display: flex;
    white-space: nowrap;
  }

  .group:hover .animate-infinite-scroll {
    animation-play-state: paused;
  }
</style>
