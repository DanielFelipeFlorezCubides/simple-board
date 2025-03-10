import {validation} from "./credenciales.js";
import {dialogMessage} from "./dialogSignIn.js";

export const findDataByForm = (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target)); // Obtener los datos del formularion en formato objeto
    console.log("Datos del formulario:", data);
    const response = validation(data); // validar los datos del formulario en el archivo json de los usuarios permitidos
    console.log("Respuesta de validacion:", response);
    dialogMessage(response);// Segun la validacion de los datos se envia la respuesta para verificar en un mensaje
    form__login.reset(); // Limpia el formulario
}