import { getTecnologias } from '../constantes/tecnologias'

export default function TecnologiasCard() {
    const tecnologias = getTecnologias();

    return (
        <section className='tarjeta'>
            <h2>Tecnologías</h2>
            <div className='tecnologias'>
                {tecnologias.map((tecnologia, index) => (
                    <div className='tecnologia' key={index}>
                        <img className='logoTecnologia' src={tecnologia.logo} alt={`Logo de ${tecnologia.nombre}`} />
                        <h4>{tecnologia.nombre}</h4>
                    </div>
                ))}
            </div>
        </section>
    )
}
