import React from 'react';
import { useDispatch } from 'react-redux';


import './Grid.scss';
import { set_active } from '../../../lib/redux/actions/activeAction';

export default function Tile(props: {role: string, tile: any}) {
    const dispatch = useDispatch();

    function open(e: React.MouseEvent<HTMLDivElement>) {
        if (props.tile?.alternate) {
            props.tile.alternate(e);
        } else {
            
            dispatch(set_active(props.role, props.tile?.title, props.tile));
        }
    }

    return <div onClick={open} style={{backgroundColor : props.tile?.colour}} className={`${"tile"}`}>
        <div className={"text"}>
            {props.tile?.title}
        </div>
        {
            props.tile.svg ?
            <div className={"img"}><img src={props.tile?.svg} /></div>
            : ""
        }
    </div>
}
