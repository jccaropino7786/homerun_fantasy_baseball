
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PlayerContainer from './components/PlayerContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <div className="App">
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/players' element={ <PlayerContainer /> } />
        </Routes>
      </div>
    </div> 
  );
}

export default App;
