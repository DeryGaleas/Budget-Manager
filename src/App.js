import React, {useState, useEffect} from "react";
import Pregunta from "./components/pregunta"
import Formulario from "./components/formulario";
import Listado from "./components/listado"
import ControlPresupuesto from "./components/controlPresupuesto";

function App() {


  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  useEffect(() =>{
    if(creargasto){
      guardarGastos([
        ...gastos, gasto

      ])
      
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);



      guardarCrearGasto(false); 
    }
    
  }, [gasto, creargasto, gastos, restante]);

 
  
  return (
    <div className="container">
      <header>
        <h1>Presupuesto</h1>

      </header>
      <div className="contenido-principal contenido">
        {mostrarpregunta ?(
          <Pregunta guardarPresupuesto = {guardarPresupuesto} guardarRestante={guardarRestante} actualizarPregunta={actualizarPregunta}/>
        ):(

          <div className="row">
            <div className="one-half column">
              <Formulario guardarGasto={guardarGasto} guardarCrearGasto={guardarCrearGasto}/>
            </div>
            <div className="one-half column">
              <Listado gastos = {gastos}/>
              <ControlPresupuesto presupuesto={presupuesto} restante={restante}/>

            </div>
          </div>

        )

      
      }
        
       


      </div>     
    </div>
  );
}

export default App;
