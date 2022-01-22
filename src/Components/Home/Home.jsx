import Contact from "../Contact/Contact";
import About from "../About/About";
// import Hotel from "./Hotel/Hotel";
import Lugares from "./Lugares/Lugares";

function Home () {
    return (
        <div className="Home">
             <div className="container"><Lugares/></div>
             <div className="container"><About/></div>
             <Contact/>
             {/* <div className="container"><Hotel/></div> */}
        </div>
    )
}
export default Home