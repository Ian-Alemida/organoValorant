import "./header.css"
import img from "./img.jpg"

function Header ({titulo}){
    return (
        <header>
            <h1>Blog Alquimico</h1>
            <img src={img} alt="" />
        </header>
    )
}

export default Header