<script lang="ts">
  import { Link, navigate } from "svelte-routing";
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  let email: string;
  let password: string;
  // let userData: object;
  onMount(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/home");
    }
    // userData = JSON.parse(localStorage.getItem("user")) || {};
  });
  const auth = getAuth();
  const handleSubmit = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("user", JSON.stringify(user));
        // alert(this.user.uuid);
        console.log(user);
        console.log(user.phoneNumber);

        // navigate("/home");
        // so that page refreshes and logout button is visible
        window.location.href = "/home";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Check your credentials");
      });
  };
</script>

<main>
  <section class="bg-main">
    <div class="container py-5 h-100" in:fly={{ x: 200, duration: 2000 }}>
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-white-50 mb-5">
                  Please enter your login and password!
                </p>

                <div class="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="typeEmailX"
                    class="form-control form-control-lg"
                    bind:value={email}
                  />
                  <label class="form-label" for="typeEmailX">Email</label>
                </div>

                <div class="form-outline form-white mb-4">
                  <input
                    type="password"
                    id="typePasswordX"
                    class="form-control form-control-lg"
                    bind:value={password}
                  />
                  <label class="form-label" for="typePasswordX">Password</label>
                </div>

                <!-- <p class="small mb-5 pb-lg-2">
                  <a class="text-white-50" href="#!">Forgot password?</a>
                </p> -->

                <button
                  class="btn btn-outline-light btn-lg px-5"
                  type="submit"
                  on:click={handleSubmit}
                  >Login
                </button>

                <!-- <div
                  class="d-flex justify-content-center text-center mt-4 pt-1"
                >
                  <a href="#!" class="text-white"
                    ><i class="fab fa-facebook-f fa-lg" /></a
                  >
                  <a href="#!" class="text-white"
                    ><i class="fab fa-twitter fa-lg mx-4 px-2" /></a
                  >
                  <a href="#!" class="text-white"
                    ><i class="fab fa-google fa-lg" /></a
                  >
                </div> -->
              </div>

              <div>
                <p class="mb-0">
                  Don't have an account?
                  <Link to="/signup">
                    <span class="text-white-50 fw-bold">Sign Up</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<style>
</style>
