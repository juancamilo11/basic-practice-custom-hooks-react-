import { useState, useEffect } from 'react';

const initialMousePosition = {
    x:0,
    y:0
}

const useMousePosition = () => {
    
    const [mousePosition, setMousePosition] = useState(initialMousePosition);

    useEffect(() => {
        
        const handleMouseMove = (e) => {
            
            setMousePosition({
                x:e.clientX,
                y:e.clientY
            })
        }

        window.addEventListener('click', handleMouseMove); 
        
        return () => {
            window.removeEventListener('click', handleMouseMove); 
        }
    }, []);
    
    return mousePosition;
}

export default useMousePosition
