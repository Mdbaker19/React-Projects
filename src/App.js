import React, {useState} from 'react';
import './App.css';
// a lot of Css can be split into separate css files and imported

// functional components hooks

import CoffeeList from "./coffeeList";


function App() {

    const [lightList] = useState(["French", "Vanilla"])
    const [mediumList] = useState(["Carmel", "Roasted"])
    const [darkList] = useState(["Darker", "Burnt"])
    const [allList] = useState([...lightList, ...mediumList, ...darkList])

  return (
    <div className="App">
      <header className="App-header">
          <CoffeeList ListArray={allList}/>
      </header>
    </div>
  );
}

export default App;
