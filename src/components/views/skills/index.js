import React from 'react';

import Corel from '../../../img/icons/coreldraw.png';
import Css from '../../../img/icons/css.png';
import Html from '../../../img/icons/html.png';
import Javascript from  '../../../img/icons/javascript.png';
import Node from '../../../img/icons/node.png';
import Photoshop from '../../../img/icons/photoshop.png';
import Php from '../../../img/icons/php.png';
import ReactJS from '../../../img/icons/react.png';
import Figma from '../../../img/icons/figma.png';
import Java from '../../../img/icons/java.png';
import Django from '../../../img/icons/django.png';

import '../../../animate.css'

import './style.css';

export default class index extends React.Component{
    render(){
        return(
            <div className="container-skills ">
                <div className="skills">
                    <h1 className="animated zoomIn">Habilidades</h1>
                    <ul className="skill-ul animated slideInLeft">
                        <li>
                            <img src={Html} />
                            <p>Html</p>
                        </li>
                        <li>
                            <img src={Css}/>
                            <p>Css</p>
                        </li>
                        <li>
                            <img src={Javascript} />
                            <p>Javascript</p>
                        </li>
                        <li>
                            <img src={ReactJS}/>
                            <p>ReactJS</p>
                        </li>
                    </ul>
                    <ul className="skill-ul animated slideInRight">
                        <li>
                            <img src={Photoshop} />
                            <p>Photoshop</p>
                        </li>
                        <li>
                            <img src={Corel}/>
                            <p>CorelDraw</p>
                        </li>
                        <li>
                            <img src={Figma} />
                            <p>Figma</p>
                        </li>
                        
                    </ul>
                </div>
                <div className="skills conhecimento">
                    <h1 className="animated zoomIn">Conhecimento</h1>
                    <ul className="skill-ul animated slideInLeft">
                        <li>
                            <img src={Php} />
                            <p>Php</p>
                        </li>
                        <li>
                            <img src={Node}/>
                            <p>NodeJS</p>
                        </li>
                        <li>
                            <img src={Java} />
                            <p>Java</p>
                        </li>
                        <li>
                            <img src={Django}/>
                            <p>Django</p>
                        </li>
                    </ul>

                </div>
            </div>
        );
    }
}