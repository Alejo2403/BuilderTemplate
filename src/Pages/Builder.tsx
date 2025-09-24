import { useState } from 'react';

import "../assets/styles/Builder.css"

/* COMPONENTS */
import NavBar1 from '../components/navbars/NavBar1';
import NavBar2 from '../components/navbars/NavBar2';
import NavBar3 from '../components/navbars/NavBar3';
import Heros1 from '../components/heroes/Heros1';
import Heros2 from '../components/heroes/Heros2';
import Heros3 from '../components/heroes/Heros3';
import Value1 from '../components/values/Value1';
import Value2 from '../components/values/Value2';
import Value3 from '../components/values/Value3';

const Builder = () => {
    const [navbar, setNavbar] = useState<string>("");
    const [hero, setHero] = useState<string>("");
    const [value, setValue] = useState<string>("");

    return (
        <div className="builder-container">
            {/* Sidebar izquierdo */}
            <div className="panel-izquierdo">
                <h2>Constructor</h2>
                <div className="opciones">
                    <h3>Paso 1: Navegacion</h3>
                    <select
                        value={navbar}
                        onChange={(e) => setNavbar(e.target.value)}
                        className="dropdown"
                    >
                        <option value="">-- Selecciona Navbar --</option>
                        <option value="navbar1">Variante 1</option>
                        <option value="navbar2">Variante 2</option>
                        <option value="navbar3">Variante 3</option>
                    </select>
                    <h3>Paso 2: Presentacion</h3>
                    <select
                        value={hero}
                        onChange={(e) => setHero(e.target.value)}
                        className="dropdown"
                    >
                        <option value="">-- Selecciona Presentacion --</option>
                        <option value="hero1">Variante 1</option>
                        <option value="hero2">Variante 2</option>
                        <option value="hero3">Variante 3</option>
                    </select>
                    <h3>Paso 3: Propuesta de valor</h3>
                    <select
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        className="dropdown"
                    >
                        <option value="">-- Selecciona Presentacion --</option>
                        <option value="value1">Variante 1</option>
                        <option value="value2">Variante 2</option>
                        <option value="value3">Variante 3</option>
                    </select>
                </div>
            </div>

            {/* Panel derecho */}
            <div className="panel-derecho">
                <h2>Previsualización</h2>
                {navbar === "navbar1" && <NavBar1 />}
                {navbar === "navbar2" && <NavBar2 />}
                {navbar === "navbar3" && <NavBar3 />}
                {!navbar && <p>Selecciona una variante de navegacion para ver el preview</p>}
                {hero === "hero1" && <Heros1 />}
                {hero === "hero2" && <Heros2 />}
                {hero === "hero3" && <Heros3 />}
                {!value && <p>Selecciona una variante de presentacion para ver el preview</p>}
                {value === "value1" && <Value1 />}
                {value === "value2" && <Value2 />}
                {value === "value3" && <Value3 />}
                {!value && <p>Selecciona una variante de presentacion para ver el preview</p>}
            </div>
        </div>
    )
}

export default Builder