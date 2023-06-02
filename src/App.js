import './App.css';
import { useState } from 'react';

export const data = [
  {
    id: 1,
    item: "shoes",
		price: 100,
  },
{
    id: 2,
    item: "jacket",
		price: 400,
  },
{
    id: 3,
    item: "hat",
		price: 50,
  },
{
    id: 4,
    item: "sunglasses",
		price: 250,
  },
{
    id: 5,
    item: "gloves",
		price: 300,
  },
];

function App() {
  // const [data,setData] = useState(db);
  const [lowerLimit , setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(0);
  const [filteredList, setFilteredList] =useState([])
  const handleLowerLimit = (e) =>{
    setLowerLimit(e.target.value);
  }
  const handleUpperLimit = (e) =>{
    setUpperLimit(e.target.value);
  }
  const handleClick = () =>{
    const updatedcart = data.filter((item) => item.price>=lowerLimit && item.price <= upperLimit)
    setFilteredList(updatedcart);
  }
// console.log(data);
// console.log(lowerLimit);
// console.log(upperLimit);
  return (
    <div className="App">
      <div><span>Lower Limit</span> <input value={lowerLimit} onChange={handleLowerLimit}/></div>
      <div><span>Upper Limit</span> <input value={upperLimit} onChange={handleUpperLimit}/></div>
      <button className='btn' onClick={handleClick}>Find</button>
      <br/> <br/>
      {
        filteredList.map((item) => <p key={item.id}>{item.item} - {item.price}</p>)
      }
    </div>
  );
}

export default App;
