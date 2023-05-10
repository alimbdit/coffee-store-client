import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard";
import { useEffect, useState } from "react";

function App() {
  const coffees = useLoaderData();

  const [ allCoffee, setAllCoffee] = useState(coffees);

  // useEffect(() => {
  //   fetch('http://localhost:5000/coffee')
  //   .then(res=>res.json())
  //   .then(data => setAllCoffee(data))
  // } , [isDelete])


  return (
    <div className="text-center">
      <h1 className="text-6xl text-purple-600">
        Hot Hot Cold Coffee: {allCoffee.length}
      </h1>

      <div className="grid md:grid-cols-2 gap-5">
        
        {
          allCoffee && allCoffee.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee} allCoffee ={allCoffee} setAllCoffee={setAllCoffee}></CoffeeCard>)
        }
      </div>
    </div>
  );
}

export default App;
