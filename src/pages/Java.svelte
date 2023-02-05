<script lang="ts">
  import codes from "../codes/java";
  // import ModalCardsContainer from "../components/ModalCardsContainer.svelte";
  import CardsContainer from "../components/CardsContainer.svelte";
  import { checkLogin } from "./functions";
  checkLogin();
</script>

<div class="java-container">
  <!-- <ModalCardsContainer {codes} /> -->
  <CardsContainer {codes} />
</div>
