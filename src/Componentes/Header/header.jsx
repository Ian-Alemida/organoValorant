import "./header.css"
import  banner from "./Zenitsu.webp"

function Header ({titulo}){
    return (
        <header>
            <h1>Blog Alquimico</h1>
            <img src={banner} alt="banner da pagina"/>
        </header>
    )
}

export default Header