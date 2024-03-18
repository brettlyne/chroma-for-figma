import React, { useState } from "react";
import ReactDOM from "react-dom";
import { ToastContainer, toast, Flip } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import StartPage from "./pages/StartPage";
import ChromaPage from "./pages/ChromaPage";

const App = () => {
  const [page, setPage] = useState("chroma");

  onmessage = (event) => {
    const message = JSON.parse(event.data.pluginMessage);

    // doing this in UI bc d3 doesn't work in figma code environment
    // if (message.msgType === "calculate-tree-locations") {
    //   const { treeCount, width, height } = message;
    //   const locations = randomGrid(
    //     width,
    //     height,
    //     treeCount,
    //     10 - distributionRandomness
    //   );
    //   parent.postMessage(
    //     { pluginMessage: { type: "use-these-locations", locations } },
    //     "*"
    //   );
    // }
  };

  return (
    <div className="container">
      {page === "start" ? <StartPage setPage={setPage} /> : null}
      {page === "chroma" ? (
        <ChromaPage goBack={() => setPage("start")} toast={toast} />
      ) : null}
      <ToastContainer transition={Flip} autoClose={2000} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
