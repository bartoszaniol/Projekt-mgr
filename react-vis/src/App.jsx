import React, { useState, useEffect } from "react";
import Graph from "react-graph-vis";
import data100 from "../../data/visData100.json";
import data250 from "../../data/visData250.json";
import data500 from "../../data/visData500.json";
import data1000 from "../../data/visData1000.json";

function App() {
  const [data, setData] = useState(data100);
  const numNodes = data.nodes.length;
  const angleIncrement = (2 * Math.PI) / numNodes;

  // useEffect(() => {
  //   data.nodes.forEach((node, i) => {
  //     node.x = Math.cos(i * angleIncrement);
  //     node.y = Math.sin(i * angleIncrement);
  //   });
  // }, [data]);

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
      // hierarchical: false,
      // hierarchical: {
      //   enabled: true,
      //   levelSeparation: 150,
      //   nodeSpacing: 10,
      //   treeSpacing: 20,
      //   blockShifting: true,
      //   edgeMinimization: true,
      //   parentCentralization: true,
      //   direction: "UD", // UD, DU, LR, RL
      //   sortMethod: "hubsize", // hubsize, directed
      //   shakeTowards: "leaves", // roots, leaves
      // },
    },
    nodes: {
      title: "node",
      // image:
      //   "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Persona_5_cover_art.jpg/220px-Persona_5_cover_art.jpg",
      scaling: {
        label: true,
      },
      color: {
        border: "#00F",
        background: "#00F",
      },
      shape: "circle",
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
