<script>
  import { Link } from "svelte-routing";
  export let cardTitle;
  export let cardText;
  export let linkTo;
  export let imgSrc;
</script>

<div>
  <div class="card m-3" style="width: 18rem;">
    <img src={imgSrc} class="card-img-top" alt="img" />
    <div class="card-body">
      <h5 class="card-title">{cardTitle}</h5>
      <p class="card-text">{cardText}</p>
      <Link to={linkTo} class="btn btn-primary">Open</Link>
    </div>
  </div>
</div>

<style>
  img {
    max-width: min-content;
    align-self: center;
  }
</style>
