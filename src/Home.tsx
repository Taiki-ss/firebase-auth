import React from "react";
import SignInButton from "./components/SignInButton";
import { useAuthState } from "react-firebase-hooks/auth";
import UserInfo from "./components/UserInfo";
import SignOutButton from "./components/SignOutButton";
import {auth} from "./firebase";

const Home = () => {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? (
        <>
          <UserInfo />
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
};

export default Home;
