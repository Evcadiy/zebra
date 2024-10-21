<script>
  export let title
  export let questionText
  export let index
  export let activeIndex
  export let setActiveIndex

  let contentRef
  let isOpen = false
  let contentHeight = "0px"

  const toggleAccordion = () => {
    if (index === activeIndex) {
      setActiveIndex(-1)
    } else {
      setActiveIndex(index)
    }
  }

  $: isOpen = index === activeIndex

  $: contentHeight = isOpen ? `${contentRef.scrollHeight}px` : "0px"
</script>

<div class="border-b">
  <h3 class="flex accordion-header">
    <button
      class="flex flex-1 gap-4 items-center text-left justify-between py-4 text-lg font-medium transition-all hover:underline"
      on:click={toggleAccordion}
    >
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 rotate {isOpen ? 'rotate-180' : ''}"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  </h3>
  <div
    bind:this={contentRef}
    class="accordion-content"
    style="height: {contentHeight}; transition: height
    0.3s ease;"
  >
    <div class="pb-4 pt-0">
      {questionText}
    </div>
  </div>
</div>

<style>
  .accordion-content {
    overflow: hidden;
  }

  .rotate {
    transition: transform 0.3s ease;
  }

  .rotate-180 {
    transform: rotate(180deg);
  }
</style>
