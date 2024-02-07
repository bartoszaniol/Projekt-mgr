import CytoscapeComponent from "react-cytoscapejs";
import data from "../../data/CytoscapeData250.json";

const App = () => {
  const width = "100%";
  const height = "800px";
  const layout = {
    name: "breadthfirst",
    fit: true,
    // circle: true,
    directed: true,
    padding: 50,
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
        backgroundColor: "#4a56a6",
        width: 50,
        height: 50,
        label: "data(label)",

        // width: "mapData(score, 0, 0.006769776522008331, 20, 60)",
        // height: "mapData(score, 0, 0.006769776522008331, 20, 60)",
        // "text-valign": "center",
        // "text-halign": "center",
        "overlay-padding": "6px",
        "z-index": "10",
        //text props
        // "text-outline-color": "#4a56a6",
        // "text-outline-width": "2px",
        color: "white",
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
        "line-color": "#AAD8FF",
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
        <h1>Cytoscape example</h1>
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
      </div>
    </>
  );
};

export default App;
