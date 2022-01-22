import Contact from "../Contact/Contact";
import About from "../About/About";
import Hotel from "./Hotel/Hotel";

function Home () {
    return (
        <div className="Home">
             <div className="container"><About/></div>
             <Contact/>
             <div className="container"><Hotel/></div>
        </div>
    )
}
export default Home