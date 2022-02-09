import {
  GraphView // required
  //  type LayoutEngineType // required to change the layoutEngineType, otherwise optional
} from "react-digraph";

import React, { useState, useRef } from "react";

import { Grid, Paper } from "@material-ui/core";

import "./Graph.css";
import {
  default as nodeConfig,
  EMPTY_EDGE_TYPE,
  CUSTOM_EMPTY_TYPE,
  POLY_TYPE,
  SPECIAL_CHILD_SUBTYPE,
  SPECIAL_EDGE_TYPE,
  SPECIAL_TYPE,
  SKINNY_TYPE
} from "./config";

const sample = {
  edges: [
    {
      handleText: "5",
      source: "start1",
      target: "a1",
      type: SPECIAL_EDGE_TYPE
    },
    {
      handleText: "5",
      source: "a1",
      target: "a2",
      type: SPECIAL_EDGE_TYPE
    },
    {
      handleText: "54",
      source: "a2",
      target: "a4",
      type: EMPTY_EDGE_TYPE
    },
    {
      handleText: "54",
      source: "a1",
      target: "a3",
      type: EMPTY_EDGE_TYPE
    },
    {
      handleText: "54",
      source: "a3",
      target: "a4",
      type: EMPTY_EDGE_TYPE
    },
    {
      handleText: "54",
      source: "a1",
      target: "a5",
      type: EMPTY_EDGE_TYPE
    },
    {
      handleText: "54",
      source: "a4",
      target: "a1",
      type: EMPTY_EDGE_TYPE
    },
    {
      handleText: "54",
      source: "a1",
      target: "a6",
      type: EMPTY_EDGE_TYPE
    },
    {
      handleText: "24",
      source: "a1",
      target: "a7",
      type: EMPTY_EDGE_TYPE
    }
  ],
  nodes: [
    {
      id: "start1",
      title: "Start (0)",
      type: SPECIAL_TYPE
    },
    {
      id: "a1",
      title: "Node A (1)",
      type: SPECIAL_TYPE,
      x: 258.3976135253906,
      y: 331.9783248901367
    },
    {
      id: "a2",
      subtype: SPECIAL_CHILD_SUBTYPE,
      title: "Node B (2)",
      type: CUSTOM_EMPTY_TYPE,
      x: 593.9393920898438,
      y: 260.6060791015625
    },
    {
      id: "a3",
      title: "Node C (3)",
      type: CUSTOM_EMPTY_TYPE,
      x: 237.5757598876953,
      y: 61.81818389892578
    },
    {
      id: "a4",
      title: "Node D (4)",
      type: CUSTOM_EMPTY_TYPE,
      x: 600.5757598876953,
      y: 600.81818389892578
    },
    {
      id: "a5",
      title: "Node E (5)",
      type: null,
      x: 50.5757598876953,
      y: 500.81818389892578
    },
    {
      id: "a6",
      title: "Node E (6)",
      type: SKINNY_TYPE,
      x: 300,
      y: 600
    },
    {
      id: "a7",
      title: "Node F (7)",
      type: POLY_TYPE,
      x: 0,
      y: 300
    }
  ]
};
const GraphConfig = nodeConfig;

const NODE_KEY = "id"; // Allows D3 to correctly update DOM

