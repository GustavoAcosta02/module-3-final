import './App.css';
import Home from "./componets/Home"
import Nav from "./componets/Nav"
import Tickets from "./componets/Tickets"
import Register from "./componets/Register"
import Login from "./componets/Login"
import { BrowserRouter, Routes, Route,} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Nav />
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/tickets" element = {<Tickets />}/>
          <Route path = "/register" element = {<Register />}/>
          <Route path = "/login" element = {<Login />}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
