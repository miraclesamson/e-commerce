import React, { useEffect, useState } from "react";

import Login from "./pages/Signup";
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

  return <Signup />;
}

export default App;
