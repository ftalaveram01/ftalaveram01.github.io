import './App.css'
import fotoPerfil from './assets/foto_perfil.jpg'
import logoGitHub from './assets/github-redondo.png'
import logoLinkedIn from './assets/linkedin-redondo.png'
import { getTecnologias } from './constantes/tecnologias'


function App() {

  const tecnologias = getTecnologias();

  return (
    <>
      <section className='tarjeta' id='tarjetaInicial'>
        <img className='fotoPerfil' src={fotoPerfil} alt="React logo" />
        <h1 className='textOnCard'>Fernando Talavera Mostazo</h1>
      </section>
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
      <section className='tarjeta'>
        <h2>Proyectos</h2>
        <p style={{ color: 'rgba(255, 0, 0, 0.9)' }}>Proximamente...</p>
      </section>
      <section className='tarjeta'>
        <h2>Sobre mí</h2>
        <h4>Programador Junior</h4>
        <p>Conocimiento en desarrollo sostenible, mantenible en el tiempo y trabajo en equipo</p>
      </section>
      <section className='tarjeta'>
        <h2>Redes</h2>
        <div className='redes'>
          <a href="https://www.linkedin.com/in/fernando-talavera-mostazo-986297279/" target='_blank'><img className='logo' src={logoLinkedIn} alt="Mi perfil de LinkedIn" /></a>
          <a href="https://github.com/ftalaveram01" target='_blank'><img className='logo' src={logoGitHub} alt="Mi perfil de GitHub" /></a>
        </div>
      </section>
    </>
  )
}

export default App
