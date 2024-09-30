import './lista-suspensa.css'
import IAgente from '../../interfaces/IAgente';

interface ListaSuspensaProps{
    label: string;
    items: IAgente[];
    valor: string;
    aoAlterado: (value: string) => void;
    obrigatorio?: boolean
}
const ListaSuspensa = ({label, items,  valor, aoAlterado, obrigatorio = false}: ListaSuspensaProps) => {
    return (<div className="lista-suspensa">
        <label>{label}</label>
        <select required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)}>
            <option />
            {items.map(item => <option key={item.id}>{item.nome}</option>)}
        </select>
    </div>)
}

export default ListaSuspensa