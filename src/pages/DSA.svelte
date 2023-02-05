<script lang="ts">
  import Card from "../components/Card.svelte";
  import codes from "../codes/dsa";
  import CardsContainer from "../components/CardsContainer.svelte";
  import { Link } from "svelte-routing";
  import { checkLogin } from "./functions";
  checkLogin();
</script>

<div class="dsa-container">
  <CardsContainer {codes} />
</div>
