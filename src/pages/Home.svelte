<script>
  import HomeCard from "../components/HomeCard.svelte";
  import { fade, fly } from "svelte/transition";
  import { checkLogin } from "./functions";
  checkLogin();
</script>

<main>
  <div class="container py-5 border-dark">
    <div in:fly={{ y: -300, duration: 500 }}>
      <h1 class="text-center text-light">Welcome to the Home Page</h1>
      <p class="text-center text-light">
        As for now very limited functionality is provided, bear with it
      </p>
    </div>
    <div
      class="d-flex flex-wrap justify-content-center"
      in:fly={{ y: 2000, duration: 1300 }}
    >
      <HomeCard
        cardTitle="JAVA"
        cardText="Objected Oriented Programming using JAVA LAB Programs for CSE SEM III"
        linkTo="/java"
        imgSrc="https://user-images.githubusercontent.com/73395529/117985737-26dbb800-b363-11eb-9792-28a1b8c1eb6c.png"
      />
      <HomeCard
        cardTitle="DSA"
        cardText="DSA using C Lab Programs for CSE Second year"
        linkTo="/dsa"
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png"
      />
      <HomeCard
        cardTitle="ACS"
        cardText="Advanced Computer Skills lab with Python programs"
        linkTo="/acs"
        imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/640px-Python_logo_01.svg.png"
      />
    </div>
  </div>
</main>

<style lang="scss">
  // main {
  //   height: auto;
  //   min-height: 100vh;

  //   background: -webkit-linear-gradient(
  //     to bottom,
  //     rgb(199, 4, 72),
  //     rgb(143, 0, 195)
  //   ) !important;

  //   background: linear-gradient(
  //     to bottom,
  //     // rgba(106, 17, 203, 1),
  //     // rgba(37, 117, 252, 1)
  //     rgb(199, 4, 72),
  //     rgb(143, 0, 195)
  //   );
  //   // border-top: 1px solid black;
  // }
</style>
