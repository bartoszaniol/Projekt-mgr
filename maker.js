const reactCytoscapeData = {
  nodes: [],
  edges: [],
};

const reactSigmaData = {
  nodes: [],
  edges: [],
};
const reactVisData = {
  nodes: [],
  edges: [],
};

const fs = require("fs");

const makeData = (value) => {
  for (let i = 0; i < value; i++) {
    reactCytoscapeData.nodes.push({
      data: { id: i, label: `Node ${i}`, type: "none" },
    });
    reactSigmaData.nodes.push({
      id: i,
      label: `Node ${i}`,
      title: `node ${i} tootip text`,
    });
    reactVisData.nodes.push({
      id: i + value,
      label: `Node ${i}`,
    });
  }
  for (let i = 0; i < value; i++) {
    for (let j = 0; j < 2; j++) {
      const probs = Math.random();
      if (probs > 0.5) {
        const targetValue = Math.floor(Math.random() * (i + 5));
        reactCytoscapeData.edges.push({
          data: { source: i, target: targetValue },
        });
        reactSigmaData.edges.push({ from: i, to: targetValue });
        reactVisData.edges.push({ from: i + value, to: targetValue + value });
      }
    }
  }
};
const value = 500;
makeData(value);
fs.writeFileSync(
  `./data/CytoscapeData${value}.json`,
  JSON.stringify(reactCytoscapeData, null, 2)
);

fs.writeFileSync(
  `./data/SigmaData${value}.json`,
  JSON.stringify(reactSigmaData, null, 2)
);

fs.writeFileSync(
  `./data/VisData${value}.json`,
  JSON.stringify(reactVisData, null, 2)
);
