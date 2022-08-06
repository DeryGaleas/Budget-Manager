 import React, { useState } from "react";
 import Error from "./error";
 import shortid from "shortid";


 const Formulario = ({guardarGasto, guardarCrearGasto}) =>{

    const [nombre, guardarNombre] = useState("");
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);
    

    const agregarGasto = (e) => {
        e.preventDefault();

        if (cantidad <1 || isNaN(cantidad) || nombre.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        const gasto = {
            nombre,
            cantidad,
            id:shortid.generate()
        }

        guardarGasto(gasto);
        guardarCrearGasto(true);
        guardarNombre("");
        guardarCantidad(0);

        



    }


    return(
        <form onSubmit={agregarGasto}>
            <h2>Agrega aqui tus gastos</h2>
            {error ? <Error mensaje="Ambos campos requeridos o presupuesto incorrecto" /> : null}


            <div className="campo">
                <label>Nombre del Gasto</label>
                <input type="text" className="u-full-width" placeholder="Ej. comida" value={nombre} onChange={e => guardarNombre(e.target.value)}/>
            </div>

            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input type="number" className="u-full-width" placeholder="Ej. 500" value={cantidad} onChange={e => guardarCantidad(parseInt(e.target.value))}/>
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar gasto"/>

        </form>
    )
 }


 export default Formulario;