import Contact from "../Contact/Contact";
import About from "../About/About";
import Hotel from "./Hotel/Hotel";

function Home () {
    return (
        <div className="container">
            <About/>
            <Contact/>
            <Hotel/>
        </div>
    )
}
export default Home