import { useState } from "react";
import { send } from "../socketApi";

function Palette() {
  const [color, setColor] = useState("#000");

  return (
    <div className="palette">
      <input
        type="color"
        value={color}
        onChange={({ target }) => setColor(target.value)}
      />
      <button onClick={() => send(color)}>Click</button>
    </div>
  );
}

export default Palette;
