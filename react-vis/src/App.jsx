import React, { useState } from "react";
import Graph from "react-graph-vis";
import data100 from "../../data/visData100.json";
import data250 from "../../data/visData250.json";
import data500 from "../../data/visData500.json";
import data1000 from "../../data/visData1000.json";

function App() {
  const [data, setData] = useState(data100);

  const events = {
    select: ({ nodes, edges }) => {
      console.log("Selected nodes:");
      console.log(nodes);
      console.log("Selected edges:");
      console.log(edges);
    },
  };
  const options = {
    layout: {
      improvedLayout: true,
      clusterThreshold: 150,
    },
    nodes: {
      title: "node",
      scaling: {
        label: true,
      },
      color: {
        border: "#00F",
        background: "#00F",
      },
      // shape: "star",
      shadow: true,
      font: {
        size: 24,
        color: "white",
      },
    },

    edges: {
      color: "#0ff",
    },
    height: "900px",
  };

  return (
    <>
      <div>
        <button onClick={() => setData(data100)}>100 data</button>
        <button onClick={() => setData(data250)}>250 data</button>
        <button onClick={() => setData(data500)}>500 data</button>
        <button onClick={() => setData(data1000)}>1000 data</button>
      </div>
      <div key={Math.random() * 100}>
        <Graph graph={data} options={options} events={events} />;
      </div>
    </>
  );
}
export default App;
