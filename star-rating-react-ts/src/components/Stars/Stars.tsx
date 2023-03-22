import React, {useCallback, useEffect, useState} from 'react';
import styles from './Stars.module.css'
import Star from "./Star";
import {checkData} from "../../helpers";


const Stars: React.FC = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [stars, setStars] = useState([]);

    const fetchStarsHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch('https://react-http-14ccb-default-rtdb.firebaseio.com/stars.json');

            checkData(response.ok)

            const data = await response.json();
            const loadedStars:any = [];

            data.forEach((el:boolean) => {
                loadedStars.push(el)
            })

            setStars(loadedStars);

        } catch (error: any) {
            setError(error.message);
        }
        setIsLoading(false);
    }, []);

    const starClickHandler = (e:React.MouseEvent) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        const tag = target.tagName.toLowerCase();

        if (tag !== "span") {
            // setStarsShown((prevState):any => {
            //
            //     const id = Number(target.id);
            //     prevState = initialStars;
            //
            //     for (let i = 0; i <= id; i++) {
            //         prevState[i] = true;
            //     }
            //
            //     return [...prevState];
            //
            // })
        }
    }

    useEffect(() => {
        fetchStarsHandler().then(r => {
        });
    }, [fetchStarsHandler]);

    let classes: any = styles;

    let content = <p>No stars!</p>;

    if (stars.length > 0) {
        content = {stars.map((el: boolean, i: number) => <Star key={i} id={i} onStarClick={starClickHandler} activeStars={el} />)}
    }

    if (error) {
        content = <p>{error}</p>;
    }

    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <div className={classes['stars-wrapper']}>
            <h1 className={classes.title}>Star rating component</h1>
            <div className={classes['stars-outer']}>
                {content}
            </div>
        </div>
    );

};

export default Stars;