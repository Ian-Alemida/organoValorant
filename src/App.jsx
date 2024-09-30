import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Classe from "./componentes/Classe";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [classes, setClasses] = useState([
    {
      id: uuidv4(),
      nome: 'Duelista',
      cor: '#E02929'
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
      cor: '#58177D'
    },
  ])

  const [agentes, setAgentes] = useState([
    {
      id: uuidv4(),
      favorito: false,
      nome: "JETT",
      funcao: "Duelista ágil e evasiva, sua principal função é entrar em combate direto e surpreender os inimigos de maneira rápida usando seu dash",
      imagem: 'https://i.ytimg.com/vi/WZBd4stcHKo/maxresdefault.jpg',
      classe: classes[0].nome
    },
    {
      id: uuidv4(),
      favorito: true,
      nome: "RAZE",
      funcao: "Duelista explosiva e destrutiva, sua principal função é causar dano e abrir espaço usando sua C4 com suas granadas e foguetes",
      imagem: 'https://i.ytimg.com/vi/LnP5peRI-x8/maxresdefault.jpg',
      classe: classes[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "PHOENIX",
      funcao: "Duelista ardente e confiante, sua principal função é liderar o ataque com suas bangs e molotov e se curar com suas habilidades de fogo",
      imagem: '	https://mobimg.b-cdn.net/v3/fetch/05/05a6ee40acbbd4770cbee17013bafb01.jpeg',
      classe: classes[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "REYNA",
      funcao: "Duelista vampira e implacável, sua principal função é abater os inimigos e se fortalecer com suas habilidades de roubo de vida e invencibilidade",
      imagem: 'https://foni.club/uploads/posts/2023-02/1677114113_foni-club-p-art-reina-valorant-7.png',
      classe: classes[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'YORU',
      funcao: 'Duelista ilusionista e enganador, sua principal é infiltrar-se confundindo os adversários com suas de fendas dimensionais',
      imagem: 'https://images.squarespace-cdn.com/content/v1/5bb12626c46f6d5eaedb2e5f/1611187872698-04HN2USARRO5QEVNZ863/Valorant_Retake02.png',
      classe: classes[0].nome
    },
    {
      id: uuidv4(),
      favorito: true,
      nome: 'NEON',
      funcao: 'Duelista elétrica e energética, sua principal função é correr e atirar raios de energia nos inimigos com suas habilidades de bioeletricidade',
      imagem: 'https://www.goodnewspilipinas.com/wp-content/uploads/2022/01/valorant.jpg',
      classe: classes[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "BREACH",
      funcao: 'Iniciador poderoso e versátil, sua principal função é desestabilizar e atordoar os inimigos com suas habilidades sísmicas',
      imagem: 'https://yt3.ggpht.com/8GUGwU8MpiA4uLfPWjWUo-R3uANzrEKE3Go_uhdkVektkNQcdaVC-6AzclmtJzoq9YD4HKnUsS8=s900-c-k-c0x00ffffff-no-rj',
      classe: classes[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "SOVA",
      funcao: "Iniciador caçador e rastreador, sua principal função é revelar e eliminar os inimigos com suas habilidades de arco e flecha e seu drone",
      imagem: 'https://i.ytimg.com/vi/KpWAEyAi7rY/maxresdefault.jpg',
      classe: classes[1].nome
    },
    {
      id: uuidv4(),
      favorito: true,
      "nome": 'SKYE',
      funcao: 'Iniciadora naturalista e curandeira, sua função é guiar o time e curar os aliados com suas habilidades de animais mágicos',
      imagem: '	http://assets1.ignimgs.com/thumbs/userUploaded/2020/10/8/blog-1602202666808.jpg',
      classe: classes[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'FADE',
      funcao: 'Iniciador assustador e misterioso, sua principal função é rastrear e prender os inimigos com suas habilidades de medo',
      imagem: 'https://i.ytimg.com/vi/CsSWTWBAj90/maxresdefault.jpg',
      classe: classes[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'KAY/O',
      funcao: 'Iniciador robótico e implacável, sua principal função é neutralizar as habilidades dos inimigos com seus dispositivos EMP',
      imagem: 'https://pic.rutubelist.ru/video/99/74/9974f775a1e02d98c96a9af11a67b09f.jpg',
      classe: classes[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GEKKO',
      funcao: 'Iniciador com criaturas caóticas, sua função é usar suas criaturas para causar dano, controlar o espaço e plantar ou desarmar a Spike',
      imagem: 'https://gamecuoi.com/wp-content/uploads/2023/04/valorant-gekko-cinematic.jpg',
      classe: classes[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Killjoy",
      funcao: "Sentinela e especialista em tecnologia, sua principal função é usar seus dispositivos para proteger áreas e neutralizar os inimigos",
      imagem: 'https://i.ytimg.com/vi/2lFhhs08FK0/maxresdefault.jpg',
      classe: classes[2].nome
    },
    {
      id: uuidv4(),
      favorito: true,
      nome: "Cypher",
      funcao: "Sentinela e especialista em vigilância, sua principal função é usar suas câmeras e armadilhas para obter informações dos inimigos",
      imagem: 'https://i.ytimg.com/vi/TZ3XR4UXnz0/maxresdefault.jpg?7857057827',
      classe: classes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Sage",
      funcao: "Sentinela e especialista em cura e defesa, sua função é usar sua magia para restaurar a vida de seus aliados e impedir o avanço dos inimigos",
      imagem: 'https://www.comboinfinito.com.br/principal/wp-content/uploads/2020/07/valorant-gamelanders-campeonato.jpg',
      classe: classes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Chamber',
      funcao: 'Sentinela e especialista em armas, sua função é usar suas armas e seus teletransportes para abater os inimigos e se reposicionar',
      imagem: 'https://thumbnails.odycdn.com/optimize/s:1280:720/quality:85/plain/https://thumbnails.lbry.com/ydeZaTKcFpg',
      classe: classes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Deadlock",
      funcao: "Sentinela e especialista em habilidades sônicas, sua função é usar seu Sensor Sônico e sua parede para detectar e desorientar os inimigos",
      imagem: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt25b46ddecf1f9045/6493b865cb6702643e159496/062423_Val_EP7_Deadlock_Gameplay_Banner.jpg?auto=webp&disable=upscale&height=549',
      classe: classes[2].nome
    },
    {
      id: uuidv4(),
      favorito: true,
      nome: 'OMEN',
      funcao: 'Controlador e especialista em smokes, sua principal função é controlar o espaço ganhado por seu time e se teleportar pelo mapa',
      imagem: 'https://images.hdqwalls.com/download/omen-valorant-4k-artwork-34-2880x1800.jpg',
      classe: classes[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Brimstone",
      funcao: "Controlador especialista em smokes, sua função é usar sua tecnologia orbital para apoiar seus aliados e bloquear a visão dos inimigos",
      imagem: 'https://leet.hu/wp-content/uploads/2021/08/4720547.jpg',
      classe: classes[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Astra",
      funcao: "Controladora e especialista no mundo astral, sua função é usar seu poder cósmico para criar barreiras, puxões e explosões estelares",
      imagem: 'https://conteudo.imguol.com.br/c/entretenimento/60/2021/03/10/astra-valorant-1615387421270_v2_450x600.jpg',
      classe: classes[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Viper",
      funcao: "Controladora e especialista em veneno, sua principal função é usar seu arsenal químico para criar zonas tóxicas que enfraquecem os inimigos",
      imagem: 'https://i.pinimg.com/originals/54/2f/5d/542f5dbfeeee8744ca899279cce9152e.jpg',
      classe: classes[3].nome
    },
    {
      id: uuidv4(),
      favorito: true,
      nome: "Harbor",
      funcao: "Controlador e especialista em água, sua função é usar sua Onda, Bolha de Ar e sua Maré Alta para empurrar, prender e afogar os inimigos",
      imagem: 'https://img.redbull.com/images/c_crop,w_1140,h_570,x_0,y_0,f_auto,q_auto/c_scale,w_1200/redbullcom/2023/1/24/ngljfqaupmiywuqas5tl/harbor-valorant',
      classe: classes[3].nome
    },
  ])

  function deletarAgente(id) {
    setAgentes(agentes.filter(agente => agente.id !== id));
  }

  function mudarCorClasse(cor, id) {
    setClasses(classes.map(classe => {
      if (classe.id === id) {
        classe.cor = cor;
      }
      return classe;
    }));
  }

  function criarNovaClasse(novaClasse) {
    setClasses([...classes, { ...novaClasse, id: uuidv4 }])
  }

  function changeFavorito(id) {
    setAgentes(agentes.map(agente => {
      if (agente.id === id) agente.favorito = !agente.favorito
      return agente
    }))
  }
  return (
    <div>
      <Banner />
      <Formulario
        novaClasse={criarNovaClasse}
        classes={classes}
        aoCadastrar={novoAgente => setAgentes([...agentes, novoAgente])}
      />
      <section className="times">
        <h1>Classes do Valorant</h1>
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
