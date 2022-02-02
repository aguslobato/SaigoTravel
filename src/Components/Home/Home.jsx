import Contact from "../Contact/Contact";
import About from "../About/About";
import Lugares from "./Lugares/Lugares";
import Hotel from "../Home/Hotel/Hotel"

function Home () {
    return (
        <div className="Home">
             <div className="Home-contenedor container">
                 <div><Lugares/></div>
                 <Hotel/>
                 <div><About/></div>
             </div>
             <Contact/>
        </div>
    )
}
export default Home