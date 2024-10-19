<script>
  export let image
  export let title
  export let text
</script>

<section>
  <a
    href="/"
    class="hover:no-underline bg-[#e5e5e5] bg-opacity-30 text-card-foreground group flex flex-col-reverse text-left gap-4 rounded-2xl hover:outline outline-accent transition-all duration-300 ease-in-out"
    ><div
      class="h-[170px] space-y-1.5 p-6 flex flex-col flex-shrink-0 justify-between flex-grow"
    >
      <div class="space-y-1.5">
        <h3 class="tracking-tight text-2xl font-semibold">{title}</h3>
        <p class="text-muted-foreground text-base">
          {text}
        </p>
      </div>
    </div>
    <div
      class="p-6 pt-0 flex items-center justify-center mt-6 pb-0 flex-shrink-0"
    >
      <img
        src={image}
        alt="checklist"
        class="flex-shrink-0 drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300 ease-in-out group-hover:scale-105"
      />
    </div>
  </a>
</section>
