import React from 'react';
import './colaborador.css'

const Colaborador = ({ nome, cargo, imagem, color }) => {
    return (
        <div className='colaborador'>
            <div className='cabecalho' style={ color }>
                <img src={imagem} alt="imagem do colaborador" />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
}

export default Colaborador;
