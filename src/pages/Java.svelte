<script lang="ts">
  import { navigate } from "svelte-routing";
  import codes from "../codes/java";
  // import ModalCardsContainer from "../components/ModalCardsContainer.svelte";
  import CardsContainer from "../components/CardsContainer.svelte";
  import { checkLogin } from "./functions";
  checkLogin();
  import { onMount } from "svelte";
  import hljs from "highlight.js";

  onMount(() => {
    var answer = window.confirm("Do you want constrained number of questions?");
    if (answer) {
      navigate("/java/a");
    } else {
      navigate("/java");
    }
    hljs.highlightAll();
  });
  let lang = "java";
</script>

<div class="java-container ">
  <!-- <ModalCardsContainer {codes} /> -->
  <CardsContainer {codes} {lang} />
</div>
