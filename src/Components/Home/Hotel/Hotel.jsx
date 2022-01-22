 import { Link } from "react-router-dom"
 import PalacioDuhau from "../../../Images/hoteles/palacio-duhau-park-hyatt-arg-2.jpg"
 import FourSeasons from "../../../Images/hoteles/four-seasons-arg-2.jpg"
 import ModHotel from "../../../Images/hoteles/mod-hotel-mendoza-arg-1.jpg"
 import "./Hotel.css"

 function Hotel ({hotel}){
     return(
         <div className="Hotel justify-content-evenly align-items-center">
             <div className="hotel-presentacion justify-content-center align-items-center">
                 <div className="hotel-presentacion-contenedor justify-content-center align-items-center">
                     <div className="hotel-head"><img src={PalacioDuhau} alt="Palacio Duhau | Park Hyatt Buenos Aires"/></div>
                     <div className="hotel-body justify-content-center align-items-center">
                         <h3>Palacio Duhau | Park Hyatt Buenos Aires</h3>
                         <p>Descubre por qué tantos viajeros ven Palacio Duhau - Park Hyatt Buenos Aires como el hotel ideal cuando visitan Buenos Aires. Además de aportar la combinación ideal de calidad, comodidad y ubicación.</p>
                         <div className="hotel-footer justify-content-end align-items-center">
                             <span>Precio por noche: $4.000</span>
                             <span>Buenos Aires, Argentina</span>
                             <Link to={`/hotel/`}>Detalles del hotel</Link>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="hotel-presentacion justify-content-center align-items-center">
                 <div className="hotel-presentacion-contenedor justify-content-center align-items-center">
                     <div className="hotel-head"><img src={FourSeasons} alt="Palacio Duhau | Park Hyatt Buenos Aires"/></div>
                     <div className="hotel-body justify-content-center align-items-center">
                         <h3>Palacio Duhau | Park Hyatt Buenos Aires</h3>
                         <p>Descubre por qué tantos viajeros ven Palacio Duhau - Park Hyatt Buenos Aires como el hotel ideal cuando visitan Buenos Aires. Además de aportar la combinación ideal de calidad, comodidad y ubicación.</p>
                         <div className="hotel-footer justify-content-end align-items-center">
                             <span>Precio por noche: $4.000</span>
                             <span>Buenos Aires, Argentina</span>
                             <Link to={`/hotel/`}>Detalles del hotel</Link>
                         </div>
                     </div>
                 </div>
             </div>
             <div className="hotel-presentacion justify-content-center align-items-center">
                 <div className="hotel-presentacion-contenedor justify-content-center align-items-center">
                     <div className="hotel-head"><img src={ModHotel} alt="Palacio Duhau | Park Hyatt Buenos Aires"/></div>
                     <div className="hotel-body justify-content-center align-items-center">
                         <h3>Palacio Duhau | Park Hyatt Buenos Aires</h3>
                         <p>Descubre por qué tantos viajeros ven Palacio Duhau - Park Hyatt Buenos Aires como el hotel ideal cuando visitan Buenos Aires. Además de aportar la combinación ideal de calidad, comodidad y ubicación.</p>
                         <div className="hotel-footer justify-content-end align-items-center">
                             <span>Precio por noche: $4.000</span>
                             <span>Buenos Aires, Argentina</span>
                             <Link to={`/hotel/`}>Detalles del hotel</Link>
                         </div>
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