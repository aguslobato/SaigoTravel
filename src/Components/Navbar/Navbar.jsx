import "../Navbar/Navbar.css";
import logo from "../../Images/logo.png"
import { Link } from "react-router-dom";

function NavBar () {
    return(
         <div className="Navbar">
             <nav class="navbar navbar-light bg-light fixed-top">
                 <div class="container-xxl">
                     <img className="logo" src={logo} alt=""/>
                     <Link class="navbar-brand" to="/">Saigo Travel</Link>
                     <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar"><span class="navbar-toggler-icon"></span></button>
                     <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                         <div class="offcanvas-header">
                             <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Saigo Travel</h5>
                             <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                         </div>
                         <div class="offcanvas-body">
                             <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                                 <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                                 <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
                                 <li className="nav-item"><Link className="nav-link" to="/nosotros">Nosotros</Link></li>
                                 <li className="nav-item"><Link className="nav-link" to="/lugares">Lugares</Link></li>
                             </ul>
                             <form class="d-flex">
                                 <input class="form-control me-2" type="search" placeholder="Buscar Lugar" aria-label="Search"/>
                                 <button class="btn btn-outline-light" type="submit">Buscar</button>
                             </form>
                         </div>
                     </div>
                 </div>
             </nav>
         </div>
    )
}
export default NavBar;                 