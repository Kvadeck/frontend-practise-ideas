import {useCallback, useState} from "react";

export const preloadImage = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    const getImageFromHttp = ((image: string) => {
        const result = () => {
            return new Promise((resolve, reject) => {
                const loadImg = new Image()
                loadImg.src = image;

                loadImg.onload = () => {
                    setTimeout(() => {
                        resolve(image)
                    }, 500)
                }

                loadImg.onerror = (err) => {
                    reject(err)
                }
            })
        }

        result().then(()=>{
            setIsLoaded(true);
        }).catch(()=>{
            setError(true);
        })

    })

    return {
        isLoaded,
        error,
        getImageFromHttp
    }
}