import React from 'react'
import useMousePosition from '../hooks/useMousePosition';

const MouseApp = () => {
    
    const position = useMousePosition();

    const background = position.x > window.innerWidth/2 ? 'green' : 'red'; 

    return (
        <div className="container p-3" style={{background, height:"50vh"}}>
            <h2 className="my-3">Mouse Click App</h2>
            <h4 className="text-center">
                posición en X: {position.x}
                <br />
                posición en X: {position.y}
            </h4>
            <hr />
            <div className="d-flex mt-5">
                <div className="color-div red-div">
                    <p className="text-center">Click here to paint red!</p>  
                </div>  
                <div className="color-div gren-div">
                    <p className="text-center">Click here to paint green!</p>
                </div>
            </div>
        </div>
    );
}

export default MouseApp
