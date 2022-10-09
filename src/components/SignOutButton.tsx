import React from "react";
import { auth } from "../firebase";

export default function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()}>
      <p>サインアウト</p>
    </button>
  );
}
