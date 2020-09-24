import React from 'react';
import styles from './Wireframe.module.scss';
import { Switch, Route } from 'react-router-dom';

import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import Grid from '../Grid/Grid';

export default function Wireframe() {
    return <>
        <Landing />
        <Nav />
        <Switch>
            <Route exact path="/projects"><Grid list={'projects'} /></Route>
            <Route exact path="/recipes"><Grid list={'recipes'} /></Route>
        </Switch>
    </>
}
