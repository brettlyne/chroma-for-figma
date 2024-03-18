import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import StartPage from "./pages/StartPage";
import ChromaPage from "./pages/ChromaPage";

const App = () => {
  const [page, setPage] = useState("chroma");

  const [colors1, setColors1] = useState([
    { color: "#ff8800", id: "2" },
    { color: "#0088ff", id: "3" },
    { color: "#8800ff", id: "4" },
  ]);
  const [colors2, setColors2] = useState([
    { color: "#bbaa00", id: "5" },
    { color: "#ccdd22", id: "6" },
    { color: "#aaee44", id: "7" },
  ]);

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
        <ChromaPage goBack={() => setPage("start")} />
      ) : null}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
