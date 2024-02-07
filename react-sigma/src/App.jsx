import { useEffect } from "react";
import { MultiDirectedGraph } from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import "@react-sigma/core/lib/react-sigma.min.css";
import data from "../../data/SigmaData250.json";

export const LoadGraph = () => {
  const loadGraph = useLoadGraph();
  const nodes = data.nodes;
  const edges = data.edges;

  useEffect(() => {
    const graph = new MultiDirectedGraph({ multi: true });
    nodes.forEach((node) =>
      graph.addNode(node.id, {
        x: Math.random(),
        y: Math.random(),
        size: 25,
        label: node.label,
        color: "blue",
      })
    );
    edges.forEach((edge) => graph.addEdge(edge.from, edge.to));
    loadGraph(graph);
  }, [loadGraph]);

  return null;
};
function App() {
  return (
    <SigmaContainer graph={MultiDirectedGraph}>
      <LoadGraph />
    </SigmaContainer>
  );
}

export default App;
