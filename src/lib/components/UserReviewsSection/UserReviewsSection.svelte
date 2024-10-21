<script>
  import UserReviewsCard from "./UserReviewsCard/UserReviewsCard.svelte"
  import avatarInCircle1 from "../../../assets/images/avatarincircle1.png"
</script>

<h1
  class="text-4xl md:text-5xl font-bold text-center text-balance max-w-screen-md mt-36"
>
  What users say?
</h1>
<p
  class="text-center text-base md:text-lg text-muted-foreground mt-4 text-balance"
>
  Don't trust the sales pitch? Here is what real customers are saying.
</p>
<div
  class="flex gap-6 mt-12 py-6 px-5 md:px-12 w-screen min-w-0 overflow-x-scroll h-full"
>
  <UserReviewsCard
    text="Since I’m long time in development but really new to marketing I like the list of possible channels to market and promote your app!"
    name="Alex Sinelnikov"
    avatar="https://pbs.twimg.com/profile_images/1838806682488410112/nyIadMA-_400x400.jpg"
    class="rotate-1"
  />
  <UserReviewsCard
    text="This is a must-have for anyone building, launching and building back links. It gave me directions when I was lost."
    name="Lewis"
    avatar="https://pbs.twimg.com/profile_images/1787406197269655552/UbuhJ2Hs_400x400.jpg"
    class="-rotate-2"
  />
  <UserReviewsCard
    text="Highly recommend before this amazing guy knows how valuable his product is and raises the price"
    name="Truong Vi"
    avatar={avatarInCircle1}
    id={3}
    class="rotate-3"
  />
  <UserReviewsCard
    text="The workspace is well-crafted and organized, with clear preparation steps and a fantastic collection of resources. It saved me a ton of time, and I’m truly grateful for that!"
    name="Denis Butko"
    avatar="https://pbs.twimg.com/profile_images/1831331276596645888/3LTLJ9B1_400x400.jpg"
    class="-rotate-1"
  />
  <UserReviewsCard
    text="Starting out is always the hardest part. Having a proven guide like DevBlocks is a game changer for overcoming that initial hurdle! For the price, I can’t recommend it enough"
    name="Miguel"
    avatar="https://pbs.twimg.com/profile_images/1807775662645858304/4xLprnNP_400x400.png"
    class="rotate-1"
  />
</div>
