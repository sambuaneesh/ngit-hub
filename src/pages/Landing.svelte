<script lang="ts">
  import { Link, navigate } from "svelte-routing";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  onMount(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/home");
    }
  });
</script>

<main
  class="vh-100 d-flex align-items-center justify-content-center"
  transition:fade
>
  <div>
    <i>
      <header class="text-center p-5">
        <!-- <h1 class="display-2 font-weight-bold">Welcome to NGIT-HUB!</h1> -->
        <img src="./ngithubv2.png" alt="" class="main-logo" />
      </header>
      <div class="container text-center">
        <p class="lead">
          Login or Register to get access to the site's documents <br />(The
          site is still in testing phase, mind the errors and kindly report
          them)
        </p>
      </div>
    </i>
    <div class="d-flex justify-content-center my-5">
      <Link to="/login">
        <button type="button" class="btn btn-primary btn-lg mx-5">Login</button>
      </Link>
      <Link to="/signup">
        <button type="button" class="btn btn-primary btn-lg mx-5"
          >Register</button
        >
      </Link>
    </div>
  </div>
</main>

<style lang="scss">
  main > div {
    margin-top: -10%;
  }
  main {
    background-color: #010000;
    .container {
      color: #fd4686;
      opacity: 80% !important;
    }
  }
</style>
