import { collection, addDoc } from "firebase/firestore"; 
import { db } from "./firebase.js";
// Importa AlertifyJS
import alertify from 'alertifyjs';

// Importa los estilos CSS (importante)
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css'; // Tema por defecto

export async function GuardarRegistro(){

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const edad = document.getElementById("edad").value.trim();

    if(!nombre || nombre.isEmpty){
        alertify.error("Coloque un nombre válido");
        return;
    }
    if(!apellido || apellido.isEmpty){
        alertify.error("Coloque un apellido válido");
        return;
    }
    if(!edad || edad.isEmpty){
        alertify.error("Coloque una edad válida");
        return;
    }

    try{
        const docRef = await addDoc(collection(db, "users"),{
            nombre,
            apellido,
            edad
        });
        alertify.success("Se agregó el registro. ID de referencia: " + docRef.id)
        document.getElementById("frmUsuarios").reset();
    } 
    catch(e){
        console.log("Error: " + e);
    }  
}

document.getElementById("frmUsuarios").addEventListener("submit", e => {
    e.preventDefault();
    GuardarRegistro();
    
});