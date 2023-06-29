import Footer from "./Componentes/Footer/footer";
import Header from "./Componentes/Header/header";
import Main from "./Componentes/Main/main";
import Container from "./Componentes/container/Container";
import Contador from "./Componentes/container/contador";
import "./app.css";


export default function App() {

  return (
      <>
      <Header/>
      <Container>
        <p>aperte no botão abaixo:</p>
        <Contador/>
      </Container>
      <Footer/>
      </>
  );
}


