import React from 'react';

import { Switch, Route } from 'react-router-dom';

import About from './components/views/about/index';
import Experience from './components/views/experience/index';
import Formation from './components/views/formation/index';
import Skills from './components/views/skills/index';


export default () => {
    return (
        <Switch>
            <Route exact path="/" component={ About } />
            <Route exact path="/experience" component={ Experience }  />
            <Route exact path="/formation" component={ Formation } />
            <Route exact path="/skills" component={ Skills } />
        </Switch>
    )
}