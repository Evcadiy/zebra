<script>
  export let text
  export let href = ""
</script>

<section>
  <li>
    <a
      href={href ? href : "/"}
      class="mx-3 lg:mx-6 font-figtree font-medium text-black">{text}</a
    >
  </li>
</section>

<style>
  a {
    position: relative;
    display: inline-block;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: black;
    transition: all 0.3s ease;
  }

  a:hover::after {
    width: 100%;
  }

  a:not(:hover)::after {
    width: 0;
    left: auto;
    right: 0;
  }
</style>
