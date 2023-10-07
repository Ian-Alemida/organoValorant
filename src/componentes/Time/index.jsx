import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({ classe, agentes, aoDeletar, mudarCor, aoFavoritar }) => {

    return (
        agentes.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(classe.cor, '0.5') }}>
            <input value={classe.cor} onChange={e => mudarCor(e.target.value, classe.id)} type='color' className='input-cor' />
            <h3 style={{ borderColor: classe.cor }}>{classe.nome}</h3>
            <div className='colaboradores'>
                {agentes.map((agente, indice) => {
                    return <Colaborador
                        aoFavoritar={aoFavoritar}
                        key={indice}
                        agente={agente}
                        corDeFundo={classe.cor}
                        aoDeletar={aoDeletar}
                    />
                })}
            </div>
        </section>

    )
}

export default Time