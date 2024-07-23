import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";

Amplify.config(awsconfig);

function App() {
  return (
    <>
      <header className="App-header">
        <AmplifySignOut />
        <h2>Sign in here!</h2>
      </header>
    </>
  );
}

export default withAuthenticator(App);
