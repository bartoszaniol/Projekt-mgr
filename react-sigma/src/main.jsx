import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Profiler } from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Profiler id="App" onRender={callback}>
      <App />
    </Profiler>
  </React.StrictMode>
);

function callback(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions
) {
  console.log(`${id} renderowanie trwało ${actualDuration}ms`);
}
