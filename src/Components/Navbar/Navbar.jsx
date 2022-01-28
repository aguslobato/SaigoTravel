import "../Navbar/Navbar.css";
import logo from "../../Images/logo.png"
import { Link } from "react-router-dom";
import Home from "../../Images/iconos/home.png"
import ContactoIcono from "../../Images/iconos/contacto.png"
import Lugares from "../../Images/iconos/lugares.png"
import Carrito from "../../Images/iconos/carrito-de-compras.png"
import Promociones from "../../Images/iconos/promociones.png"
import NosotrosIcono from "../../Images/iconos/nosotros.png"
import MenuNav from "../../Images/iconos/menu-nav.png"
import PerfilUsuario from "../../Images/personajes/imagen-perfil-usuario.jpg"

function NavBar () {
    return(
         <div className="Navbar">
             <header>
                 <nav class="navbar navbar-light bg-light fixed-top">
                     <div class="container-xxl">
                         <img className="logo" src={logo} alt=""/>
                         <Link class="navbar-brand" to="/">Saigo Travel</Link>
                         <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"><span class="menu-nav"><img src={MenuNav} alt="" /></span></button>
                         <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                             <div class="offcanvas-header">
                                 <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Saigo Travel</h5>
                                 <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                             </div>
                             <div class="offcanvas-body">
                                 <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                                     <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/"><img src={Home} alt="Home"/> Home</Link></li>
                                     <li className="nav-item"><Link className="nav-link" to="/contacto"><img src={ContactoIcono} alt="" /> Contacto</Link></li>
                                     <li className="nav-item"><Link className="nav-link" to="/nosotros"><img src={NosotrosIcono} alt="" /> Nosotros</Link></li>
                                     <li className="nav-item"><Link className="nav-link" to="/lugares"><img src={Lugares} alt="" /> Lugares</Link></li>
                                     <li className="nav-item"><Link className="nav-link" to="/lugares"><img src={Promociones} alt="" /> Promociones</Link></li>
                                     <li className="nav-item"><Link className="nav-link" to="/contacto"><img src={Carrito} alt="" /> Carrito</Link></li>
                                 </ul>
                                 <form class="d-flex">
                                     <input class="form-control me-2" type="search" placeholder="Buscar Lugar" aria-label="Search"/>
                                     <button class="btn btn-outline-light" type="submit">Buscar</button>
                                 </form>
                             </div>
                             <div className="offcanvas-footer">
                                 <img src={PerfilUsuario} alt="{nombre.perfil}"/>
                                 <h3>Agustin Lobato</h3>
                             </div>
                         </div>
                     </div>
                 </nav>
             </header>
         </div>
    )
}
 export default NavBar;     
 window.addEventListener("scroll", function(){//animacion navbar para que se posicione fixed con el scroll
     var header = document.querySelector("header");
     header.classList.toggle("abajo",window.scrollY>0);
  })          