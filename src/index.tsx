import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Wireframe from './components/Wireframe/Wireframe'
import "../styles/styles.scss"
import { Provider } from "react-redux";
import store from "../lib/redux/store";


ReactDom.render(<Provider store={store}>
        <BrowserRouter>
            <Wireframe/>
        </BrowserRouter>
    </Provider>, document.getElementById('root'))