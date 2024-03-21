import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ToastContainer, toast, Flip } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import presets from "./utils/presets";

import StartPage from "./pages/StartPage";
import ChromaPage from "./pages/ChromaPage";

const App = () => {
  const [page, setPage] = useState("start");
  const [initialState, setInitialState] = useState(presets.sequential[0]);

  return (
    <div className="container">
      {page === "start" ? (
        <StartPage setPage={setPage} setInitialState={setInitialState} />
      ) : null}
      {page === "chroma" ? (
        <ChromaPage
          goBack={() => setPage("start")}
          toast={toast}
          initialState={initialState}
        />
      ) : null}
      <ToastContainer transition={Flip} autoClose={2000} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
