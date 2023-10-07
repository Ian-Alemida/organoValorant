import Colaborador from '../Colaborador'
import './time.css'
import hexToRgba from 'hex-to-rgba';

const Time = ({ classe, colaboradores, aoDeletar, mudarCor, aoFavoritar }) => {

    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(classe.cor, '0.5') }}>
            <input value={classe.cor} onChange={e => mudarCor(e.target.value, classe.id)} type='color' className='input-cor' />
            <h3 style={{ borderColor: classe.cor }}>{classe.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => {
                    return <Colaborador
                        aoFavoritar={aoFavoritar}
                        key={indice}
                        colaborador={colaborador}
                        corDeFundo={classe.cor}
                        aoDeletar={aoDeletar}
                    />
                })}
            </div>
        </section>

    )
}

export default Time