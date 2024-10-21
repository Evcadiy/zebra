<script>
  import Header from "$lib/components/Header/Header.svelte"
  import LoadingBar from "$lib/components/LoadingBar/LoadingBar.svelte"
  import { onMount } from "svelte"
  import "../styles/app.css"
  import Footer from "$lib/components/Footer/Footer.svelte"

  let isLoading = true

  onMount(() => {
    isLoading = false
  })
</script>

<LoadingBar loading={isLoading} />
<section class="bg-gradient-to-b from-white to-[#f1f5f9]">
  <Header />
  <slot />
  <Footer />
</section>
