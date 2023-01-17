import './index.scss';
import { useState } from 'react';

function App() {
  const [seconds, setSeconds] = useState(0);
  const minus = () => {
    setSeconds(seconds - 1)
  }
  const plus = () => {
    setSeconds(seconds + 1);
  }


  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{seconds}</h1>
        <button 
          className="minus" 
          onClick={minus}
        >- Минус
        </button>
        <button 
        className="plus"
        onClick={plus}
        >Плюс +
        </button>
      </div>
    </div>
  );
}

export default App;
