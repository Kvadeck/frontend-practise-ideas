import React, {useState} from 'react';
import styles from './Stars.module.css'
import Star from "./Star";

const Stars: React.FC = () => {
    const STARSCOUNTER = 5;

    const [starsIsShown, setStarsIsShown] = useState([...Array(STARSCOUNTER).fill(false)]);

    const starClickHandler = (e:React.MouseEvent) => {
        e.preventDefault();
        const target = e.target as HTMLElement;
        const tag = target.tagName.toLowerCase();
        if (tag !== "span") {

            console.log(target.id, 'target')

            setStarsIsShown((prevStarsIsShown) => {
                console.log(prevStarsIsShown, 'prevStarsIsShown')

                // .splice(startingIndex, numDeletions, replacement1, replacement2 )
            });

        }
    }

    let classes: any = styles;

    return (
        <div className={classes['stars-wrapper']}>
            <h1 className={classes.title}>Star rating component</h1>
            <div className={classes['stars-outer']}>
                {starsIsShown.map((el:boolean, i:number) =>
                    <Star key={i} id={i} starsIsShown={el} onStarClick={starClickHandler}/>
                )}
            </div>

        </div>
    );

};

export default Stars;