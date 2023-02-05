<script lang="ts">
  import { fly } from "svelte/transition";
  export let title;
  export let code;

  import { Modals, closeModal, openModal } from "svelte-modals";
  import { fade } from "svelte/transition";
  import Modal from "./Modal.svelte";

  import ModalView from "../pages/ModalView.svelte";
  import { navigate, Route, Router } from "svelte-routing";

  function handleOpen() {
    // openModal(Modal, {
    //   title: title,
    //   message: code,
    // });
    navigate(`/modalview`);
  }
</script>

<Router>
  <Route path="/modalview"><ModalView {title} {code} /></Route>
</Router>

<div class="cardholder">
  <div
    class="eachcard card bg-light"
    transition:fly={{ x: 2000, duration: 1500 }}
  >
    <h2 class="card-title" on:keydown={handleOpen} on:click={handleOpen}>
      {title}
    </h2>
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

  @media screen and (max-width: 500px) {
    .eachcard {
      min-width: 95vw !important;
      // margin-right: 5% !important;
    }
  }

  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
