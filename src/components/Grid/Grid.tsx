import React, { useEffect } from 'react';

import './Grid.scss';
import Tile from './Tile';


export default function Grid(props: {children?: React.ReactNode}) {
    
    useEffect(() => {
        document.getElementById("grid").scrollIntoView({
            behavior: 'smooth'
        });
    }, [])
    
    return <div id="grid" className={`columns is-multiline grid`}>
        {
            props.children
        }
        
    </div>
}
