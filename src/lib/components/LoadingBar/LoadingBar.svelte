<script lang="ts">
  export let loading = false
</script>

<div class="fixed top-0 left-0 w-full z-50">
  {#if loading}
    <div class="loading-bar"></div>
  {/if}
</div>

<style>
  .loading-bar {
    height: 3px;
    background-color: #9b59b6;
    width: 100%;
    animation: loading 2s linear infinite;
  }

  @keyframes loading {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
</style>
