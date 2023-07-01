import "./post.css";

export default function Post(props){
    return(
        <div  className="post">
            <div className="containerImg">
                <img className="imgPost" src={props.img} alt="" />
            </div>
            <div>
                <h2  className="titulo">{props.titulo}</h2>
                <hr className="barra"/>
                <p className="texto">{props.texto}</p>
            </div>
        </div>
    )
}