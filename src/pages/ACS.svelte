<script lang="ts">
  import codes from "../codes/python";
  import CardsContainer from "../components/CardsContainer.svelte";
  import { checkLogin } from "./functions";
  let lang = "python";
  checkLogin();
</script>

<div class="acs-container ">
  <CardsContainer {codes} {lang} />
</div>
