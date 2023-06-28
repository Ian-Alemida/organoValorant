import "./header.css"
import Banner from "./banner.png"

function Header (){
    return (
        <header>
            <h1>Blog Alquimico</h1>
            <img src={Banner} alt="banner da pagina" />            
        </header>
    )
}

export default Header