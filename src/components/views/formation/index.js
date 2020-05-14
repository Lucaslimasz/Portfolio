import React from 'react';

import Faculdade from '../../../img/icons/faculdade.png';
import Escola from '../../../img/icons/escola.png';
import Curso from '../../../img/icons/curso.png';

import './style.css';

export default class index extends React.Component {
    render() {
        return (

            <div className="container-formation">
                <div className="container">
                    <div className="information">
                        <img src={Escola} alt="Faculdade" />
                        <div className="text">
                            <h1><a>Ensino médio -</a> completo</h1>
                            <h2>Formação - 2016</h2>
                        </div>
                    </div>

                    <div className="information">
                        <img src={Curso} alt="Faculdade" className="reverse" />
                        <div className="text">
                            <h1><a>TÉC. em informática -</a> completo</h1>
                            <h2 className="text-curso">Formação - 2014 ~ 2016</h2>
                        </div>
                    </div>
                    

                    <div className="information">
                        <img src={Faculdade} alt="Faculdade" />
                        <div className="text">
                            <h1><a>Sistemas p/ Internet -</a> cursando</h1>
                            <h2>Pervisão para término - 2020</h2>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}