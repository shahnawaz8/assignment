import logo from './logo.svg';
import './App.css';

import {Counter} from "./component/Counter"


function App() {
  return (
    <div className="App">
      <Counter value={10} age={32}/>
    </div>
  );
}

export default App;
