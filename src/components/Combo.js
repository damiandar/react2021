import { useState } from "react";
import "./styles.css";

export default function Combo() {
  const [valor,setValor]=useState(0);
  const [items] = useState([
    {
      label: "Luke Skywalker",
      value: "Luke Skywalker"
    },
    { label: "C-3PO", value: "C-3PO" },
    { label: "R2-D2", value: "R2-D2" }
  ]);
  return (
    <div className="App">
        <h1>Combo</h1>
        <select onChange={e => setValor(e.currentTarget.value)}  multiple size="4">
        {
            items.map(item => 
                (<option key={item.value} value={item.value}>
                    {item.label}
                </option>)
            )
        }
        </select>
        Valor seleccionado: {valor}
    </div>
  );
}
