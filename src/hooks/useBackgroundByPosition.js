import { useMemo } from 'react'
import useMousePosition from './useMousePosition';

const useBackgroundByPosition = () => {
    
    const position = useMousePosition();

    const background = useMemo(() => 
        position.x > window.innerWidth/2 ? 'green' : 'red' 
    , [position]); 

    return {position, background};
}

export default useBackgroundByPosition
