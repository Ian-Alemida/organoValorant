import IAgente from '../../interfaces/IAgente';
import IClasse from '../../interfaces/IClasse';
import AgenteUI from '../Agente';
import './classe.css'
import hexToRgba from 'hex-to-rgba';

interface Classeprops {
    classe: IClasse;
    agentes: IAgente[];
    aoDeletar: (id: string) => void;
    mudarCor: (value: string, id: string) => void;
    aoFavoritar:(id: string) => void
}
function Classe({ classe, agentes, aoDeletar, mudarCor, aoFavoritar }: Classeprops) {

    return (
        agentes.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(classe.cor, '0.5') }}>
            <input value={classe.cor} onChange={e => mudarCor(e.target.value, classe.id)} type='color' className='input-cor' />
            <h3 style={{ borderColor: classe.cor }}>{classe.nome}</h3>
            <div className='colaboradores'>
                {agentes.map((agente, indice) => {
                    return <AgenteUI
                        aoFavoritar={aoFavoritar}
                        key={indice}
                        agente={agente}
                        corDeFundo={classe.cor}
                        aoDeletar={aoDeletar}
                    />;
                })}
            </div>
        </section>

    );
}

export default Classe