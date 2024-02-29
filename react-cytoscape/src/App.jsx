import CytoscapeComponent from "react-cytoscapejs";
import data100 from "../../data/CytoscapeData100.json";
import data250 from "../../data/CytoscapeData250.json";
import data500 from "../../data/CytoscapeData500.json";
import data1000 from "../../data/CytoscapeData1000.json";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState(data100);
  const width = "100%";
  const height = "97vh";
  const layout = {
    name: "circle",
    fit: true,
    // circle: true,
    directed: true,
    padding: 25,
    // spacingFactor: 1.5,
    animate: true,
    animationDuration: 700,
    avoidOverlap: true,
    nodeDimensionsIncludeLabels: false,
  };

  const styleSheet = [
    {
      selector: "node",
      style: {
        // shape: "triangle",
        backgroundColor: "#00F",
        // backgroundImage:
        //   "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Persona_5_cover_art.jpg/220px-Persona_5_cover_art.jpg",
        width: 10,
        height: 10,
        // label: "data(label)",

        // width: "mapData(score, 0, 0.006769776522008331, 20, 60)",
        // height: "mapData(score, 0, 0.006769776522008331, 20, 60)",
        // "text-valign": "center",
        // "text-halign": "center",
        "overlay-padding": "6px",
        "z-index": "10",
        //text props
        // "text-outline-color": "#4a56a6",
        // "text-outline-width": "2px",
        color: "black",
        fontSize: 20,
      },
    },
    {
      selector: "node:selected",
      style: {
        "border-width": "6px",
        "border-color": "#AAD8FF",
        "border-opacity": "0.5",
        "background-color": "#77828C",
        width: 75,
        height: 75,
        //text props
        "text-outline-color": "#77828C",
        "text-outline-width": 8,
        // color: "white",
      },
    },
    {
      selector: "node[type='device']",
      style: {
        shape: "rectangle",
      },
    },
    {
      selector: "edge",
      style: {
        width: 3,
        // "line-color": "#6774cb",
        "line-color": "#0FF",
        "target-arrow-color": "#6774cb",
        "target-arrow-shape": "triangle",
        "curve-style": "bezier",
      },
    },
  ];

  let myCyRef;

  return (
    <>
      <div>
        <button onClick={() => setData(data100)}>100 data</button>
        <button onClick={() => setData(data250)}>250 data</button>
        <button onClick={() => setData(data500)}>500 data</button>
        <button onClick={() => setData(data1000)}>1000 data</button>
      </div>
      <div
        style={{
          border: "1px solid",
          backgroundColor: "#f5f6fe",
        }}
      >
        <CytoscapeComponent
          elements={CytoscapeComponent.normalizeElements(data)}
          // pan={{ x: 200, y: 200 }}
          style={{ width: width, height: height }}
          zoomingEnabled={true}
          maxZoom={3}
          minZoom={0.1}
          autounselectify={false}
          boxSelectionEnabled={true}
          layout={layout}
          stylesheet={styleSheet}
          cy={(cy) => {
            myCyRef = cy;
            cy.layout(layout).run();
            cy.fit();

            console.log("EVT", cy);

            cy.on("tap", "node", (evt) => {
              var node = evt.target;
              console.log("EVT", evt);
              console.log("TARGET", node.data());
              console.log("TARGET TYPE", typeof node[0]);
            });
          }}
          abc={console.log("myCyRef", myCyRef)}
        />
      </div>
    </>
  );
};

export default App;
