import React, { Component } from 'react';
import './App.css';

class MiPrimerComponente extends Component {

  constructor(props){
    super(props);
    this.state = {
     nombreComponente: 'Componente del Diablo',
    };
  }

  render() {
    // const titulo = this.state.titulo;
    // cosnt subtitulo = this.state.subtitulo;

      const { titulo, subtitulo } = this.state;
    
    return (
      <section>
        <h2>{titulo}</h2>
        <p>{subtitulo}</p>
      </section>  
    );
  }
}

export default MiPrimerComponente;