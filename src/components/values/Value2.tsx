import "../../assets/styles/Values.css"

const Value2 = () => {
    return (
        <section className="valores valores2">
            <div className="valores-grid">
                <article className="valor-card">
                    <div className="icono-circle">🔥</div>
                    <h3>Rapidez</h3>
                    <p>Entregamos soluciones rápido.</p>
                </article>
                <article className="valor-card">
                    <div className="icono-circle">💡</div>
                    <h3>Innovación</h3>
                    <p>Ideas creativas y frescas.</p>
                </article>
                <article className="valor-card">
                    <div className="icono-circle">🤝</div>
                    <h3>Confianza</h3>
                    <p>Relaciones duraderas con clientes.</p>
                </article>
                <article className="valor-card">
                    <div className="icono-circle">🌱</div>
                    <h3>Sostenibilidad</h3>
                    <p>Pensamos en el futuro.</p>
                </article>
            </div>
        </section>
    ) 
}

export default Value2