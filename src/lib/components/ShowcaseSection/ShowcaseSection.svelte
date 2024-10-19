<script>
  import showcaseImage1 from "../../../assets/images/showcaseimage1.png"
  import showcaseImage2 from "../../../assets/images/showcaseimage2.png"
  import showcaseImage3 from "../../../assets/images/showcaseimage3.png"
  import ShowcaseItem from "./ShowcaseItem/ShowcaseItem.svelte"
</script>

<section>
  <div class="grid lg:grid-cols-3 gap-8 mt-20">
    <ShowcaseItem
      image={showcaseImage1}
      title="Launch checklist"
      text="Complete task management template with everything you need to get your app ready for launch."
    />
    <ShowcaseItem
      image={showcaseImage2}
      title="Curated subreddits list"
      text="Hand curated subreddits with posting guides to help you find your audience."
    />
    <ShowcaseItem
      image={showcaseImage3}
      title="Product directories"
      text="Product submission sites, and backlink opportunities to jumpstart your marketing."
    />
  </div>
</section>
