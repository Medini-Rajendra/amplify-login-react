import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Amplify } from "aws-amplify";
import awsmobile from "./aws-exports";
import { Authenticator, withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsmobile);

function App() {
  <Authenticator>
    {({ signOut, user }) => (
      <main>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </main>
    )}
  </Authenticator>
};

export default App;
