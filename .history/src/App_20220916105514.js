import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useStateValue } from "./stateProvider";
// import Home from "./home";
// import Login from "./pages/login";
// import Header from "./pages/header";
import { fireAuth } from "./firebase";
import Signup from "./pages/Signup";
import Home from "./pages/home";

function App() {
  const [user, setUser] = useState();

  const onAuthStateChange = (user) => {
    setUser(user);
  };

  useEffect(() => {
    const subscriber = fireAuth.onAuthStateChanged(onAuthStateChange);

    // console.log(subscriber);
    return subscriber; // unsubscribe on unmount
  }, []);

  return <Home />;
}

export default App;
