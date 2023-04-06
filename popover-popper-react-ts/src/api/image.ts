import {useCallback, useState} from "react";

interface Current {
    current: HTMLImageElement | null
}

export const preloadImage = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    async function loadImage(url: string, elem: HTMLImageElement | null) {
        return new Promise((resolve, reject) => {
            if (elem) {
                elem.onload = () => {
                    resolve(elem);
                }
                elem.onerror = (error: Event | string) => {
                    reject(error);
                }
                elem.src = url;
            }
        });
    }

    const checkImageIsLoaded = useCallback(async (url: string, elem: Current) => {
        const image = elem.current
        try {
            setIsLoaded(true);
            if (image) {
                await loadImage(url, image);

                if (image.complete) {
                    setIsLoaded(false)
                }
            }
        } catch (error) {
            setError(true)
        }
    }, [])

    return {
        isLoaded,
        error,
        checkImageIsLoaded
    }
}