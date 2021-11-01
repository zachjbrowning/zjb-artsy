import React, { useEffect } from 'react';

import './Grid.scss';
import Tile from './Tile';


export default function Grid(props: {children?: React.ReactNode}) {
    return <div id="grid" className={`columns is-multiline grid`}>
        {
            props.children
            // list ? 
            // list.map((val, idx) => (
            //     <Tile key={idx} tile={val} role={props.list} />
            // ))
            // : ""
        }
        
    </div>
}
// import { load_projects } from '../../../lib/redux/actions/projectsAction';
// import { load_recipes } from '../../../lib/redux/actions/recipesAction';

// export default function Grid(props) {
//     const dispatch = useDispatch();

//     var list = [];
//     if (props.list === "projects") {
//         list = useSelector(state => state.projects);
//     } else if (props.list === 'recipes') {
//         list = useSelector(state => state.recipes);
//     } else if (props.list === 'contact') {
//         list = useSelector(state => state.contact);
//     } else if (props.list === 'sustainability') {
//         list = useSelector(state => state.sustainability);
//     }
//     useEffect(() => {
//         if (props.list === 'projects' && list === false) {
//             dispatch(load_projects());
//         } else if (props.list === 'recipes' && list === false) {
//             dispatch(load_recipes());
//         }
//         document.getElementById("grid").scrollIntoView({behavior:'smooth'});
//     }, [list])
    
    // return <div id="grid" className={`columns is-multiline ${styles.grid}`}>
    //     {
    //         list ? 
    //         list.map((val, idx) => (
    //             <Tile key={idx} tile={val} role={props.list} />
    //         ))
    //         : ""
    //     }
        
    // </div>
// }
