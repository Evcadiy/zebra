<script>
  import PricingItem from "./PricingItem/PricingItem.svelte"
  import arrowRightIcon from "../../../assets/icons/arrowright.svg"
</script>

<div class="mt-32 md:mt-40">
  <h2
    class="text-4xl md:text-5xl font-bold text-center text-balance max-w-screen-md"
  >
    Save hours of research, launch your product now
  </h2>
  <p class="mt-4 text-center text-sm md:text-lg text-balance">
    Last discount for early-customers ends in <span
      class="text-red-400 font-medium">3d 20h 30m 48s</span
    >
  </p>
  <div class="flex gap-4 mt-16 md:flex-row justify-center">
    <div
      class="flex flex-col rounded-xl border w-72 sm:w-80 md:w-96 bg-[#e5e5e5] bg-opacity-30"
    >
      <div class="flex flex-col space-y-1.5 p-6 items-start">
        <h3 class="font-semibold tracking-tight text-2xl">Full access</h3>
      </div>
      <div class="p-6 pt-0 flex flex-col gap-2">
        <div class="flex gap-2 items-end">
          <p class="text-5xl font-semibold">$29</p>
          <span class="text-xl font-semibold text-neutral-500 line-through"
            >$49</span
          >
        </div>
        <p class="text-base text-muted-foreground">One-time payment</p>
        <p
          class="font-semibold bg-red-500 text-white rounded-full px-3 py-1 text-sm w-fit"
        >
          40% OFF - LAST CHANCE
        </p>
        <ul class="pl-1 mt-6">
          <PricingItem text="Complete launch checklist" />
          <PricingItem text="6 checklist categories" />
          <PricingItem text="35+ curated subreddits" />
          <PricingItem text="44+ product & backlink directories" />
          <PricingItem text="Reddit post guide" />
          <PricingItem text="ChatGPT post critique prompt" />
          <p class="mt-4 mb-1">Bonus content:</p>
          <PricingItem text="All future updates" />
          <PricingItem text="Request new subreddit categories" />
        </ul>
      </div>
      <div class="flex items-center p-6 pt-0">
        <a
          href="/"
          class="inline-flex items-center bg-black text-white justify-center gap-2 whitespace-nowrap font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-70 hover:bg-opacity-70 transition:bg-opacity duration-300 hover:no-underline disabled:pointer-events-none shadow-sm h-12 px-4 text-base rounded-md w-full"
          >Buy now
          <img
            src={arrowRightIcon}
            alt="arrow_right_icon"
            class="w-5 pl-1 text-white"
          />
        </a>
      </div>
    </div>
  </div>
</div>
