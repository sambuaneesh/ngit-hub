<script lang="ts">
  import { Link } from "svelte-routing";
  import { logoutHandler } from "../pages/functions";
</script>

<main>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="container text-center">
        <Link to="/">
          <h2 class="text-white m-2">HUB</h2>
        </Link>
      </div>
      {#if localStorage.getItem("user")}
        <button class="btn btn-danger m-2" on:click={logoutHandler}>
          <a href="/"> Logout </a>
        </button>
      {/if}
    </div>
  </nav>
</main>

<style>
  a {
    text-decoration: none;
    color: white;
  }
</style>
