import Footer from "./Componentes/Footer/footer";
import Header from "./Componentes/Header/header";
import Main from "./Componentes/Main/main";
import Container from "./Componentes/container/Container";
import Contador from "./Componentes/container/contador";
import Post from "./Componentes/post/Post";
import "./app.css";


export default function App() {

  return (
      <>
      <Header/>
      <Container>
        <Post titulo="Os 4 elementos" img="./postImages/post1.JPG" texto="Todos os seres huumanos tem os 4 elementos dentro deles pois tudo que existe la fora tambem existe aqui dentro. O fog é  o responsavel pela vontade, a terra é a responsavel pelo foco e pelas conquistas materiais, a agua é responsavel pela adaptabilidade e fé/resiliencia, o Ar é quem nos traz nosso pennsamentos"/>
      </Container>
      <Container>
      <Post titulo="As bruxas" img="./postImages/post2.png" texto="As bruxas são mulheres que foram injustiçadas e queimadas na fogueira a algum tempo atras, na epoca da inqquisição. isso ers feito pois acreditava-se que elasa eram 'amantes do demonio', mas na verdade elas só não queriam seguir a doutrina imposta pela instituuição religiosa da epoca pois usavam de um conhecimento mistico, com ervas, p
        pedras e torot"/>
      </Container>
      <Footer/>
      </>
  );
}


