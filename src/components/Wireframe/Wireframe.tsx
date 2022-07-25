import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Experience } from '../Experience/Experience';
const Landing = lazy(() => import('../Landing/Landing'));
const Nav = lazy(() => import('../Nav/Nav'));
const Contact = lazy(() => import('../Grid/Contact'));
const Recipes = lazy(() => import('../Grid/Recipes'));
const Projects = lazy(() => import('../Grid/Projects'));
const Sustainabality = lazy(() => import('../Grid/Sustainability'));
const Modal = lazy(() => import('../Modal/Modal'));
const SustainExplain = lazy(() => import('../Blurbs/SustainExplain'));
const Home = lazy(() => import('../Blurbs/Home'));
import LoadingDots from '../Utils/LoadingDots';

export default function Wireframe() {
    return <Suspense fallback={<LoadingDots />}>
        <Landing />
        <Nav />
        <RouteSwitch />
    </Suspense>
}

const RouteSwitch = () => <Suspense fallback={<LoadingDots />}>
    <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/projects"><Projects /></Route>
        <Route exact path="/recipes"><Recipes /></Route>
        <Route exact path="/experience"><Experience /></Route>
        <Route exact path="/sustainability"><SustainExplain /> <Sustainabality /></Route>
    </Switch>
    <Modal />
</Suspense>