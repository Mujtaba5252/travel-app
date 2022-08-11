import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Signup from './Components/Signup';


function App() {
  return (
    <div className="App">

      <Login/>

   
    </div>
  );
}

export default App;
