import "../../assets/styles/Values.css"

const Value1 = () => {
    return (
        <section className="valores valores1">
            <ul className="valores-lista horizontal">
                <li className="valor-card">
                    <span className="icono">🔥</span>
                    <h3>Rapidez</h3>
                    <p>Entregamos soluciones rápido.</p>
                </li>
                <li className="valor-card">
                    <span className="icono">💡</span>
                    <h3>Innovación</h3>
                    <p>Ideas creativas y frescas.</p>
                </li>
                <li className="valor-card">
                    <span className="icono">🤝</span>
                    <h3>Confianza</h3>
                    <p>Relaciones duraderas con clientes.</p>
                </li>
                <li className="valor-card">
                    <span className="icono">🌱</span>
                    <h3>Sostenibilidad</h3>
                    <p>Pensamos en el futuro.</p>
                </li>
            </ul>
        </section>
  )
}

export default Value1