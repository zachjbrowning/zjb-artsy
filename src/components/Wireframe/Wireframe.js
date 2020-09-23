import React from 'react'
import styles from './Wireframe.module.scss';

import Landing from '../Landing/Landing';
import Nav from '../Nav/Nav';
import Grid from '../Grid/Grid';

export default function Wireframe() {
    return <>
        <Landing />
        <Nav />
        <Grid />
    </>
}
