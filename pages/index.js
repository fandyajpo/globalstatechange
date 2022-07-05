import React, { useContext, useEffect } from "react";
import { Global } from "../context/globalCtx";

export default function Home() {
  const { action, context } = useContext(Global);

  const changeGlobalState = () => action.setState(!context.state);

  return (
    <div className="bg-blue-500 w-full h-screen">
      {context.state ? "Nilai True" : "Nilai False"}

      <button onClick={changeGlobalState} className={"bg-red-500"}>
        Click untuk mengubah global context/state
      </button>
    </div>
  );
}
