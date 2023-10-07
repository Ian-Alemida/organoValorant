import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Classe from "./componentes/Classe";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [classes, setclasses] = useState([
    {
      id: uuidv4(),
      nome: 'Duelista',
      cor: '#D72404'
    },
    {
      id: uuidv4(),
      nome: 'Iniciador',
      cor: '#1DA548'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Sentinela',
      cor: '#0A76DB'
    },
    {
      id: uuidv4(),
      nome: 'Controlador',
      cor: '#2E0C41'
    },
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      funcao: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      classe: classes[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      funcao: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      classe: classes[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      funcao: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      classe: classes[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      funcao: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      classe: classes[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      funcao: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      classe: classes[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      funcao: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      classe: classes[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      funcao: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      classe: classes[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      funcao: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      classe: classes[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      funcao: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      classe: classes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      funcao: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      classe: classes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      funcao: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      classe: classes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      funcao: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      classe: classes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      funcao: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      classe: classes[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      funcao: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      classe: classes[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      funcao: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '	https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      classe: classes[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      funcao: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      classe: classes[3].nome
    },
  ]

  const [agentes, setAgentes] = useState(inicial)

  function deletarAgente(id) {
    setAgentes(agentes.filter(agente => agente.id !== id));
  }

  function mudarCorClasse( cor, id) {
    setclasses(classes.map(classe => {
        if(classe.id === id) {
          classe.cor = cor;
        }
        return classe;
    }));
  }

  function criarNovaClasse (novaClasse) {
    setclasses([...classes, {...novaClasse, id:uuidv4}])
  }

  function changeFavorito (id){
    setAgentes(agentes.map(agente => {
      if(agente.id === id) agente.favorito = !agente.favorito
        return agente
    }))
  }
  return (
    <div>
      <Banner />
      <Formulario 
        novaClasse={criarNovaClasse}
        classes={classes.map(classe => classe.nome)}
        aoCadastrar={agente => setAgentes([...agentes, agente])} 
      />
      <section className="times">
        <h1>Minha organização</h1>
        {classes.map((classe, indice) =>
          <Classe 
            aoFavoritar={changeFavorito}
            mudarCor={mudarCorClasse}
            aoDeletar={deletarAgente}
            key={indice}
            classe={classe}
            agentes={agentes.filter(agente => agente.classe === classe.nome)} 
          />
        )}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
