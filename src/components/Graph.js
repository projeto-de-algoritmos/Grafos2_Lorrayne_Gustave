const createGraph = () => {
  return new Map()
}

// cria a aresta unidirecional com preço
const addDirectedLink = (graph, source, node, price) => {
  graph.get(source).push({ node, price });
}

const printGraph = (graph) => {
  const vertices = graph.keys();
  let finalGraph = "";

  for (let i of vertices) {
    const nodes = graph.get(i);
    let conc = "";

    for (let j of nodes) {
      conc += "Trajeto: " + i + " -----------> " + j.node + " [Custo: R$ " + j.price + ".00 ]\n";;
    }
    finalGraph += conc;
  }
  return finalGraph;
}

export default {
  printGraph,
  addDirectedLink,
  createGraph
}
