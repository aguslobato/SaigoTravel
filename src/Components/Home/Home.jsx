import Contact from "../Contact/Contact";
import About from "../About/About";
import Lugares from "./Lugares/Lugares";

function Home () {
    return (
        <div className="Home">
             <div className="Home-contenedor container">
                 <div><Lugares/></div>
                 <div><About/></div>
             </div>
             <Contact/>
        </div>
    )
}
export default Home