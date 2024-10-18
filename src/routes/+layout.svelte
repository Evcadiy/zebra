<script>
  import Header from "$lib/components/Header/Header.svelte"
  import LoadingBar from "$lib/components/LoadingBar/LoadingBar.svelte"
  import { onMount } from "svelte"
  import "../styles/app.css"

  let isLoading = true

  onMount(() => {
    isLoading = false
  })
</script>

<LoadingBar loading={isLoading} />
<Header />
<slot />
