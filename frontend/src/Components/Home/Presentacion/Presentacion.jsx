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
                     <h2>The World</h2>
                     <Link to="/" className="btn btn-outline-success">Ver lugares</Link>
                 </div>
                 <div className="gestion-viaje justify-content-center align-items-center d-flex">
                     <div className="gestion-viaje-contenedor container-xxl">
                         <table class="table justify-content-center align-items-center d-flex table-hover">
                             <thead className="justify-content-center align-items-center">
                             <ul class="nav justify-content-center">
                                 <li class="nav-item"><Link class="nav-link active" aria-current="page" to="/">Stays</Link></li> 
                                 <li class="nav-item"><Link class="nav-link" to="/">Flights</Link></li>
                                 <li class="nav-item"><Link class="nav-link" to="/">Cars</Link></li>
                                 <li class="nav-item"><Link class="nav-link" to="/">Packages</Link></li>
                                 <li class="nav-item"><Link class="nav-link" to="/">Things to do</Link></li>
                                 <li class="nav-item"><Link class="nav-link" to="/">Cruises</Link></li>
                             </ul>
                             </thead>
                             <tbody>
                                 <tr>
                                     <th scope="row"><input class="form-control me-4" type="search" placeholder="Buscar Lugar" aria-label="Search"/></th>
                                     <td colspan="2" class="table-active"><input class="form-control me-4" type="search" placeholder="Check-in" aria-label="Search"/></td>
                                     <td><input class="form-control me-4" type="search" placeholder="Check-out" aria-label="Search"/></td>
                                 </tr>
                                 <Link to="/">Buscar</Link>
                             </tbody>
                         </table>
                     </div>
                 </div> 
             </div>
         </div>
    )
}
export default Presentacion;                