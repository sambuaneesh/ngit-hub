<script lang="ts">
  import Navbar from "./components/Navbar.svelte";
  import Login from "./pages/Login.svelte";
  import Signup from "./pages/Signup.svelte";
  import Landing from "./pages/Landing.svelte";
  import Home from "./pages/Home.svelte";
  import Java from "./pages/Java.svelte";
  import Dsa from "./pages/DSA.svelte";
  import { Router, Route, navigate } from "svelte-routing";
  import { firebaseConfig } from "./configs";
  import { initializeApp } from "firebase/app";
  import { onMount } from "svelte";
  onMount(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/home");
    }
  });
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
</script>

<main>
  <Router>
    <Navbar />
    <Route path="/"><Landing /></Route>
    <Route path="/login"><Login /></Route>
    <Route path="/signup"><Signup /></Route>
    <Route path="/home"><Home /></Route>
    <Route path="/java"><Java /></Route>
    <Route path="/dsa"><Dsa /></Route>
  </Router>
</main>

<style>
</style>
