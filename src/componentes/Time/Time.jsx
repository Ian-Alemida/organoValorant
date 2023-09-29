import React from 'react';
import './time.css'
import Colaborador from '../Colaborador/Colaborador';

const Time = ({ corPrimaria, corSecundaria, nome, colaboradores }) => {
    const styles = [
        { backgroundColor: corPrimaria },
        { borderColor: corSecundaria}
    ]

    return (
        <div className='times' style={styles[0]}>
            <h3 style={styles[1]}>{nome}</h3>
            <div className="colaboradores">
                {colaboradores.map( colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </div>
    );
}

export default Time;
