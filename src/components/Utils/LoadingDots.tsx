import React from 'react';

import './LoadingDots.scss';

export default function LoadingDots() {

    return <div className="loader-box">
        <div className="loading-dots">
            <svg id="loading-dot-1" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" />
            </svg> 
            <svg id="loading-dot-2" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" />
            </svg>
            <svg id="loading-dot-3" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" />
            </svg> 
        </div>
    </div>
}