import logo from './logo.svg';
import './App.css';
// a lot of Css can be split into separate css files and imported

// functional components hooks

import Matthew from "./matthew";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Matthew/>
      </header>
    </div>
  );
}

export default App;
