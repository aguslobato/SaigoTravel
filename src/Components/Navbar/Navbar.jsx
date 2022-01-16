import "../Navbar/Navbar.css";
import logo from "../../Images/logo.png"

function NavBar () {
    return(
         <div className="Navbar">
             <header>
                 <nav className="navbar navbar-expand-lg navbar-light">
                     <div className="container-xxl">  
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                         <div className="collapse navbar-collapse" id="navbarText"><img className="logo" src={logo} alt=""/>
                             <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
                                 <li className="nav-item"><a className="nav-link active" aria-current="page" href="">Home</a></li>
                                 <li className="nav-item"><a className="nav-link" href="">Contacto</a></li>
                                 <li className="nav-item"><a className="nav-link" href="">Nosotros</a></li>
                                 <li className="nav-item"><a className="nav-link" href="">Lugares</a></li>
                             </ul>
                         </div>
                         <a className="navbar-brand" href="">Saigo Travel</a>
                     </div>
                 </nav>
             </header>
         </div>
    )
}
export default NavBar;