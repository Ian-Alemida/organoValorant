import "./header.css"
import Banner from "./banner.jpg"

export default function Header (){
    return (
        <header>
            <h1>Hierós Blog</h1>
            <img src={Banner} alt="banner da pagina" />            
        </header>
    )
}