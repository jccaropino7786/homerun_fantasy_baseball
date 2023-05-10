
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div>
      <NavBar/>
      <div className="App">
        {/* <Routes>
          <Route path='/' element={<Home/>} />
        </Routes> */}
      </div>
    </div> 
  );
}

export default App;
