import React, { useEffect, useState} from 'react';
import classes from './Stars.module.css'
import starClasses from './Star.module.css'
import Star from "./Star";
import {isEqualArr} from "../../helpers";
import Preloader from "../Preloader/Preloader";
import {AddStars, FetchStars} from "../../api/stars";

type fetchStarsTypes = {
    isLoading: boolean;
    error: null;
    isEmpty: boolean;
    stars: boolean[];
    fetchStars: () => Promise<void>;
}

type addStarsTypes = {
    isUpdated: boolean;
    addStars: (data) => Promise<void>;
    setIsUpdated: (value) => void;
}

type sendDataTypes = {
    [key: number]: boolean;
}

type Props = {
    themeToggle: number|string;
}

const Stars: React.FC<Props> = (props) => {

    const STARCOUNTER:number = 5;

    const {isLoading, error, isEmpty, stars, fetchStars }:fetchStarsTypes = FetchStars();
    const {isUpdated, addStars, setIsUpdated}:addStarsTypes = AddStars()

    const [isChanged, setIsChanged] = useState(true);

    const starClickHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        const tag = target.tagName.toLowerCase();

        if (tag !== "span") {

            const id:number = Number(target.id);
            const initialStars:boolean[] = Array(STARCOUNTER).fill(false);
            const sendData:sendDataTypes = {};

            for (let i = 0; i <= id; i++) {
                initialStars[i] = true;
            }

            initialStars.forEach((el:boolean, i:number) => {
                sendData[i] = el;
            })

            // Check previous array with current
            if (isEqualArr(initialStars, stars)) {
                setIsChanged(false)
            } else {
                setIsChanged(true)
                addStars(sendData).then(() => null);
            }
        }
    }

    useEffect(() => {
        fetchStars().then(() => null);
        setIsUpdated(false);
    }, [fetchStars, isUpdated, setIsUpdated]);

    let content;

    if (isEmpty) {
        content = <p className={classes['no-found']}>No stars found!</p>;
    }

    if (stars.length > 0) {
        content = stars.map((el: boolean, i: number): JSX.Element =>
            <Star key={i} id={i} onStarClick={starClickHandler} activeStars={el}/>)
    }

    if (error) {
        content = <p className={classes['error']}>Error:&nbsp;{error}</p>;
    }

    return (
        <div className={`${(props.themeToggle) ? starClasses['theme-red'] : starClasses['theme-gold'] }`}>
            <div className={classes['stars-wrapper']}>
                {(isLoading) ? <Preloader themeToggle={props.themeToggle} /> :
                    <div className={classes['stars-outer']}>
                        {content}
                    </div>
                }
                <div className={classes['not-changed-outer']}>
                    {!isChanged && <div className={classes['not-changed']}>Please select the new rating!</div>}
                </div>
            </div>
        </div>

    );
};

export default Stars;