import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import Aplicacion from './components/Aplicacion';
//React sin JSX

// const titulo = React.createElement(
//     'h1', {id:'titulo', className: 'encabezado'},
//     'Hola Mundo'
// )






//ReactDOM.render(titulo, document.getElementById('root'));

ReactDOM.render(
    <div>
        <Aplicacion></Aplicacion>
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
