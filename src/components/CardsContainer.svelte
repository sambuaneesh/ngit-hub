<script>
  import Card from "./Card.svelte";

  export let codes = [];
</script>

<div >
  {#each codes as code}
    <Card title={code.title} code={code.code} />
  {/each}
</div>

<style lang="scss">
  div{
    display: flex;
    overflow: scroll;
    flex-wrap: wrap;
  }

  // @media screen and (max-width: 435px){
  //   div{
  //     flex-direction: column;
  //   }
  // }
  
</style>