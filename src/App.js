import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/page';
import Focused from './components/Focused/Focus';

import Symbols from './components/Symbols/Symbols';
import './App.css';


function App() {
  return (
    <div >
      <Navbar/>
      <Home/>
      <Focused/> 
       <Symbols/>
    </div>
  );
}

export default App;
