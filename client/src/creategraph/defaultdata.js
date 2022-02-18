import {CUSTOM_EMPTY_TYPE, SPECIAL_TYPE , SPECIAL_EDGE_TYPE } from './config2'

export default {
    name : "",
    nodes : [
      {
        id: "a1",
        title: "StartingNode",
        type: SPECIAL_TYPE,
        x: 250,
        y: 350
      },
      {
        id: "a2",
        title: "Node 2",
        type: SPECIAL_TYPE,
        x: 250,
        y: 650
      }
    ],
    edges : [
      {
        handleText: "1",
        source: "a2",
        target: "a1",
        type: SPECIAL_EDGE_TYPE
      },
    ],
    //selected : {}
    }