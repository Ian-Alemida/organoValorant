import "./app.css";

function App() {
  const name = "Ian Almeida";
  return (
    <div>
      <h1 id="tit">Ola {name}</h1>
      <button onClick={console.log("apertou")}>My button</button>.
    </div>
  );
}

export default App;
