import React, {ReactElement, useCallback, useEffect, useState} from 'react';
import styles from './Stars.module.css'
import Star from "./Star";
import {checkData} from "../../helpers";
import {starsUrl} from "../../api";
import Preloader from "../Preloader/Preloader";


const Stars: React.FC = () => {

    const STARCOUNTER:any = 5;

    const [isLoading, setIsLoading] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [error, setError] = useState(null);
    const [stars, setStars] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);

    const fetchStarsHandler = useCallback(async () => {
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

            if(!loadedStars.length) {
                setIsEmpty(true);
            }

            setStars(loadedStars);

        } catch (error: any) {
            setError(error.message);
        }

        // Shows preloader a little bit longer
        setIsLoading(false);
    }, []);

    const addStarsHandler = (async (stars: any) => {
        await fetch(starsUrl, {
            method: 'PUT',
            body: JSON.stringify(stars),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setIsUpdated(true)
    })

    const starClickHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        const tag = target.tagName.toLowerCase();

        if (tag !== "span") {

            const id:number = Number(target.id);
            const initialStars:any = Array(STARCOUNTER).fill(false);
            const sendData:any = {};

            for (let i = 0; i <= id; i++) {
                initialStars[i] = true;
            }

            initialStars.forEach((el:boolean, i:number)=>{
                sendData[i] = el;
            })

            addStarsHandler(sendData).then(r =>{});
        }
    }

    useEffect(() => {
        fetchStarsHandler().then(r => {
        });
        setIsUpdated(false)
    }, [fetchStarsHandler, isUpdated]);

    let classes: any = styles;

    let content:any

    if (isEmpty) {
        content = <p className={classes['no-found']}>No stars found!</p>;
    }

    if (stars.length > 0) {
        content = stars.map((el: boolean, i: number): JSX.Element => <Star key={i} id={i} onStarClick={starClickHandler} activeStars={el}/>)
    }

    if (error) {
        content = <p className={classes['error']}>Error:&nbsp;{error}</p>;
    }

    if (isLoading) {
        content = <Preloader/>
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