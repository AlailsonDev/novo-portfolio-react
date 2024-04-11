import Foto from "../assets/foto.jpeg"
import '../components/main.css'

export default function Main() {
    return(
        <main className="main">
            <img className="main-photo" src={Foto} alt="Minha foto" />
            <h1 className="title">Alailson Barbosa</h1>
            <h3 className="subtitle">Web Developer</h3>
        </main>
    )
}