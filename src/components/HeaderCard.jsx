import fotoPerfil from '../assets/foto_perfil.jpg'

export default function HeaderCard() {
    return (
        <section className='tarjeta' id='tarjetaInicial'>
            <img className='fotoPerfil' src={fotoPerfil} alt="Foto de perfil" />
            <h1 className='textOnCard'>Fernando Talavera Mostazo</h1>
        </section>
    )
}
