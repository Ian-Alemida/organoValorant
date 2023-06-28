const Main = ({nome, conteudo, cor}) => {
    return (
        <main>
            <h1 style={{color: cor}}>Conteudo do blog {nome ? nome : "teste"}</h1>
            <p>{conteudo ? conteudo : "nenhum conteudo disponivel"}</p>
            <span>props nada mais é que propriedades que podem ser pre selecionadas em um cointainer. Basta declara-la na sua criação</span>
        </main>
    );
}

export default Main;
