import React from 'react';

const Gradients = () => {
    return (<>
        <svg width="0" height="0" className="position-fixed">
            <linearGradient id="lgrad" x1="100%" y1="100%" x2="0%" y2="0%" >
                <stop offset="0%" stopColor="#2FECE6" stopOpacity="100%" />
                <stop offset="100%" stopColor="#0F5EF9" stopOpacity="100%" />
            </linearGradient>
        </svg>
    </>)
}

export default Gradients;
