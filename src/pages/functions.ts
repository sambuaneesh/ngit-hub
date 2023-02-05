// regEX for email
export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// regEX for phone
export const validatePhone = (phone) => {
  return String(phone)
    .toLowerCase()
    .match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
};

// regEX for password
export const validatePassword = (password) => {
  return String(password).match(/^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/);
};

export const parsedNumber = (number: string): number => {
  return Number(number.replace(/[^0-9]/g, ""));
};

import { navigate } from "svelte-routing";
// send details to supabase
import { supabase } from "../supabaseClient";
export const supaDetails = async (uid, name, email, pass, number) => {
  try {
    const updates = {
      uid: uid,
      name: name,
      email: email,
      pass: pass,
      number: number,
      updated_at: new Date().toISOString(),
    };

    let { error } = await supabase.from("profiles").upsert(updates);

    if (error) {
      throw error;
    }
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
    }
  } finally {
    console.log("success");
  }
};

// logout
export const logoutHandler = () => {
  try {
    localStorage.removeItem("user");
  } catch (error) {
    alert(error.message);
  }
  // finally {
  //   navigate("/");
  // }
};

import { onMount } from "svelte";
export const checkLogin = () => {
  onMount(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
    }
  });
};
