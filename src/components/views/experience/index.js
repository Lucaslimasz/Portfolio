import React from 'react';

import './style.css';
import '../../../animate.css'

export default class index extends React.Component {
    render() {
        return (
            <div className="container-experience">
            

                    <div className="experience animated slideInLeft">
                        <h2>JUNHO<a>/</a>2017 ATÉ DEZEMBRO<a>/</a>2017</h2>
                        <p>
                            <a>Karla & Lucrecrio Personalizados:</a> Empenhando como Designer Gráfico
                            desenvolvendo camisas para sublimação, camisas para serigrafia, canecas,
                            copos, entre outros itens personalizados.
                            Utilizando os programas Photoshop e CorelDraw.
                        </p>  
                    </div>

                    <div className="experience animated slideInRight">
                        <h2>AGOSTO<a>/</a>2018 ATÉ DEZEMBRO<a>/</a>2018</h2>
                        <p>
                            <a>Fábrica de Software UNIPÊ:</a> Atuando como desenvolvedor
                            beck-end, utilizando Django (Framework de Python).
                        </p>
                    </div>

                    <div className="experience animated slideInLeft">
                        <h2>JANEIRO<a>/</a>2019 ATÉ MARÇO<a>/</a>2020</h2>
                        <p>
                            <a>Express Comunicação Visual:</a> Atuando como Designer Gráfico na
                            área de desenvolvimento de banners, lonas, artes para divulgações, letras 3D etc.
                            Utiliznado os programas Photoshop, CorelDraw e Illustrator.
                        </p>
                    </div>
                    
                    
                    <div className="experience animated slideInRight">
                        <h2>MARÇO<a>/</a>2020 ATÉ <a>O MOMENTO</a></h2>
                        <p>
                            <a>9ideia:</a> empenhando a função de desenvolvedor Web, utilizando
                            as tecnologias: Html, Css e Javascript, e para projetos
                            futuros ReactJs, NodeJs e React Native.
                        </p>
                    </div>
            </div>

        )
    }
}