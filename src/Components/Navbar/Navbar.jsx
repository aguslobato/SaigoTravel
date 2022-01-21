import "../Navbar/Navbar.css";
import logo from "../../Images/logo.png"
import { Link } from "react-router-dom";

function NavBar () {
    return(
         <div className="Navbar">
             <header>
                 <nav className="navbar navbar-expand-lg navbar-light">
                     <div className="container-xxl">  
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                         <div className="collapse navbar-collapse" id="navbarText"><img className="logo" src={logo} alt=""/>
                             <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                                 <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                                 <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
                                 <li className="nav-item"><Link className="nav-link" to="/nosotros">Nosotros</Link></li>
                                 <li className="nav-item"><Link className="nav-link" to="/lugares">Lugares</Link></li>
                             </ul>
                         </div>
                         <Link className="navbar-brand" to="/">Saigo Travel</Link>
                     </div>
                 </nav>
             </header>
         </div>
    )
}
export default NavBar;