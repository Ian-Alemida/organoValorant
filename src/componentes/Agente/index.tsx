import IAgente from '../../interfaces/IAgente';
import './agente.css'
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

interface AgenteProps{
    agente: IAgente;
    corDeFundo: string;
    aoDeletar: (value: string) => void;
    aoFavoritar: (value: string) => void;
}
export default function AgenteUI({ agente, corDeFundo, aoDeletar, aoFavoritar }: AgenteProps) {
    function favoritar() {
        aoFavoritar(agente.id)
    }
    return (
        <div className="card" style={{ backgroundColor: corDeFundo }}>
            <AiFillCloseCircle
                size={27}
                className="deletar"
                onClick={() => aoDeletar(agente.id)}
            />
            <div className="card-border-top">
            </div>
            <div className="img" style={{ backgroundImage: `url(${agente.imagem})`, backgroundSize: '130% 100%' }}>
            </div>
            <span> {agente.nome}</span>
            <p className="job"> {agente.funcao}</p>
            <button onClick={favoritar}> {agente.favorito
                ? <AiFillHeart size={33} color='#FD4556' />
                : <AiOutlineHeart size={33} />}
            </button>
        </div>
    )
}