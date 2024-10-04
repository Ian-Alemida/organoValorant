import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'
import IAgente from '../../interfaces/IAgente'
import IClasse from '../../interfaces/IClasse'
import { v4 as uuidv4 } from 'uuid';

interface FormularioProps{
    aoCadastrar: (agente: IAgente) => void,
    classes: IAgente[],
    novaClasse: (newClass: IClasse) => void
}
const Formulario = ({aoCadastrar, classes, novaClasse}: FormularioProps) => {

    const [nome, setNome] = useState<string>('')
    const [funcao, setFuncao] = useState<string>('')
    const [imagem, setImagem] = useState<string>('')
    const [classe, setClasse] = useState<string>('')
    const [nomeClasse, setNomeClasse] = useState<string>('')
    const [corClasse, setCorClasse] = useState<string>('')

    const aoSubmeter = (evento: React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        aoCadastrar({
            nome,
            funcao,
            imagem,
            classe,
            id: uuidv4()
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
                    type='text'
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/>
                <Campo
                    type='text'
                    obrigatorio
                    label='Função' 
                    placeholder='Digite sua função '
                    valor={funcao}
                    aoAlterado={valor => setFuncao(valor)}/>
                <Campo 
                    type='text'
                    label='Imagem' 
                    valor={imagem}
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa 
                    obrigatorio
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