<script>
  import logo from "../../../assets/icons/logo.svg"
  import HeaderBurgerMenu from "./HeaderBurgerMenu/HeaderBurgerMenu.svelte"
  import HeaderDropdown from "./HeaderDropdown/HeaderDropdown.svelte"
  import HeaderNavList from "./HeaderNavList/HeaderNavList.svelte"
</script>

<section class="fixed top-0 left-0 w-full bg-white z-10">
  <header
    class="container h-16 max-w-[80rem] flex items-center justify-between"
  >
    <a href="/" class="hover:opacity-50 transition-opacity duration-300"
      ><img src={logo} alt="logo" class="w-10 flex items-center" /></a
    >
    <HeaderNavList />
    <HeaderDropdown />
    <HeaderBurgerMenu />
  </header>
</section>
