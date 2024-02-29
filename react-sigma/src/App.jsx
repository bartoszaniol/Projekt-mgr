import { useEffect, useState } from "react";
import { MultiDirectedGraph } from "graphology";
import {
  SigmaContainer,
  useLoadGraph,
  useSigma,
  useRegisterEvents,
} from "@react-sigma/core";
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
  const registerEvents = useRegisterEvents();
  const sigma = useSigma();
  const [draggedNode, setDraggedNode] = useState(null);
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
        type: "circle",
      })
    );
    data.edges.forEach((edge) => graph.addEdge(edge.from, edge.to));
    loadGraph(graph);
    assign();
    registerEvents({
      downNode: (e) => {
        setDraggedNode(e.node);
        sigma.getGraph().setNodeAttribute(e.node, "highlighted", true);
      },
      mouseup: (e) => {
        if (draggedNode) {
          setDraggedNode(null);
          sigma.getGraph().removeNodeAttribute(draggedNode, "highlighted");
        }
      },
      mousedown: (e) => {
        // Disable the autoscale at the first down interaction
        if (!sigma.getCustomBBox()) sigma.setCustomBBox(sigma.getBBox());
      },
      mousemove: (e) => {
        if (draggedNode) {
          // Get new position of node
          const pos = sigma.viewportToGraph(e);
          sigma.getGraph().setNodeAttribute(draggedNode, "x", pos.x);
          sigma.getGraph().setNodeAttribute(draggedNode, "y", pos.y);

          // Prevent sigma to move camera:
          e.preventSigmaDefault();
          e.original.preventDefault();
          e.original.stopPropagation();
        }
      },
      touchup: (e) => {
        if (draggedNode) {
          setDraggedNode(null);
          sigma.getGraph().removeNodeAttribute(draggedNode, "highlighted");
        }
      },
      touchdown: (e) => {
        // Disable the autoscale at the first down interaction
        if (!sigma.getCustomBBox()) sigma.setCustomBBox(sigma.getBBox());
      },
      touchmove: (e) => {
        if (draggedNode) {
          // Get new position of node
          const pos = sigma.viewportToGraph(e);
          sigma.getGraph().setNodeAttribute(draggedNode, "x", pos.x);
          sigma.getGraph().setNodeAttribute(draggedNode, "y", pos.y);

          // Prevent sigma to move camera:
          e.preventSigmaDefault();
          e.original.preventDefault();
          e.original.stopPropagation();
        }
      },
    });
  }, [loadGraph, data, registerEvents, sigma, draggedNode]);

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
