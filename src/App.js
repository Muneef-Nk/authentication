import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React from "react";
import { useState } from "react";
import "./App.css";
import { auth } from "./firebase";

function App() {
  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
        // console.log(user.email);
      })
      .catch((err) => {
        const errorMessage = err.message;
        alert(errorMessage);
      });
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const logout = () => {
    signOut(auth)
      .then(() => setUser(null))
      .catch((err) => {
        const errorMessage = err.message;
        alert(errorMessage);
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState(null);

  return (
    <div className="cotainer">
      {user ? (
        <div>
          <h1>you are login</h1>
          <button onClick={logout}>sign out</button>
        </div>
      ) : (
        <div>
          <div className="signUp">
            <h1>sign up</h1>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              className="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn1" onClick={signUp}>
              sign up
            </button>
          </div>

          <div className="signIn">
            <h1>sign in</h1>
            <input
              type="email"
              placeholder="email"
              name="email"
              className="email"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              className="password"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
          </div>
          <button className="btn2" onClick={signIn}>
            sign in
          </button>
        </div>
      )}
    </div>
  );
}
export default App;
