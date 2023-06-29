import "./header.css"
import Banner from "./banner.jpg"

function Header (){
    return (
        <header>
            <h1>Hierós Blog</h1>
            <img src={Banner} alt="banner da pagina" />            
        </header>
    )
}

export default Header