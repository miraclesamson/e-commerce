import React, { useEffect, useState } from "react";

import Login from "./pages/Login";
import { fireAuth } from "./firebase";

function App() {
  const [user, setUser] = useState({ loggedIn: false });
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  if (!user.loggedIn) {
    return <span>User is logged out</span>;
  }

  return <Login />;
}

export default App;
