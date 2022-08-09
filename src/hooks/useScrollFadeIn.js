import {useRef, useEffect} from 'react';

const useScrollFadeIn = (duration, delay, direction) => {
    const element = useRef();

    const handleDirection = (name) => {
        switch (name) {
            case 'up':
                return 'translate3d(0, 10%, 0)';
            case 'down':
                return 'translate3d(0, -10%, 0)';
            case 'left':
                return 'translate3d(10%, 0, 0)';
            case 'right':
                return 'translate3d(-10%, 0, 0)';
            case 'none':
                return 'translate3d( 0, 0, 0)';
            default:
                return;
        }
    };

    const fadeAnimation = () => {
        const { current } = element;


        current.style = undefined;
        current.style.transitionProperty = 'all';
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = 'cubic-bezier(0, 0, 0.2, 1)';
        current.style.transitionDelay = `${delay}s`;
        current.style.opacity = 1;
        current.style.transform = 'translate3d(0, 0, 0)';
    };


    useEffect(() => {
        window.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;
            if (currentScroll >= 70) {
                fadeAnimation();
            }
        });
    }, []);

    return {
        ref: element,
        style: { opacity: 0, transform: handleDirection(direction) },
    };
};

export default useScrollFadeIn;