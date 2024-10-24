<script>
  import { onMount } from "svelte"

  export let targetDate
  let className = ""
  let timeLeft = ""

  export { className as class }

  const calculateTimeLeft = () => {
    const now = new Date()
    const difference = new Date(targetDate) - now

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      timeLeft = `${days}d ${hours}h ${minutes}m ${seconds}s`
    } else {
      timeLeft = "Time's up!"
    }
  }

  let timer

  onMount(() => {
    calculateTimeLeft()
    timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  })
</script>

<p class={`mt-4 text-center text-balance ${className}`}>
  Last discount for early-customers ends in <span
    class="text-red-400 font-medium"
  >
    {timeLeft}
  </span>
</p>
