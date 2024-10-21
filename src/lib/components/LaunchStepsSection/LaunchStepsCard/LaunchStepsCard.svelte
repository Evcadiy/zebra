<script>
  export let image
  export let text
</script>

<div
  class="bg-[rgb(241,241,239)] rounded items-center p-4 text-sm md:text-md border flex flex-nowrap gap-2.5"
>
  <img src={image} alt="launch_card_image" class="w-5 md:w-6" />
  <p>{text}</p>
</div>
