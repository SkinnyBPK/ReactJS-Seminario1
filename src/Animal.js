import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Animal extends React.PureComponent {
    
    render() {
        //this.props.nombre
        //this.props.tipo
        //this.props.edad
        const { nombre, tipo, edad, imagen } = this.props;
        return (
            <article>
                <h3>{nombre}</h3>
                <p>Tipo: {tipo}</p>
                <p>Edad: {edad}</p>
                <img src={imagen} />
                <hr/>
            </article>
        )

    }

}

const tiposAnimales = [
    'orangutan', 'gato', 'perro', 'serpiente', 'caballo'
]

Animal.PropTypes = {
    nombre: PropTypes.string.isRequired,
    tipo: PropTypes.oneOf(tiposAnimales).isRequired,
    edad: PropTypes.number.isRequired,
}