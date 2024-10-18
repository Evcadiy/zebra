<script lang="ts">
  import avatar from "../../../../assets/icons/avatar.svg"
  import arrowDownIcon from "../../../../assets/icons/arrowdown.svg"
  import registerIcon from "../../../../assets/icons/register.svg"
  import signInIcon from "../../../../assets/icons/signin.svg"
  import { onMount, onDestroy } from "svelte"

  let isOpen = false
  let dropdownElement: HTMLElement | null = null

  const toggleMenu = () => {
    isOpen = !isOpen
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
      isOpen = false
    }
  }

  onMount(() => {
    if (typeof document !== "undefined") {
      document.addEventListener("click", handleClickOutside)
    }
  })

  onDestroy(() => {
    if (typeof document !== "undefined") {
      document.removeEventListener("click", handleClickOutside)
    }
  })
</script>

<div class="hidden relative md:block" bind:this={dropdownElement}>
  <button class="flex items-center justify-center gap-2" on:click={toggleMenu}>
    <img src={avatar} alt="avatar" class="w-10 opacity-50" />
    <img src={arrowDownIcon} alt="dropdown" class="w-4 opacity-50" />
  </button>

  {#if isOpen}
    <div
      class="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg transition-opacity duration-300 ease-in-out opacity-100 z-10"
    >
      <ul class="flex flex-col">
        <li
          class="flex items-center p-2 hover:bg-gray-100 cursor-pointer font-figtree"
        >
          <img src={signInIcon} alt="Sign In" class="w-4 h-4 mr-2" />
          Sign In
        </li>
        <li
          class="flex items-center p-2 hover:bg-gray-100 cursor-pointer font-figtree"
        >
          <img src={registerIcon} alt="Register" class="w-4 h-4 mr-2" />
          Register
        </li>
      </ul>
    </div>
  {/if}
</div>
