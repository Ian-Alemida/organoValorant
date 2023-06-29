import "./contador.css";

export default function Contador () {
    let contador = 0

    function addContador(){
            alert(contador++)
    }
    return (
        <div>
            <button className='button' onClick={addContador}>click-me</button>
        </div>
    );
}