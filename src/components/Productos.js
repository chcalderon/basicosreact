import React, { Component } from 'react';
// import Header from './Header';
import Producto from './Producto';

class Productos extends Component {
    render() {
        return (
            <div>
                <h2>Listado de Productos</h2>
                {Object.keys(this.props.listProd).map(key => (
                    <Producto key={key} producto={this.props.listProd[key]}/>
                ))}
            </div>
        )
    }
}
/**{Object.keys(this.props.listProd).map(key => (
                    console.log(this.props.productos[key])
                ))} */

export default Productos;