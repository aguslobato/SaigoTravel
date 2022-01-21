import "./Contact.css";

 function Contact () {
     return(
        
         <div className="Contact"> 
             <div className="formulario-contacto justify-content-center align-items-center">
                 <div className="formulario-contacto-contenedor justify-content-center align-items-center container-xxl">
                     <div className="formulario-contacto-introduccion justify-content-center align-items-center text-center">
                         <h2>Contacto</h2>
                         <p>¡Comunicate con nosotros para poder encontrar el mejor plan de acuerdo a vos!</p>
                     </div>
                     <div className="formulario-contacto-contenido container-xxl justify-content-center align-items-center">
                         <div className="formulario-contacto-head justify-content-center align-items-center"></div>
                         <div className="formulario-contacto-body justify-content-center align-items-center">
                             <div className="mb-3">
                                 <label for="exampleFormControlInput1" className="form-label">Correo Electronico</label>
                                 <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                             </div>
                             <div className="mb-3">
                                 <label for="exampleFormControlTextarea1" className="form-label">Mensaje</label>
                                 <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                             </div>
                         </div>
                         <input type="radio" class="btn-check" name="options-outlined" id="success-outlined" autocomplete="off" checked/>
                         <label class="btn btn-outline-success" for="success-outlined">Enviar</label>
                     </div>
                     <div className="medios-contacto justify-content-center align-items-center text-center">
                         <div className="medios-contacto-contenedor justify-content-around align-items-center text-center">
                             <a href=""><i className="fab fa-whatsapp"></i></a>
                             <a href=""><i className="fab fa-facebook"></i></a>
                             <a href=""><i className="fab fa-instagram"></i></a>
                             <a href=""><i className="fas fa-envelope-open-text"></i></a>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
    )
}
export default Contact