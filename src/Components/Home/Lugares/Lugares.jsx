import "./Lugares.css"
import { Link } from "react-router-dom" 
import MorePlaces from "./MorePlaces/MorePlaces"   
function Lugares() {
    return(
        <div className="Lugares justify-content-center align-items-center">
             <MorePlaces/>
             <section class="proyectos-ejemplos" id="proyectos">
                 <h1>Promociones</h1>
                 <div class="proyectos-ejemplos-contenedor">
                     <div class="card-proyecto" id="argentina">
                         <div class="card-proyecto-contenedor">
                             <div class="card-proyecto-body"><h5>Argentina</h5></div>
                             <div class="card-proyecto-footer"> 
                                 <span class="fi fi-rr-bookmark"></span>
                                 <span class="fi fi-rr-heart"></span>
                             </div>
                             <Link to="/">Ver Pais</Link>
                         </div>
                     </div>
                     <div class="card-proyecto" id="chile">
                         <div class="card-proyecto-contenedor">
                             <div class="card-proyecto-body"><h5>Chile</h5></div>
                             <div class="card-proyecto-footer">
                                 <span class="fi fi-rr-bookmark"></span>
                                 <span class="fi fi-rr-heart"></span>
                             </div>
                             <Link to="/">Ver Pais</Link>
                         </div>
                     </div>
                     <div class="card-proyecto" id="francia">
                         <div class="card-proyecto-contenedor">
                             <div class="card-proyecto-body"><h5>Francia</h5></div>
                             <div class="card-proyecto-footer">
                                 <span class="fi fi-rr-bookmark"></span>
                                 <span class="fi fi-rr-heart"></span>
                             </div>
                             <Link to="/">Ver Pais</Link>
                         </div>
                     </div>
                 </div>
                 <a href="" className="ver-promociones">Más Promociones</a>
             </section>
        </div>
    )
}
export default Lugares                      