export default function Graph() {
  // this is the initial value of the state
  const [nodes, setNodes] = useState(sample.nodes);
  const [edges, setEdges] = useState(sample.edges);
  const myRef = useRef("someval?");

  const [selected, setSelected] = useState(null);

  const NodeTypes = GraphConfig.NodeTypes;
  const NodeSubtypes = GraphConfig.NodeSubtypes;
  const EdgeTypes = GraphConfig.EdgeTypes;

  function onCreateEdge(src, tgt) {
    console.log("edge created");
    console.log(src);
    console.log(tgt);

    const newEdge = {
      source: src.id,
      target: tgt.id,
      type: "emptyEdge"
    };

    setEdges((prev) => [...prev, newEdge]);
  }

  function onCreateNode(nodeType) {
    const title = "New Node";
    const x = 0;
    const y = 300;

    // This is just an example - any sort of logic
    // could be used here to determine node type
    // There is also support for subtypes. (see 'sample' above)
    // The subtype geometry will underlay the 'type' geometry for a node
    // const type = Math.random() < 0.25 ? SPECIAL_TYPE : EMPTY_TYPE;
    var type = nodeType;
    console.log(nodeType);

    const viewNode = {
      id: Date.now(),
      title,
      type,
      x,
      y
    };

    setNodes((prev) => [...prev, viewNode]);
  }

  function onCreateNodeClick(x, y) {
    const type = "square";
    const title = "New Node";
    const viewNode = {
      id: Date.now(),
      title,
      type,
      x,
      y
    };
    console.log(viewNode);
    setNodes((prev) => [...prev, viewNode]);
  }

  function onUpdateNode(viewNode) {
    console.log("on update node");
    console.log(viewNode);
    onSelectNode(viewNode);
    var i, index;
    for (i = 0; i < nodes.length; i++) {
      if (nodes[i].id === viewNode.id) index = i;
    }

    var mycopy = nodes;
    mycopy[index] = viewNode;
    setNodes(mycopy);
  }

  function onSelectNode(viewNode, event) {
    console.log("on select node");
    console.log(viewNode);
    console.log(event);
    console.log(edges);
    // Deselect events will send Null viewNode
    setSelected(viewNode);
  }

  function onDeleteNode(viewNode, nodeId, nodeArr) {
    console.log("on delete node");
    console.log(viewNode);

    // Delete any connected edges
    const newEdges = edges.filter((edge, i) => {
      return edge.source !== viewNode.id && edge.target !== viewNode.id;
    });

    console.log("new edges");
    console.log(newEdges);

    // graph.nodes = nodeArr;

    var newNodes = nodes.filter((node, i) => {
      return node.id !== viewNode.id;
    });

    setEdges(newEdges);
    setNodes(newNodes);
  }

  function onSelectEdge(viewEdge) {
    console.log("on select edge");
    // Deselect events will send Null viewNode
    setSelected(viewEdge);
  }

  function onSwapEdge(sourceViewNode, targetViewNode, viewEdge) {
    var i, index;
    console.log(viewEdge);
    for (i = 0; i < edges.length; i++) {
      if (
        edges[i].source === viewEdge.source &&
        edges[i].target === viewEdge.target
      )
        index = i;
    }

    const edge = {
      source: sourceViewNode.id,
      target: targetViewNode.id,
      handleText: viewEdge.handleText,
      type: viewEdge.type
    };

    //edge.source = sourceViewNode;
    //edge.target = targetViewNode;
    console.log(sourceViewNode);
    console.log(targetViewNode);
    var mycopy = edges;

    mycopy[index] = edge;
    console.log(index);

    // reassign the array reference if you want the graph to re-render a swapped edge

    setEdges(mycopy);
  }

  function onDeleteEdge(e, ed) {
    console.log("on delete edge");
    var i, index;
    for (i = 0; i < edges.length; i++) {
      if (edges[i].source === e.source && edges[i].target == e.target)
        index = i;
    }
    console.log(e);

    var mycopy = edges;
    mycopy.splice(index, 1);
    setEdges(mycopy);
    // implement find index by id first
  }

  return (
    <div
      id="graph"
      style={{
        backgroundColor: "white",
        height: "100%",
        width: "100%",
        textAlign: "left"
      }}
    >
      Click on the following buttons to create new nodes
      <br />
      <Grid container direction="row">
        <Grid item>
          <Paper
            elevation={16}
            //variant="outlined"
            style={{ height: "22vh", backgroundColor: "white" }}
          >
            <Grid container direction="column" spacing={1}>
              <Grid item sm={1}>
                <button
                  className="NodeButton"
                  onClick={() => onCreateNode(CUSTOM_EMPTY_TYPE)}
                >
                  Circle
                </button>
              </Grid>
              <Grid item xs={1}>
                <button
                  className="NodeButton"
                  onClick={() => onCreateNode(SPECIAL_TYPE)}
                >
                  Diamond
                </button>
              </Grid>
              <Grid item xs={1}>
                <button
                  className="NodeButton"
                  onClick={() => onCreateNode(SKINNY_TYPE)}
                >
                  Rectangle
                </button>
              </Grid>
              <Grid item xs={1}>
                <button
                  className="NodeButton"
                  onClick={() => onCreateNode(POLY_TYPE)}
                >
                  Poly
                </button>
              </Grid>
              <Grid item xs={1}>
                <button
                  className="NodeButton"
                  onClick={() => onCreateNode("empty")}
                >
                  Empty
                </button>
              </Grid>
              <Grid item xs={1}>
                <div
                  style={{
                    marginTop: "3vh",
                    backgroundColor: "white",
                    width: "12vw"
                  }}
                >
                  KeyBoard Shortcuts :
                  <br />
                  1. Shift + click on graph to create new node
                  <br />
                  2. Shift + click on node then drag to create new edge
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item>
          <div
            style={{
              height: "70vh",
              width: "86vw",
              backgroundColor: "black"
            }}
          >
            <GraphView
              ref={myRef}
              nodeKey={NODE_KEY}
              nodes={nodes}
              edges={edges}
              selected={selected}
              nodeTypes={NodeTypes}
              nodeSubtypes={NodeSubtypes}
              edgeTypes={EdgeTypes}
              allowMultiselect={true}
              onSelect={this.onSelect}
              onCreateNode={(x, y) => onCreateNodeClick(x, y)}
              onUpdateNode={(node) => onUpdateNode(node)}
              onDeleteNode={(viewNode, nodeId, nodeArr) =>
                onDeleteNode(viewNode, nodeId, nodeArr)
              }
              onCreateEdge={(src, tgt) => onCreateEdge(src, tgt)}
              onSwapEdge={(src, tgt, view) => onSwapEdge(src, tgt, view)}
              onDeleteEdge={(e, edges) => onDeleteEdge(e, edges)}
              onSelectNode={(node, e) => onSelectNode(node, e)}
              onSelectEdge={(edge) => onSelectEdge(edge)}
              //renderNode={() => renderNode()}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
