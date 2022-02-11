 import "./Lugares.css"
 import { Link } from "react-router-dom" 
 import Uruguay from '../../../Images/paisajes/uruguay.jpg'
 import Argentina from '../../../Images/paisajes/argentina.jpg'
 import Alemania from '../../../Images/paisajes/alemania.jpg'
 import Brasil from '../../../Images/paisajes/brasil.jpg'
 import MorePlaces from "./MorePlaces/MorePlaces"   
 import { Tooltip } from '@chakra-ui/react'
 import {Button} from '@chakra-ui/react'

 function Lugares() {
     
     return(
         <div className="Lugares justify-content-center align-items-center">
             <div className="cards-lugares">
                 <div className="cards-lugares-contenedor">
                     <div class="card mb-3">
                         <div class="row g-0">
                             <div class="col"><img src={Uruguay} class="img-fluid rounded-start" alt="..."/></div>
                             <div class="col">
                                 <div class="card-body">
                                     <h5 class="card-title text-center">Uruguay</h5>
                                     <p><code>$40.000</code></p>
                                     <p><span class="fi fi-rr-star"></span><span class="fi fi-rr-star"></span><span class="fi fi-rr-star"></span><span class="fi fi-rr-star"></span><span class="fi fi-rr-star"></span></p>
                                     <Link to="/">Ver Detalles</Link>
                                 </div>
                             </div>      
                             <div class="card-footer">
                                 <p class="card-text"><Link to="/"><span class="fi fi-rr-bookmark fav"></span></Link></p> 
                                 <p class="card-text"><Link to="/"><span class="fi fi-rr-heart like"></span></Link></p> 
                                 <p class="card-text"><Link><span class="fi fi-rr-shopping-cart-add cart-add"></span></Link></p>
                             </div>
                         </div>
                     </div>
                     <div class="card mb-3">
                         <div class="row g-0">
                             <div class="col"><img src={Argentina} class="img-fluid rounded-start argentina es el hijo de inglaterra.... lu ama a inglaterra" alt="..."/></div>
                             <div class="col">
                                 <div class="card-body">
                                     <h5 class="card-title text-center">Argentina</h5>
                                     <p><code>$40.000</code></p>
                                     <p><span class="fi fi-rr-star"></span><span class="fi fi-rr-star"></span><span class="fi fi-rr-star"></span><span class="fi fi-rr-star"></span></p>
                                     <Link to="/">Ver Detalles</Link>
                                 </div>
                             </div>      
                             <div class="card-footer">
                                 <p class="card-text"><Link to="/"><span class="fi fi-rr-bookmark fav"></span></Link></p> 
                                 <p class="card-text"><Link to="/"><span class="fi fi-rr-heart like"></span></Link></p> 
                                 <p class="card-text"><Link><span class="fi fi-rr-shopping-cart-add cart-add"></span></Link></p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <MorePlaces/>
         </div>
    )
}
export default Lugares                      
                                 