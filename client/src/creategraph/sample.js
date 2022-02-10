import {
  DATABASE_TYPE,
  TEXTTRACT_TYPE,
  LAMBDA_TYPE,
  SERVER_TYPE,
  BROWSER_TYPE,
  EMPTY_EDGE_TYPE,
  SPECIAL_EDGE_TYPE,
  SPECIAL_EDGE_TYPE_REVERSE,
  LOGIN_TYPE
} from "./config";

export const sample = {
  edges: [
    {
      handleText: "1",
      source: "server",
      target: "browser",
      type: SPECIAL_EDGE_TYPE
    },
    {
      handleText: "2",
      source: "browser",
      target: "database",
      type: SPECIAL_EDGE_TYPE
    },
    {
      handleText: "3",
      source: "login",
      target: "database",
      type: SPECIAL_EDGE_TYPE_REVERSE
    },
    // {
    //   handleText: "4",
    //   source: "database",
    //   target: "login",
    //   type: EMPTY_EDGE_TYPE
    // },
    {
      handleText: "5",
      source: "browser",
      target: "textract",
      type: EMPTY_EDGE_TYPE
    },
    {
      handleText: "6",
      source: "textract",
      target: "login",
      type: EMPTY_EDGE_TYPE
    },
    {
      handleText: "7",
      source: "browser",
      target: "lambda",
      type: EMPTY_EDGE_TYPE
    },
    {
      handleText: "8",
      source: "login",
      target: "browser",
      type: EMPTY_EDGE_TYPE
    }
  ],
  nodes: [
    {
      id: "server",
      title: "Server",
      type: SERVER_TYPE
    },
    {
      id: "database",
      title: "DB",
      type: DATABASE_TYPE,
      x: 600.5757598876953,
      y: 600.81818389892578
    },
    {
      id: "browser",
      title: "Browser",
      type: BROWSER_TYPE,
      x: 258.3976135253906,
      y: 331.9783248901367
    },
    {
      id: "textract",
      title: "Texttract",
      type: TEXTTRACT_TYPE,
      x: 237.5757598876953,
      y: 61.81818389892578
    },
    {
      id: "lambda",
      title: "Lambda",
      type: LAMBDA_TYPE,
      x: 50.5757598876953,
      y: 500.81818389892578
    },
    {
      id: "login",
      title: "Login",
      type: LAMBDA_TYPE,
      x: 550.5757598876953,
      y: 100.81818389892578
    }
  ]
};

