import "./styles.css";
import Graph from "../components/Graph";

export default function MainPage() {
  return (
    <div className="App">
      <h1> Graphs </h1>
      <Graph style={{ height: "150px" }} />
  
    </div>
  );
}
