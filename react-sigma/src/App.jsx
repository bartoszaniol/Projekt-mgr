import { useEffect, useState } from "react";
import { MultiDirectedGraph } from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import { useLayoutCircular } from "@react-sigma/layout-circular";
import "@react-sigma/core/lib/react-sigma.min.css";
import data100 from "../../data/SigmaData100.json";
import data250 from "../../data/SigmaData250.json";
import data500 from "../../data/SigmaData500.json";
import data1000 from "../../data/SigmaData1000.json";

export const LoadGraph = () => {
  const loadGraph = useLoadGraph();
  const [data, setData] = useState(data100);
  const { positions, assign } = useLayoutCircular();
  // const nodes = data.nodes;
  // const edges = data.edges;

  useEffect(() => {
    const graph = new MultiDirectedGraph({ multi: true });
    data.nodes.forEach((node) =>
      graph.addNode(node.id, {
        x: Math.random(),
        y: Math.random(),
        size: 15,
        label: node.label,
        color: "blue",
      })
    );
    data.edges.forEach((edge) => graph.addEdge(edge.from, edge.to));
    loadGraph(graph);
    assign();
  }, [loadGraph, data]);

  return (
    <>
      <button
        onClick={() => {
          setData(data100);
        }}
        style={{ zIndex: 100, height: "75px", width: "75px" }}
      >
        100 data
      </button>
      <button
        onClick={() => {
          setData(data250);
        }}
        style={{ zIndex: 100, height: "75px", width: "75px" }}
      >
        250 data
      </button>
      <button
        onClick={() => {
          setData(data500);
        }}
        style={{ zIndex: 100, height: "75px", width: "75px" }}
      >
        500 data
      </button>
      <button
        onClick={() => {
          setData(data1000);
        }}
        style={{ zIndex: 100, height: "75px", width: "75px" }}
      >
        1000 data
      </button>
    </>
  );
};
function App() {
  return (
    <SigmaContainer
      graph={MultiDirectedGraph}
      settings={{
        defaultEdgeType: "arrow",
        labelFont: "Lato, sans-serif",
        defaultEdgeColor: "#0FF",
      }}
    >
      <LoadGraph />
    </SigmaContainer>
  );
}

export default App;
