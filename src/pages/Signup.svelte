<script lang="ts">
  import { Link, navigate } from "svelte-routing";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import {
    validateEmail,
    validatePhone,
    validatePassword,
    supaDetails,
  } from "./functions";

  onMount(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/home");
    }
  });
  let email: string;
  let password: string;
  let name: string;
  let phone: string;

  const auth = getAuth();
  const submitHandle = () => {
    if (!validateEmail(email)) alert("invalid email");
    else if (!validatePhone(phone)) alert("inter a valid phone number");
    else if (!validatePassword(password))
      alert(
        "Password should contain minimum eight characters, at least one letter and one number"
      );
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          if (user) {
            // console.log(user);
            alert("Account has been successfully created, You can Login now!");
            supaDetails(user.uid, name, user.email, password, phone);
            navigate("/login");
          }
        })
        .catch((error) => {
          console.log("error.code :>> ", error.code);
          console.log("error.message :>> ", error.message);
        });
    }
  };
</script>

<main>
  <section class="bg-main">
    <div class="container py-5 h-100" in:fly={{ x: -200, duration: 2000 }}>
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">
              <div class="mb-md-5 mt-md-4 pb-5">
                <h2 class="fw-bold mb-2 text-uppercase">Sign Up</h2>
                <p class="text-white-50 mb-5">
                  Please enter your email and password and register!
                </p>
                <div class="form-outline form-white mb-4 my-3">
                  <input
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Enter name"
                    bind:value={name}
                  />
                </div>
                <div class="form-outline form-white mb-4 my-3">
                  <input
                    type="email"
                    id="typeEmailX"
                    class="form-control form-control-lg"
                    placeholder="Enter email"
                    bind:value={email}
                  />
                </div>
                <div class="form-outline form-white mb-4 my-3">
                  <input
                    type="text"
                    id="typeEmailX"
                    class="form-control form-control-lg"
                    placeholder="Enter phone.no"
                    bind:value={phone}
                  />
                </div>
                <div class="form-outline form-white mb-4 my-3">
                  <input
                    type="password"
                    id="typePasswordX"
                    class="form-control form-control-lg"
                    placeholder="Enter password"
                    bind:value={password}
                  />
                </div>
                <button
                  class="btn btn-outline-light btn-lg px-5"
                  type="submit"
                  on:click={submitHandle}>Sign Up</button
                >
              </div>
              <div>
                <p class="mb-0">
                  Already have an account?
                  <Link to="/login">
                    <span class="text-white-50 fw-bold">Log In</span>
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
