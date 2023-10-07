import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = ({aoCadastrar, classes, novaClasse}) => {

    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        console.log('form enviado', nome, funcao, imagem, time )
        aoCadastrar({
            nome,
            funcao,
            imagem,
            time
        })
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <Campo
                    obrigatorio={true}
                    label='Cargo' 
                    placeholder='Digite seu cargo '
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}/>
                <Campo 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Times'
                    items={classes} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>
                <Botao texto='Criar card' />
            </form>
            <form className="formulario" onSubmit={(e) => {
                e.preventDefault()
                novaClasse({ nome: nomeTime, cor: corTime})
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo
                    obrigatorio
                    label='Nome'
                    placeholder='Digite o nome do time '
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <Campo
                    type={'color'}
                    obrigatorio
                    label='cor' 
                    placeholder='Digite a cor do time '
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao texto='Criar Novo time' />
            </form>
        </section>
    )
}

export default Formulario