import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = ({aoCadastrar, classes, novaClasse}) => {

    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [imagem, setImagem] = useState('')
    const [classe, setClasse] = useState('')
    const [nomeClasse, setNomeClasse] = useState('')
    const [corClasse, setCorClasse] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            nome,
            funcao,
            imagem,
            classe
        })
        setNome('')
        setFuncao('')
        setImagem('')
        setClasse('')
    }

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do agente.</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <Campo
                    obrigatorio={true}
                    label='Função' 
                    placeholder='Digite sua função '
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}/>
                <Campo 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Classes'
                    items={classes} 
                    valor={classe}
                    aoAlterado={valor => setClasse(valor)}/>
                <Botao texto='Criar agente' />
            </form>
            <form className="formulario" onSubmit={(e) => {
                e.preventDefault()
                novaClasse({ nome: nomeClasse, cor: corClasse})
                setNomeClasse('')
            }}>
                <h2>Preencha os dados para criar uma nova classe</h2>
                <Campo
                    obrigatorio
                    label='Nome Da Classe'
                    placeholder='Digite o nome da classe '
                    valor={nomeClasse}
                    aoAlterado={valor => setNomeClasse(valor)}
                />
                <Campo
                    type={'color'}
                    obrigatorio
                    label='Cor Da Classe' 
                    placeholder='Digite a cor da classe '
                    valor={corClasse}
                    aoAlterado={valor => setCorClasse(valor)}
                />
                <Botao texto='Criar Nova classe' />
            </form>
        </section>
    )
}

export default Formulario