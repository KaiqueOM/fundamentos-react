import React from "react";

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from "./components/basicos/Aleatorio";

export default () => (
    <div id='app'>
        <h1>Fundamentos React</h1>
        <Fragmento />
        <Aleatorio min={1} max={60} />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={9.3}
        />
        <Primeiro></Primeiro>
    </div>
);
