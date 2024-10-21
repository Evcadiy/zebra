<script>
  export let text
  let className = ""
  export { className as class }
</script>

<div
  class={`rounded-full px-3 py-1 text-xs md:text-base whitespace-nowrap ${className}`}
>
  {text}
</div>
