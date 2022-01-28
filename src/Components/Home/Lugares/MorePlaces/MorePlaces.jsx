import "./MorePlaces.css"
import { Link } from "react-router-dom";
function MorePlaces() {
    return(
        <div className="seleccion-paises">
        <div className="seleccion-paises-contenedor container-xxl">
            <ul className="nav justify-content-evenly align-items-center">
                <li className="nav-item"><Link className="nav-link" to="/">Europa</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">Oceania</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">Promociones</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">Asia</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/">America</Link></li>
            </ul>
        </div>
    </div>
    )
}
export default MorePlaces