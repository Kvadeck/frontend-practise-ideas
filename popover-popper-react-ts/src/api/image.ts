import {useCallback, useState} from "react";

export const preloadImage = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    async function loadImage(url:string, elem:any) {
        return new Promise((resolve, reject) => {
            elem.onload = () => {
                    resolve(elem);
            }
            elem.onerror = (error: any) => {
                reject(error);
            }
            elem.src = url;
        });
    }
    const checkImageIsLoaded = useCallback  (async (url: string, elem:any)=>{
        const image = elem.current
        try {
            setIsLoaded(true);
            await loadImage(url, image);

            if (image.complete) {
                setIsLoaded(false)
            }

        } catch (error) {
            setError(true)
        }
    },[])

    return {
        isLoaded,
        error,
        checkImageIsLoaded
    }
}