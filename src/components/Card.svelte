<script>
  import { fly } from "svelte/transition";
  export let title;
  export let code;
  let showCode = false;

  function toggleCode() {
    showCode = !showCode;
  }
</script>

<div class="cardholder">
  <div
    class="eachcard card bg-light"
    transition:fly={{ x: 2000, duration: 1500 }}
  >
    <h2 class="card-title" on:keydown={toggleCode} on:click={toggleCode}>
      {title}
    </h2>
    {#if showCode}
      <pre
        class="card-text"
        transition:fly={{ y: -200, duration: 200 }}>{code}</pre>
    {/if}
  </div>
</div>

<style lang="scss">
  .card {
    min-width: 23.5rem;
    // min-width: 20rem;
    // max-width: 27rem;
    margin: 1rem;
    padding: 1rem;
    width: 18rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    .card-title {
      cursor: pointer;
      //   padding-right: 1.5rem;
    }
    // @media screen and (max-width: 435px){

    // }
  }

  .card h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  pre {
    white-space: pre-wrap;
  }

  @media screen and (max-width: 500px) {
    .eachcard {
      min-width: 95vw !important;
      // margin-right: 5% !important;
    }
  }
</style>
