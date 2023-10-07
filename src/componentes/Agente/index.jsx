import './agente.css'
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

function Agente({ agente, corDeFundo, aoDeletar, aoFavoritar }) {
    function favoritar() {
        aoFavoritar(agente.id)
    }
    return (
        <div className="agente">
            <AiFillCloseCircle
                size={27}
                className="deletar"
                onClick={() => aoDeletar(agente.id)} 
            />
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img src={agente.imagem} alt={agente.nome} />
            </div>
            <div className="rodape">
                <h4>{agente.nome}</h4>
                <h5>{agente.funcao}</h5>
                <div className='favoritar'>
                    {agente.favorito
                        ? <AiFillHeart size={33} onClick={favoritar} color='#ff0000' />
                        : <AiOutlineHeart size={33} onClick={favoritar} />}
                </div>
            </div>
        </div>)
}

export default Agente