import "../styles/globals.css";
import React from "react";
import { Global } from "../context/globalCtx";
function MyApp({ Component, pageProps }) {
  const [state, setState] = React.useState(false);

  const value = {
    action: {
      setState,
    },
    context: {
      state,
    },
  };

  return (
    <Global.Provider value={value}>
      <Component {...pageProps} />
    </Global.Provider>
  );
}

export default MyApp;
