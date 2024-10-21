<script>
  let className = ""
  import starIcon from "../../../../assets/icons/staricon.svg"
  import starHalfIcon from "../../../../assets/icons/starhalficon.svg"
  export { className as class }
  export let text
  export let id
  export let name
  export let avatar
</script>

<div
  class={`flex flex-col gap-4 min-w-0 flex-shrink-0 md:h-[420px] h-[360px] w-[280px] md:w-[320px] border rounded-xl p-8 bg-white justify-between hover:rotate-0 transition-all duration-300 ease-in-out ${className}`}
>
  <div class="flex gap-1.5 items-center">
    <img src={starIcon} alt="star_icon" class="w-7" />
    <img src={starIcon} alt="star_icon" class="w-7" />
    <img src={starIcon} alt="star_icon" class="w-7" />
    <img src={starIcon} alt="star_icon" class="w-7" />
    <img src={id === 3 ? starHalfIcon : starIcon} alt="star_icon" class="w-7" />
  </div>
  <p class="text-sm md:text-lg">{text}</p>
  <a href="/" class="flex flex-col gap-4 items-start">
    <p class="text-sm md:text-base text-gray-500 font-bold hover:underline">
      {name}
    </p>
    <img
      class="inline-block h-12 w-12 rounded-full"
      src={avatar}
      alt="avatar_image"
    />
  </a>
</div>
