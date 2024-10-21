<script>
  import QuestionItem from "./QuestionItem/QuestionItem.svelte"
  import { questions } from "./questions"
  let activeIndex = -1

  const setActiveIndex = (index) => {
    activeIndex = index
  }
</script>

<div class="w-full max-w-screen-md mx-auto mt-16">
  <h2 class="text-3xl font-bold text-center text-balance mb-10">
    Frequently asked questions
  </h2>
  <div class="w-full" data-orientation="vertical">
    {#each questions as question, index}
      <QuestionItem
        title={question.title}
        questionText={question.text}
        {index}
        {activeIndex}
        {setActiveIndex}
      />
    {/each}
  </div>
</div>
