import React from "react";
import { auth } from "../firebase";

export default function UserInfo() {
  const user = auth.currentUser;
  return (
    <div className="userInfo">
      <img src={user?.photoURL ? user.photoURL : ""} alt="" />
      <p>{user?.displayName ? user.displayName : ""}</p>
    </div>
  );
}
