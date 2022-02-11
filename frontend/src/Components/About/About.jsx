import "./About.css"
import quienesSomos from "../../Images/iconos/equipo-trabajo.svg"
import nuestraHistoria from "../../Images/iconos/nuestra-historia.svg"
import perfilUsuario from "../../Images/iconos/perfil-usuario.svg"
import soporte from "../../Images/iconos/soporte.svg"
import aireAcondicionado from "../../Images/iconos/aire-acondicionado.png"
import cajaFuerte from "../../Images/iconos/caja-fuerte.png"
import campana from "../../Images/iconos/campana.png"
import camaMatrimonial from "../../Images/iconos/cama-matrimonial.png"
import cucheta from "../../Images/iconos/cucheta.png"
import piscina from "../../Images/iconos/piscina.png"
import ropaBlanca from "../../Images/iconos/ropa-blanca.png"
import comida from "../../Images/iconos/comida.png"
import desayuno from "../../Images/iconos/taza-de-cafe.png"
import jabon from "../../Images/iconos/jabon.png"
import wifi from "../../Images/iconos/wifi.png"
import bitcoin from "../../Images/iconos/bitcoin.png"
import dubai from "../../Images/paisajes/dubai.png"
import catedralBarcelona from "../../Images/paisajes/catedral-barcelona.png"
import islaPascua from "../../Images/paisajes/isla-pascua.png"
import italia from "../../Images/paisajes/italia.png"
import japon from "../../Images/paisajes/japon.png"
import londres from "../../Images/paisajes/londres.png"
import nuevaYork from "../../Images/paisajes/nueva-york.png"
import piramideParis from "../../Images/paisajes/piramide-paris.png"
import roma from "../../Images/paisajes/roma.png"
function About () {
    return(
        <div className="About justify-content-center align-items-center">
             <div className="nosotros justify-content-center align-items-center">
                 <div className="nososotros-contenedor justify-content-center align-items-center container-xl">
                     <div className="cards-about justify-content-center align-items-center">
                         <div className=".cards-about-contenedor justify-content-center align-items-center">
                             <div className="card-about justify-content-between align-items-center">
                                 <div className="card-about-head justify-content-center align-items-center"><img src={quienesSomos} alt="Quienes Somos" /></div>
                                 <div className="card-about-body">
                                     <h3>Quienes Somos</h3>
                                     <p>Somos unas empresa turística conformada por trabajadores Sudcalifornianos dedicados a compartir con nuestros clientes la experiencia de la vida acuática, nuestras embarcaciones están totalmente equipadas con servicios para hacer tu viaje cómodo y seguro, nuestra misión es que usted, su familia y amigos puedan disfrutar este valioso tesoro natural.</p>
                                 </div>
                             </div>
                             <div className="card-about justify-content-between align-items-center">
                                 <div className="card-about-head justify-content-center align-items-center"><img src={nuestraHistoria} alt="Nuestra Historia" /></div>
                                 <div className="card-about-body">
                                     <h3>Nuestra Historia</h3>
                                     <p>Con años de experiencia en las aguas del Golfo de California, nuestros Capitanes, se han dado a la tarea de recorrer el litoral de este acuario natural, para descubrir maravillas que deseaban compartir con los visitantes, surgió así la necesidad de consolidar una empresa turística local que permita dar a conocer nuestras bellezas y sirva de sustento para las familias Sudcalifornianas.</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                     <div className="listado-caracteristicas justify-content-center align-items-center">
                         <div className="listado-caracteristcas-contenedor justify-content-center align-items-start">
                             <div className="caracteristica justify-content-center align-items-center">
                                 <div className="caracteristica-head"><img src={aireAcondicionado} alt="aire acondicionado"/></div>
                                 <div className="caracteristica-body">
                                     <h3>Aire Acondicionado</h3>
                                     <p>Las habitaciones de los hoteles que ofrecemos, cuentan con aire acondicionado frio/calor.</p>
                                 </div>
                             </div>
                             <div className="caracteristica justify-content-center align-items-center">
                                 <div className="caracteristica-head"><img src={cajaFuerte} alt="caja fuerte"/></div>
                                 <div className="caracteristica-body">
                                     <h3>Caja Fuerte</h3>
                                     <p>Todos los cuartos contienen una caja fuerte para guardar cosas personales o de mucho valor.</p>
                                 </div>
                             </div>
                             <div className="caracteristica justify-content-center align-items-center">
                                 <div className="caracteristica-head"><img src={campana} alt="atencion las 24 horas" /></div>
                                 <div className="caracteristica-body">
                                     <h3>Atencion al Cliente las 24 horas</h3>
                                     <p>Contamos con un servicio de soporte hacia el cliente las 24 horas del dia para poder ayudarlo en todo lo que necesite.</p>
                                 </div>
                             </div>
                         </div> 
                         <div className="listado-caracteristcas-contenedor justify-content-center align-items-start">
                             <div className="caracteristica justify-content-center align-items-center">
                                 <div className="caracteristica-head"><img src={piscina} alt="piscina" /></div>
                                 <div className="caracteristica-body">
                                     <h3>Complejo de Piscinas</h3>
                                     <p>Todos nuestros hoteles cuentan con un completo de piscina para su entretenimiento.</p>
                                 </div>
                               </div>
                             <div className="caracteristica justify-content-center align-items-center">
                                 <div className="caracteristica-head"><img src={wifi} alt="wifi privado" /></div>
                                 <div className="caracteristica-body">
                                     <h3>Wifi Privado</h3>
                                     <p>Cada habitacion cuenta con su propio wifi para una mejor experiencia del cliente.</p>
                                 </div>
                             </div>
                             <div className="caracteristica justify-content-center align-items-center">
                                 <div className="caracteristica-head"><img src={comida} alt="servicio de comida" /></div>
                                 <div className="caracteristica-body">
                                     <h3>Restaurante</h3>
                                     <p>Los hoteles cuentan con un restaurante en el cual encontraran una increible variedad de platos de comida.</p>
                                 </div>
                             </div>
                         </div>   
                         <div className="listado-caracteristcas-contenedor justify-content-center align-items-start">
                             <div className="caracteristica justify-content-center align-items-center">
                                 <div className="caracteristica-head"><img src={desayuno} alt="desayuno gratuito" /></div>
                                 <div className="caracteristica-body">
                                     <h3>Desayuno Gratis</h3>
                                     <p>Todos nuestros clientes tienen desayuno gratis en cualquiera de nuestros hoteles como forma de agradecimiento por habernos elegido.</p>
                                 </div>
                             </div>
                             <div className="caracteristica justify-content-center align-items-center">
                                 <div className="caracteristica-head"><img src={camaMatrimonial} alt="cama matrimonial" /></div>
                                 <div className="caracteristica-body">
                                     <h3>Cama Matrimonial</h3>
                                     <p>Cada habitacion cuenta con su cama matrimonial</p>
                                 </div>
                             </div>
                             <div className="caracteristica justify-content-center align-items-center">
                                 <div className="caracteristica-head"><img src={ropaBlanca} alt="Ropa Blanca" /></div>
                                 <div className="caracteristica-body">
                                     <h3>Ropa Blanca</h3>
                                     <p>Todas las habitaciones cuentan con ropa blanca, estas mismas se limpian todas las mañanas por el servicio de limpieza.</p>
                                 </div>
                             </div>
                         </div>
                         <div className="pagos-bitcoin justify-content-center align-items-center">
                             <div className="pagos-bitcoin-contenedor justify-content-center align-items-center">
                                 <div className="pagos-bitcoin-introduccion justify-content-center align-items-center">
                                     <h2>PAGOS EN BITCOIN</h2>
                                     <img src={bitcoin} alt="pagos con bitcoin" />
                                 </div>
                                 <div className="pagos-bitcoin-contenido text-center">
                                     <h3>¿Que es bitcoin?</h3>
                                     <p>Bitcoin es una red consensuada que permite un nuevo sistema de pago y una moneda completamente digital.</p>
                                 </div>
                                 <div className="pagos-bitcoin-caracteristicas justify-content-center align-items-center">
                                     <ul>
                                         <li>Tasas muy bajas </li>
                                         <li>Menores riesgos para los comerciantes</li>
                                         <li>Neutral y transparente</li>
                                         <li>Seguridad y control</li>
                                     </ul>
                                 </div>
                             </div>
                         </div>
                         <div className="listado-caracteristcas-contenedor justify-content-center align-items-start">
                             <div className="caracteristica lugar-turistico justify-content-center align-items-center">
                                 <div className="caracteristica-head"><img src={dubai} alt="piscina" /></div>
                                 <div className="caracteristica-body">
                                     <h3>Burj Al Arab (Dubai)</h3>
                                 </div>
                               </div>
                             <div className="caracteristica lugar-turistico justify-content-center align-items-center">
                                 <div className="caracteristica-head"><img src={catedralBarcelona} alt="wifi privado" /></div>
                                 <div className="caracteristica-body">
                                     <h3>Templo Expiatorio de la Sagrada Familia (España) </h3>
                                 </div>
                             </div>
                             <div className="caracteristica lugar-turistico justify-content-center align-items-center">
                                 <div className="caracteristica-head"><img src={islaPascua} alt="servicio de comida" /></div>
                                 <div className="caracteristica-body">
                                     <h3>Isla de Pascua (Chile)</h3>
                                 </div>
                             </div>
                         </div>   
                         <div className="listado-caracteristcas-contenedor justify-content-center align-items-start">
                             <div className="caracteristica lugar-turistico justify-content-center align-items-center">
                                 <div className="caracteristica-head"><img src={italia} alt="piscina" /></div>
                                 <div className="caracteristica-body">
                                     <h3>Torre de Pisa (Italia)</h3>
                                 </div>
                               </div>
                             <div className="caracteristica lugar-turistico justify-content-center align-items-center">
                                 <div className="caracteristica-head"><img src={japon} alt="wifi privado" /></div>
                                 <div className="caracteristica-body">
                                     <h3>Puerta Torii (Japon)</h3>
                                 </div>
                             </div>
                             <div className="caracteristica lugar-turistico justify-content-center align-items-center">
                                 <div className="caracteristica-head"><img src={londres} alt="servicio de comida" /></div>
                                 <div className="caracteristica-body">
                                     <h3>Big Ben (Reino Unido)</h3>
                                 </div>
                             </div>
                         </div>   
                         <div className="listado-caracteristcas-contenedor justify-content-center align-items-start">
                             <div className="caracteristica lugar-turistico justify-content-center align-items-center">
                                 <div className="caracteristica-head"><img src={piramideParis} alt="piscina" /></div>
                                 <div className="caracteristica-body">
                                     <h3>Pirámide del Museo del Louvre (Francia)</h3>
                                 </div>
                               </div>
                             <div className="caracteristica lugar-turistico justify-content-center align-items-center">
                                 <div className="caracteristica-head"><img src={nuevaYork} alt="wifi privado" /></div>
                                 <div className="caracteristica-body">
                                     <h3>Estatua de la Libertad (Estados Unidos)</h3>
                                 </div>
                             </div>
                             <div className="caracteristica lugar-turistico  justify-content-center align-items-center">
                                 <div className="caracteristica-head"><img src={roma} alt="servicio de comida" /></div>
                                 <div className="caracteristica-body">
                                     <h3>Coliseo Romano (Italia)</h3>
                                 </div>
                             </div>
                         </div>   
                         <div className="cards-about justify-content-center align-items-center">
                             <div className=".cards-about-contenedor justify-content-center align-items-center">
                                 <div className="card-about justify-content-between align-items-center">
                                     <div className="card-about-body">
                                         <h3>Tu Perfil</h3>
                                         <p>Haz un seguimiento del uso de tu plan, de los precios para tu viaje y de las herramientas de alojamiento en cualquiera de nuestros hoteles. Realiza un seguimiento de los datos importantes de cada uno de tus paquetes de viaje, como los tiempos de de viaje, el alojamiento en el hotel o el transporte. Con la herramienta del perfil podras gestionar todo esto.</p>
                                     </div>
                                     <div className="card-about-head justify-content-end align-items-center"><img src={perfilUsuario} alt="Quienes Somos" /></div>
                                 </div>
                                 <div className="card-about justify-content-between align-items-center">
                                     <div className="card-about-body">
                                         <h3>Soporte</h3>
                                         <p>Obtendrás toda la ayuda y el soporte que necesites del mejor personal de soporte. Nuestro personal de soporte está formado por expertos en viajes que pueden ayudarte independientemente de tu paquete de viaje. La prueba está en nuestras reseñas y calificaciones. Nos encanta ayudar a nuestros clientes a tener éxito y saber que aprecian nuestro soporte. Ofrecemos soporte en inglés, español, francés, italiano y portugués.</p>
                                     </div>
                                     <div className="card-about-head justify-content-end align-items-center"><img src={soporte} alt="Nuestra Historia" /></div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    )
}
export default About