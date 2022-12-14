import React, { useEffect, useState } from "react";
import { BrowserRouter as Routes, Route } from "react-router-dom";
// import { useStateValue } from "./stateProvider";
// import Home from "./home";
import Login from "./pages/login";
// import Header from "./pages/header";
import { fireAuth } from "./firebase";
import Signup from "./pages/Signup";

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

  return (
    // <div>
    //   <Routes>
    //     <Route path="/register" element={<Signup />} />
    //     <Route path="/login" element={<Login />} />
    //   </Routes>
    // </div>
    <Login />
  );
}

export default App;
