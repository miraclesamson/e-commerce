import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useStateValue } from "./stateProvider";
// import Home from "./home";
import Login from "./pages/login";

import { fireAuth } from "./firebase";

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
    <Router>
      {/* Routes to different pages */}
      <Routes>
        {/* <Route exact path="/" element={<Home />}></Route> */}
        <Route path="./pages/login.jsx" element={<Login />}></Route>
        {/* :id is a placeholder for the id of the product */}
        {/* <Route path="/checkout" element={<Checkout />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
