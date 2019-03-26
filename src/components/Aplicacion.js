import React, { Component } from 'react';
import Header from './Header';
import Productos from './Productos';
import Footer from './Footer';

class Aplicacion extends Component {
    // constructor(props){
    //     super();
    //     this.state = {
    //         productos : [
    //             {nombre: 'Libro', precio: 200},
    //             {nombre: 'Disco de musica', precio: 100},
    //             {nombre: 'Instrumento musical', precio: 800},
    //             {nombre: 'Reproductor musical', precio: 1500},
    //             {nombre: 'Alum Ed. Special', precio: 500},
    //         ]
    //     };
    // }

    state = {
            productos : []
        };
    
    componentDidMount() {
        
        const productos = [
            {nombre: 'Libro', precio: 200},
            {nombre: 'Disco de musica', precio: 100},
            {nombre: 'Instrumento musical', precio: 800},
            {nombre: 'Reproductor musical', precio: 1500},
            {nombre: 'Alum Ed. Special', precio: 500},
        ]
        
        console.log('componentDidMount');
        setTimeout( () => {
            this.setState({
                productos: productos
            });
        },3000);
    }

    render() {

        return (
            <div>
                <Header titulo="Nuestra Tienda Virtual"/>
                <Productos listProd={this.state.productos}/>
                <Footer/>
            </div>
        )
    }
}

export default Aplicacion;