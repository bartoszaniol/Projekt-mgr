import React from "react";
import Graph from "react-graph-vis";
import data from "../../data/visData250.json";

function App() {
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
      hierarchical: true,
    },
    edges: {
      color: "#0ff",
    },
    height: "900px",
  };

  return <Graph graph={data} options={options} events={events} />;
}
export default App;
