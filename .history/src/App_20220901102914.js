import React, { useEffect, useState } from "react";

import Login from "./pages/Login";
import { fireAuth } from "./firebase";

function App() {
  const [user, setUser] = useState();

  const onAuthStateChanged = (user) => {
    console.log(user);
  };

  useEffect(() => {
    const subscriber = fireAuth.onAuthStateChanged(onAuthStateChanged);
    console.log(subscriber);
    return subscriber; // unsubscribe on unmount
  }, []);

  return <Login />;
}

export default App;
