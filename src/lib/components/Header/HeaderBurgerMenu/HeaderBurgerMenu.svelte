<script>
  import burgerMenuIcon from "../../../../assets/icons/burgermenu.svg"
  import HeaderNavItem from "../HeaderNavItem/HeaderNavItem.svelte"
  import crossIcon from "../../../../assets/icons/cross.svg"

  let isOpen = false

  const toggleMenu = () => {
    isOpen = !isOpen
  }
</script>

<section class="block md:hidden">
  <button class="flex items-center justify-center gap-2" on:click={toggleMenu}>
    <img src={isOpen ? crossIcon : burgerMenuIcon} alt="menu" class="w-10" />
  </button>

  {#if isOpen}
    <div
      class="absolute left-0 right-0 top-full w-full bg-white shadow-lg transition-opacity duration-300 ease-in-out z-10 border-t-[1px] border-gray-200 bg-opacity-95"
    >
      <ul class="flex flex-col p-1">
        <div class="p-2"><HeaderNavItem text="Intro" /></div>
        <div class="p-2"><HeaderNavItem text="Features" /></div>
        <div class="p-2"><HeaderNavItem text="Pricing" /></div>
        <div class="p-2"><HeaderNavItem text="Testimonials" /></div>
        <div class="p-2"><HeaderNavItem text="Discover" /></div>
        <div class="p-2"><HeaderNavItem text="Sign In" /></div>
        <div class="p-2"><HeaderNavItem text="Register" /></div>
      </ul>
    </div>
  {/if}
</section>
