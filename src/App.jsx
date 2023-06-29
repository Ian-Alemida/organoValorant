import Footer from "./Componentes/Footer/footer";
import Header from "./Componentes/Header/header";
import Main from "./Componentes/Main/main";
import "./app.css";

export default function App() {
  return (
      <>
      <Header/>
      <Main cor={"red"} nome="blog de ian 3" conteudo={"Conteudo de teste para ver como as props se comportam"}/>
      <Main cor={"#44ff88"} nome={"ihuul"} conteudo={"Elas se comportam igual no flutter, la tbm tem uma função onde é possivel definir propriedades para widgets que serão criados. a propriedade é usada em lugares que serão modificados, sendo assim possuem um valor variavel. Para usar basta declarar o nome da variavel na abertura da função que criará o container, e posiciona-la em  seu devido lugar dentro do codigo, depois elas podem serr chamadas e atribuidas o valor que desejar na chamada do conntainer."}></Main>
      <Footer/>
      </>
  );
}


