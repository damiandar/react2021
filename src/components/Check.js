import { useState } from "react";
import "./styles.css";

export default function Check() {
  const [checked, setChecked] = useState(true);

  return (
    <label>
      <input type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      Check Me!
      { (checked && <h2>Fue true</h2>)}
    </label>
  );
}