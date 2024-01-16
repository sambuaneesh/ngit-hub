<script lang="ts">
  import { closeModal } from "svelte-modals";

  export let isOpen;
  export let title;
  export let message;
</script>

{#if isOpen}
  <!-- on:introstart and on:outroend are required to transition 1 at a time between modals -->
  <div role="dialog" class="modal">
    <div class="contents">
      <div class="content-title">
        <h2>{title}</h2>
      </div>
      <div style="overflow-y: scroll; height:60vh;">
        <pre>{message}</pre>
      </div>
      <div class="actions">
        <button on:click={closeModal}>Close</button>
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .modal {
    position: fixed;
    // top: 0;
    // bottom: 0;
    // right: 50;
    // left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* allow click-through to backdrop */
    pointer-events: none;
  }

  .contents {
    min-width: 240px;
    border-radius: 6px;
    padding: 16px;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    pointer-events: auto;
    flex-wrap: wrap; /* add this line */
    max-width: 50vw;
    .content-title {
      display: flex;
      height: auto;
      flex-wrap: wrap;
    }
  }

  pre {
    white-space: pre-wrap;
  }

  h2 {
    text-align: center;
    font-size: 24px;
  }

  .actions {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    gap: 8px;
  }
</style>
