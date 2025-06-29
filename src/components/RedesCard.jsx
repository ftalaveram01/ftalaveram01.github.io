import logoGitHub from '../assets/github-redondo.png'
import logoLinkedIn from '../assets/linkedin-redondo.png'

export default function RedesCard() {
    return (
        <section className='tarjeta'>
            <h2>Redes</h2>
            <div className='redes'>
                <a className='red' href="https://www.linkedin.com/in/fernando-talavera-mostazo-986297279/" target='_blank' rel="noopener noreferrer">
                    <img className='logo' src={logoLinkedIn} alt="Mi perfil de LinkedIn" />
                </a>
                <a className='red' href="https://github.com/ftalaveram01" target='_blank' rel="noopener noreferrer">
                    <img className='logo' src={logoGitHub} alt="Mi perfil de GitHub" />
                </a>
            </div>
        </section>
    )
}
