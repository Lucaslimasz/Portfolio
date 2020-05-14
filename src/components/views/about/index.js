import React from 'react';

import Git from '../../../img/icons/github.png';
import Insta from '../../../img/icons/instagram.png';
import Linkedin from '../../../img/icons/linkedin.png';

import './style.css';

export default class index extends React.Component{
    render(){
        return(
            <>
                <div className="container-about">
                    <div className="container-information">
                        <div className="name-information">
                            <h1>Lucas <a>Lima</a></h1>
                            <p>João Pessoa - PARAÍBA, BRASIL • (83) 98905.0001 • <a>id.lucas@outlook.com.br</a></p>
                        </div>

                        <div className="general-information">
                            <p>
                                Apaixonado pela tecnologia, busco conhecimento e experiência no mundo do desenvolvimento
                                web e mobile, migrande de designer gráfico levo uma grande bagagem para o UX/UI.
                                <br/><a>Totalmente interessado em procurar soluções e resolver problemas.</a>
                            </p>
                        </div>

                        <div className="contact">
                            <a href="https://www.linkedin.com/in/lucas-lima-85302016a/" target="_blank"><img src={Linkedin} /></a>
                            <a href="https://github.com/lucaslimasz" target="_blank"><img src={Git} /></a>
                            <a href="https://www.instagram.com/lukinhaslima.sz/" target="_blank"><img src={Insta} /></a>
                        </div>
                    </div>
            
                </div>
            </>
        );
    }
}