<script lang="ts">
  import { navigate } from "svelte-routing";
  import codes from "../codes/java-a-section";
  // import ModalCardsContainer from "../components/ModalCardsContainer.svelte";
  import CardsContainer from "../components/CardsContainer.svelte";
  import { checkLogin } from "./functions";
  checkLogin();
  let lang = "java";
</script>

<div class="java-container bg-main">
  <!-- <ModalCardsContainer {codes} /> -->
  <CardsContainer {codes} {lang} />
</div>
