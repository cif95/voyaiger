import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint = 769) => {

    const [width, setWidth] = useState(0);

    useEffect(() => {

        const handleWindowSizeChange = () => setWidth(window.innerWidth);
        
        handleWindowSizeChange();
        window.addEventListener('resize', handleWindowSizeChange);

        return () => window.removeEventListener('resize', handleWindowSizeChange);

    }, []);

    return (width < breakpoint);
};

export default useIsMobile;