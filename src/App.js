import React from "react";
import "./style.css";

export const ColorsContext = React.createContext(["black"]);

export function ColoredBlocks() {
  return (
    <ColorsContext.Consumer>
      {colors => colors.map(c => <div style={{ background: c }} key={c}/>)}
    </ColorsContext.Consumer>
  );
}

const coldColors = ["#4B6F80", "#E3F6FF", "#96DEFF", "#08608A", "#78B2CC"];
const warmColors = ["#801D13", "#FAD6CF", "#E0553D", "#804039", "#CC301F"];

export default function App() {
  return (
    <div>
      <ColorsContext.Provider value={coldColors}>
        {/* ColoredBlocks can be nested however deep  */}
        <ColoredBlocks />
      </ColorsContext.Provider>
      <br />
      <ColorsContext.Provider value={warmColors}>
        <ColoredBlocks />
      </ColorsContext.Provider>
    </div>
  );
}
