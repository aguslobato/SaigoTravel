import { Link } from "react-router-dom"
import "./Footer.css"
function Footer () {
    return (
<footer className="Footer">
      <div class="main-content">
        <div class="left box">
          <h2>Nosotros</h2>
          <div class="content">
            <p>Somos unas empresa turística conformada por trabajadores Sudcalifornianos dedicados a compartir con nuestros clientes la experiencia de la vida acuática.</p>
            <div class="social">
              <a target="_blank" href="#"><span class="fab fa-facebook-f"></span></a>
              <a target="_blank" href="#"><span class="fab fa-twitter"></span></a>
              <a target="_blank" href="#"><span class="fab fa-instagram"></span></a>
              <a target="_blank" href=""><span class="fab fa-youtube"></span></a>
            </div>
          </div>
        </div>

        <div class="center box">
          <h2>Ubicación</h2>
          <div class="content">
            <div class="place">
              <span class="fas fa-map-marker-alt"></span>
              <span class="text">Cordoba, Argentina</span>
            </div>
            <div class="phone">
              <span class="fas fa-phone-alt"></span>
              <span class="text">+54 297-478-2511</span>
            </div>
            <div class="email">
              <span class="fas fa-envelope"></span>
              <span class="text">saigotravel@gmail.com</span>
            </div>
          </div>
        </div>

        <div class="right box">
          <h2>Contacto</h2>
          <div class="content">
            <form action="#">
              <div class="email">
                <div class="text">Email</div>
                <input type="email" required/>
              </div>
              <div class="msg">
                <div class="text">Mensaje</div>
                <textarea rows="2" cols="25" required></textarea>
              </div>
              <div class="btn">
                <button type="submit">Enviar Mensaje</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="bottom">
        <center>
          <span class="credit">Desarrollado por 
            <a target="_blank" href="https://www.instagram.com/agustin_developer/"> Agustin Lobato</a> | </span>
          <span class="far fa-copyright"></span><span> 2022. Todos los derechos reservados</span>
        </center>
      </div>
    </footer>
    )
}
export default Footer