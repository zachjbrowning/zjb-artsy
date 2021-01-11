import React from 'react';
import styles from './Wireframe.module.scss';
import { Switch, Route } from 'react-router-dom';

import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import Grid from '../Grid/Grid';
import Modal from '../Modal/Modal';
import Home from '../Home/Home';

export default function Wireframe() {
    return <>
        <Landing />
        <Nav />
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/projects"><Grid list={'projects'} /></Route>
            <Route exact path="/recipes"><Grid list={'recipes'} /></Route>
            <Route exact path="/contact"><Grid list={'contact'} /></Route>
        </Switch>
        <Modal />
    </>
}
