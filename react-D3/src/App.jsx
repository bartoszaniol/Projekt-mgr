import { Graph } from "react-d3-graph";

const App = () => {
  const data = {
    nodes: [
      { id: "1", size: 300 },
      { id: "2", size: 300 },
      { id: "3", size: 300 },
      { id: "4", size: 300 },
      { id: "5", size: 300 },
    ],
    links: [
      { source: "1", target: "2" },
      { source: "1", target: "3" },
      { source: "2", target: "4" },
      { source: "2", target: "5" },
    ],
  };
  const myConfig = {
    nodeHighlightBehavior: true,
    node: {
      color: "lightgreen",
      size: 300,
      highlightStrokeColor: "blue",
    },
    link: {
      highlightColor: "lightblue",
    },
  };

  return (
    <>
      <div className="graph-container">
        <Graph id="graph-id" data={data} config={myConfig} />
      </div>
    </>
  );
};

export default App;
