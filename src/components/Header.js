//import React, {Component} from 'react';
import React from 'react';

// class Header extends Component {
//     render(){
//         return(
//             <h1>Nombre del sitio</h1>
//         )
//     }
// }

// const Header = () => (<h1>Nombre del sitio</h1>)

// const Header = () => {
//     const titulo = 'Nuestra Tienda Virtual';
//     return (<header>
//         <h1>${titulo}</h1>
//     </header>);
// }


const Header = (props) => {
    return (<header>
        <h1>{props.titulo}</h1>
    </header>);
}

export default Header;