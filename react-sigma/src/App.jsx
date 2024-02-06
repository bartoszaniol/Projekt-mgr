import { useEffect } from "react";
import Graph from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";

export const LoadGraph = () => {
  const loadGraph = useLoadGraph();
  const nodes = [
    { id: 1, label: "Node 1", title: "node 1 tootip text" },
    { id: 2, label: "Node 2", title: "node 2 tootip text" },
    { id: 3, label: "Node 3", title: "node 3 tootip text" },
    { id: 4, label: "Node 4", title: "node 4 tootip text" },
    { id: 5, label: "Node 5", title: "node 5 tootip text" },
  ];
  const edges = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 2, to: 4 },
    { from: 2, to: 5 },
  ];

  useEffect(() => {
    const graph = new Graph();
    nodes.forEach((node) =>
      graph.addNode(node.id, {
        x: Math.random(),
        y: Math.random(),
        size: 15,
        label: node.label,
        color: "#FA4F40",
      })
    );
    edges.forEach((edge) => graph.addEdge(edge.from, edge.to));
    loadGraph(graph);
  }, [loadGraph]);

  return null;
};
function App() {
  return (
    <SigmaContainer style={{ height: "75vh", width: "75%" }}>
      <LoadGraph />
    </SigmaContainer>
  );
}

export default App;
