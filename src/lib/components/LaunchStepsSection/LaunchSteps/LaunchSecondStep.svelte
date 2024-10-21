<script>
  import LaunchStepsItem from "../LaunchStepsItem/LaunchStepsItem.svelte"
  import launchIcon2 from "../../../../assets/icons/launchimage2.svg"
  import launchBigImage2 from "../../../../assets/images/launchbigimage2.png"
  import LaunchStepsCard from "../LaunchStepsCard/LaunchStepsCard.svelte"
  import gtpIcon from "../../../../assets/icons/chatgpticon.svg"
  import studyIcon from "../../../../assets/icons/studyicon.svg"
  import lawnIcon from "../../../../assets/icons/lawnicons.svg"
</script>

<LaunchStepsItem
  class="text-[#FF4500]"
  title="Find your niche audience on Reddit"
  text="Tap into the right communities with a curated list of subreddits. Get guidance on writing effective posts, use ChatGPT to critique your posts, and explore conveniently categorized subreddits to connect with your ideal audience."
  image={launchIcon2}
  bigImage={launchBigImage2}
>
  <div class="flex gap-2 md:gap-4 mt-12 mb-6 flex-wrap">
    <LaunchStepsCard image={studyIcon} text="How-to guide for your posts" />
    <LaunchStepsCard image={gtpIcon} text="ChatGPT critique prompt" />
    <LaunchStepsCard
      image={lawnIcon}
      text="Conviniently categorized subreddits"
    />
  </div>
</LaunchStepsItem>
