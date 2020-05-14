import React from 'react';


import Menu from '../menu/index';
import Rotas from '../../router';

import { HashRouter } from 'react-router-dom';

import './style.css'

export default class App extends React.Component{
  render(){
    return(
      <HashRouter>
        <div className="container-geral">
          <Menu />
          <Rotas />
        </div>
      </HashRouter>
    );
  }

}
