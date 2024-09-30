import { useState } from "react";
import "./App.css";
import Cards from "./conponents/Cards";

function App() {
  const [count, setCount] = useState(0);

  // let myObj = {
  //   name: 'Hitesh Choudary',
  //   channel: 'chaiaurcode@gmail.com'
  // }

  return (
    <>
      <h1 className="bg-green-300 text-black p-4 rounded-xl">TailWind</h1>
      <Cards username='chaiaurcode' price='25' />
      <Cards username='Hitesh Choudary'/>
     
    </>
  );
}

export default App;
