import { Fragment,useState } from "react";
import "./styles.css";

export default function Radio() {
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
   <Fragment>
     
        <div onChange={e => setValor(e.target.value)}>
        {
            items.map(item => 
                (
                  <Fragment>
                  <input type="radio" key={item.value} value={item.value} checked={valor === item.value} />
                  <label>  {item.value}</label>                  
                  </Fragment>
                )
            )
        }
        </div>
        {valor}
     
    </Fragment>
    
  )
}
