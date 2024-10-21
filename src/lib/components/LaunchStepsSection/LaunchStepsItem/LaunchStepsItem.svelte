<script>
  export let title
  export let text
  export let image
  export let bigImage
  let className
  export { className as class }
</script>

<section class="flex flex-col">
  <div class="flex justify-between gap-32 items-center">
    <div class="flex flex-col gap-4 text-left">
      <h2 class={`text-4xl font-bold text-balance ${className}`}>{title}</h2>
      <p>{text}</p>
    </div>
    <img
      class="mr-24 hidden md:block"
      height="100"
      width="200"
      alt="launch_image"
      style="color: transparent;"
      src={image}
    />
  </div>
  <slot />
  <div
    class="p-2 bg-white flex-shrink-0 drop-shadow-xl rounded-xl max-w-screen-lg"
  >
    <img
      src={bigImage}
      alt="big_launch_image"
      class="w-full rounded-xl sm"
      width="800"
      height="600"
    />
  </div>
</section>
