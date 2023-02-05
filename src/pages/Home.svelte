<script>
  import HomeCard from "../components/HomeCard.svelte";
  import { fade, fly } from "svelte/transition";
  import { checkLogin } from "./functions";
  checkLogin();
</script>

<div class="container my-5">
  <div in:fly={{ y: -300, duration: 500 }}>
    <h1 class="text-center">Welcome to the Home Page</h1>
    <p class="text-center">
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
      cardText="Datastructures and Algorithms using C Lab Programs for CSE Second year"
      linkTo="/dsa"
      imgSrc="https://edusera.org/wp-content/uploads/2021/08/c-1.png"
    />
    <HomeCard
      cardTitle="Dummy Card"
      cardText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore distinctio magni neque enim laboriosam"
      linkTo="www.google.com"
      imgSrc="https://media.istockphoto.com/id/527660774/vector/under-construction-industrial-sign.jpg?s=612x612&w=0&k=20&c=3U2TR5u_Drl4B5HBRc13wHD32nZe38UhlB6hzkj93U0="
    />
  </div>
</div>

<style>
</style>
