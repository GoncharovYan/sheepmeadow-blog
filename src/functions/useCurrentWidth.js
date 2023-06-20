import {useEffect, useState} from "react";

function useCurrentWidth() {
    let [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        let timeoutId = null;
        const widthListener = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => setWidth(window.innerWidth), 150);
        }

        window.addEventListener("resize", widthListener);
        return () => {
            window.removeEventListener("resize", widthListener);
        }
    });

    return width;
}

export default useCurrentWidth;