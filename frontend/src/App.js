import NavBar from "./Components/Navbar/Navbar";
import Presentacion from "./Components/Home/Presentacion/Presentacion";
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About"
import Home from "./Components/Home/Home"
import Footer from "./Components/Footer/Footer";
import { useEffect } from "react";
// import axios from "axios"

  //  let viajes= await axios.get('localhost:8080/api/products')
 function App() {       
   let pairs = [];
   useEffect(()=>{
  const apiCall = async () => {
      await fetch('http://localhost:8080/api/products')
          // .then((res) => console.log(res.json()))
          .then((data) => console.log(data));
   }  
   apiCall()
   console.log(pairs)
  },[pairs])

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
         <Footer/>
       </div> 
     </Router>
  );
}

export default App;