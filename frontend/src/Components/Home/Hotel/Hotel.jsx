 import { Link } from "react-router-dom"
 import PalacioDuhau from "../../../Images/hoteles/palacio-duhau-park-hyatt-arg-2.jpg"
 import FourSeasons from "../../../Images/hoteles/four-seasons-arg-2.jpg"
 import ModHotel from "../../../Images/hoteles/mod-hotel-mendoza-arg-1.jpg"
 import UniqueArtMadero from "../../../Images/hoteles/unique-art-madero-arg-1.jpg"
 import "./Hotel.css"

 function Hotel (){
     return(
         <div className="cards-hoteles justify-content-center align-items-center">
           <div className="cards-hoteles-contenedor justify-content-center align-items-center">
             <div class="card">
               <img src={PalacioDuhau} class="card-img-top" alt="..."/>
               <div class="card-body">
                 <h5 class="card-title">Palacio Duhau Hotel</h5>
               </div>
               <ul class="list-group list-group-flush">
                 <li class="list-group-item puntaje"><p><span class="fi fi-rr-star"></span><span class="fi fi-rr-star"></span><span class="fi fi-rr-star"></span><span class="fi fi-rr-star"></span><span class="fi fi-rr-star"></span></p></li>
                 <li class="list-group-item precio">USD$ 500 c/n</li>
               </ul>
               <div class="card-body justify-content-center align-items-center d-flex">
                 <Link to="/" class="card-link">Ver Detalles del hotel</Link>
               </div>
             </div>
             <div class="card">
               <img src={ModHotel} class="card-img-top" alt="..."/>
               <div class="card-body">
                 <h5 class="card-title">Mod Hotel</h5>
               </div>
               <ul class="list-group list-group-flush">
                 <li class="list-group-item puntaje"><p><span class="fi fi-rr-star"></span><span class="fi fi-rr-star"></span><span class="fi fi-rr-star"></span><span class="fi fi-rr-star"></span></p></li>  
                 <li class="list-group-item precio">USD$ 500 c/n</li>
               </ul>
               <div class="card-body justify-content-center align-items-center d-flex">
                 <Link to="/" class="card-link">Ver Detalles del hotel</Link>
               </div>
             </div>
             <div class="card">
               <img src={FourSeasons} class="card-img-top" alt="..."/>
               <div class="card-body">
                 <h5 class="card-title">Four Seasons Hotel</h5>
               </div>
               <ul class="list-group list-group-flush">
                 <li class="list-group-item puntaje"><p><span class="fi fi-rr-star"></span><span class="fi fi-rr-star"></span><span class="fi fi-rr-star"></span><span class="fi fi-rr-star"></span><span class="fi fi-rr-star"></span></p></li>  
                 <li class="list-group-item precio">USD$ 500 c/n</li>
               </ul>
               <div class="card-body justify-content-center align-items-center d-flex">
                 <Link to="/" class="card-link">Ver Detalles del hotel</Link>
               </div>
             </div>
           </div>
         </div>
    )
}
export default Hotel             


             {/* <div className="hotel-presentacion">
                 <div className="hotel-presentacion-contenedor">
                     <div className="hotel-head"><img src={hotel.imagen} alt={hotel.titulo}/></div>
                     <div className="hotel-body">
                         <h3>{hotel.titulo}</h3>
                         <p>{hotel.descipcion}</p>
                         <span>{hotel.localidad}</span>
                         <Link to={`/hotel/${hotel.id}`}>Detalles del hotel</Link>
                     </div>
                 </div>
             </div>*/}