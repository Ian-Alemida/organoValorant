import Agente from '../Agente'
import './classe.css'
import hexToRgba from 'hex-to-rgba';

function Classe({ classe, agentes, aoDeletar, mudarCor, aoFavoritar }) {

    return (
        agentes.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(classe.cor, '0.75') }}>
            <input value={classe.cor} onChange={e => mudarCor(e.target.value, classe.id)} type='color' className='input-cor' />
            <h3 style={{ borderColor: classe.cor }}>{classe.nome}</h3>
            <div className='colaboradores'>
                {agentes.map((agente, indice) => {
                    return <Agente
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