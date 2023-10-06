import './colaborador.css'
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar () {
        aoFavoritar(colaborador.id)
    }
    return (
    <div className="colaborador">
        <AiFillCloseCircle
            size={27}
            className="deletar"
            onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito 
                    ? <AiFillHeart size={27} onClick={favoritar}/> 
                    : <AiOutlineHeart size={27} onClick={favoritar}/>
                }
            </div>
        </div>
    </div>)
}

export default Colaborador