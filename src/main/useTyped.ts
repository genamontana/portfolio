import {useEffect, useRef} from 'react';
import Typed from 'typed.js';

export const useTyped = (strings: string[]) => {
    const ref = useRef(null)

    useEffect(() => {
        let typed = new Typed(ref.current, {
            strings,
            typeSpeed: 70
        });

        return () => {
            typed.destroy()
        }
    }, [strings])

    return {
        ref
    }
}

