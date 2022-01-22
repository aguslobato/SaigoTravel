import "./Presentacion.css"
import Uruguay from "../../../Images/paisajes/uruguay.jpg"
import Grecia from "../../../Images/paisajes/grecia.jpg"
import Chile from "../../../Images/paisajes/chile.jpeg"
import Contact from "../../Contact/Contact"
import About from "../../About/About"
import { Link } from "react-router-dom"

 function Presentacion () {
     return(
         <div className="Presentacion">
             <div className="presentacion-home justify-content-center align-items-center">
                 <div className="presentacion-home-contenedor container-fluid justify-content-center align-items-center">
                     <h1>E X P L O R E</h1>
                     <h2>Argentina</h2>
                     <a href="" className="btn btn-outline-success">Ver lugares</a>
                 </div>
                 <div className="seleccion-paises">
                     <div className="seleccion-paises-contenedor container-xxl">
                         <ul className="nav justify-content-evenly">
                             <li className="nav-item"><Link className="nav-link" to="/">Europa</Link></li>
                             <li className="nav-item"><Link className="nav-link" to="/">Oceania</Link></li>
                             <li className="nav-item"><Link className="nav-link" to="/">Promociones</Link></li>
                             <li className="nav-item"><Link className="nav-link" to="/">Asia</Link></li>
                             <li className="nav-item"><Link className="nav-link" to="/">America</Link></li>
                         </ul>
                     </div>
                 </div>
             </div>
         </div>
    )
}
export default Presentacion;