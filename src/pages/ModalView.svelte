<script lang="ts">
  import { fly } from "svelte/transition";
  export let title;
  export let code;

  import { Modals, closeModal, openModal } from "svelte-modals";
  import { fade } from "svelte/transition";
  import Modal from "../components/Modal.svelte";

  openModal(Modal, {
    title: title,
    message: code,
  });
</script>

<Modals>
  <div
    slot="backdrop"
    class="backdrop"
    on:click={closeModal}
    on:keydown={closeModal}
  />
</Modals>

<style lang="scss">
  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
