import NavBar from "./Components/Navbar/Navbar";
import Presentacion from "./Components/Home/Presentacion/Presentacion";
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About"
import Home from "./Components/Home/Home"

 function App() {
   return (
     <Router>
       <div className="App">
         <NavBar/>
         <Presentacion/>
         <Switch>
           <Route exact path="/"><Home/></Route>
           <Route exact path="/contacto"><Contact/></Route>
           <Route exact path="/nosotros"><About/></Route>
         </Switch>
       </div> 
     </Router>
  );
}

export default App;
