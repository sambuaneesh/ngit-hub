<script>
  import { fly } from "svelte/transition";
  import hljs from "highlight.js";
  import { onMount } from "svelte";
  import Highlight from "svelte-highlight";
  import java from "svelte-highlight/languages/java";
  import c from "svelte-highlight/languages/c";
  // import "svelte-highlight/styles/stackoverflow-dark.css";
  // import "svelte-highlight/styles/woodland.css";
  import "svelte-highlight/styles/unikitty-dark.css";
  import { python } from "svelte-highlight/languages";
  export let title;
  export let code;
  export let lang;
  let showCode = false;

  function toggleCode() {
    showCode = !showCode;
  }
  onMount(() => {
    hljs.highlightAll();
  });
</script>

<div class="cardholder">
  <div
    class="eachcard card text-white bg-dark "
    transition:fly={{ x: 2000, duration: 1500 }}
  >
    <h2 class="card-title" on:keydown={toggleCode} on:click={toggleCode}>
      {title}
    </h2>
    {#if showCode}
      {#if lang == "java"}
        <pre class="card-text" transition:fly={{ y: -200, duration: 200 }}>
      <code>
        <Highlight language={java} {code} />
      </code>
    </pre>
      {/if}
      {#if lang == "c"}
        <pre class="card-text" transition:fly={{ y: -200, duration: 200 }}>
      <code>
        <Highlight language={c} {code} />
      </code>
    </pre>
      {/if}
      {#if lang == "python"}
        <pre class="card-text" transition:fly={{ y: -200, duration: 200 }}>
      <code>
        <Highlight language={python} {code} />
      </code>
    </pre>
      {/if}
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
    color: rgb(202, 202, 202) !important;
    .card-title {
      cursor: pointer;
      //   padding-right: 1.5rem;
    }
    // @media screen and (max-width: 435px){

    // }
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px !important;
  }

  .card h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  pre {
    white-space: pre-wrap;
  }

  code {
    background-color: #212529 !important;
  }

  .eachcard {
    @media screen and (max-width: 1054px) {
      // width: 98vw;
      min-width: 93vw !important;
      // margin-right: 5% !important;
    }
  }

  .cardholder {
    @media screen and (max-width: 1054px) {
      margin-right: auto;
      margin-left: auto;
    }
    // display: flex;
  }
</style>
