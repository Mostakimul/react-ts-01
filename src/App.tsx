import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h2>Hello pnpm + vite + ts</h2>
    </div>
  );
}

export default App;
