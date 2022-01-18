import "../Home/Home.css"
import Contact from "../Contact/Contact"
import Uruguay from "../../Images/paisajes/uruguay.jpg"
import Grecia from "../../Images/paisajes/grecia.jpg"
import Chile from "../../Images/paisajes/chile.jpeg"
import About from "../About/About"

 function Home () {
     return(
         <div className="Home">
             <div className="presentacion-home justify-content-center align-items-center">
                 <div className="presentacion-home-contenedor container-fluid justify-content-center align-items-center">
                     <h1>E X P L O R E</h1>
                     <h2>Noruega</h2>
                     <a href="">Ver lugares</a>
                 </div>
                 <div className="seleccion-paises">
                     <div className="seleccion-paises-contenedor container-xxl">
                         <ul className="nav justify-content-evenly">
                             <li className="nav-item"><a className="nav-link" href="#">Europa</a></li>
                             <li className="nav-item"><a className="nav-link" href="#">America</a></li>
                             <li className="nav-item"><a className="nav-link" href="#">Promociones</a></li>
                             <li className="nav-item"><a className="nav-link" href="#">Oceania</a></li>
                             <li className="nav-item"><a className="nav-link" href="#">Asia</a></li>
                         </ul>
                     </div>
                 </div>
             </div>
             <Contact/>
             <About/>
         </div>
    )
}
export default Home;