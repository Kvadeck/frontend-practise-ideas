import {useCallback, useState} from "react";
import {starsUrl} from "./index";
import {checkData} from "../helpers";

export const FetchStars = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isEmpty, setIsEmpty] = useState(false);
    const [stars, setStars] = useState([]);

    const fetchStars = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(starsUrl);

            checkData(response.ok);

            const data = await response.json();
            const loadedStars: any = [];

            for (const key in data) {
                if (data.hasOwnProperty(key)) {
                    loadedStars.push(data[key]);
                }
            }

            if (!loadedStars.length) {
                setIsEmpty(true);
            }

            setStars(loadedStars);

        } catch (error: any) {
            setError(error.message);
        }
        // Shows preloader a little bit longer
        setTimeout(() => {
            setIsLoading(false);
        }, 500)
    }, []);


    return {
        isLoading,
        error,
        isEmpty,
        stars,
        fetchStars
    }
}

export const AddStars = () => {

    const [isUpdated, setIsUpdated] = useState(false);

    const addStars = async (stars: boolean[]) => {
        await fetch(starsUrl, {
            method: 'PUT',
            body: JSON.stringify(stars),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            setIsUpdated(true);
        })
    }

    return {
        isUpdated,
        addStars,
        setIsUpdated
    }
}
