import React from 'react';
import styles from './Wireframe.module.scss';
import { Switch, Route } from 'react-router-dom';

import Landing from '../Landing/Landing.tsx';
import Nav from '../Nav/Nav';
import Grid from '../Grid/Grid';
import Modal from '../Modal/Modal';
import Home from '../Blurbs/Home';
import SustainExplain from '../Blurbs/SustainExplain';

export default function Wireframe() {
    return <>
        <Landing />
        <Nav />
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/projects"><Grid list={'projects'} /></Route>
            <Route exact path="/recipes"><Grid list={'recipes'} /></Route>
            <Route exact path="/contact"><Grid list={'contact'} /></Route>
            <Route exact path="/sustainability"><SustainExplain /> <Grid list={'sustainability'} /></Route>
        </Switch>
        <Modal />
    </>
}
