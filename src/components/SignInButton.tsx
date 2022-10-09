import { signInWithPopup } from "firebase/auth";
import React from "react";
import {auth, provider} from "../firebase";

const SignInButton = () => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider);
  };

  return (
    <button onClick={signInWithGoogle}>
      <p>Googleでサインイン</p>
    </button>
  );
};

export default SignInButton;
