import React from 'react';
import styles from './Star.module.css'

const Star:React.FC<{onStarClick: (e:React.MouseEvent)=> void, starsIsShown:Boolean, id:number}> = (props) => {

    let classes: any = styles;

    return (
        <div
             id={props.id.toString()} className={`${classes.star} ${props.starsIsShown ? classes['star-selected'] : classes['star-not-selected']}`}
             onClick={(e) => props.onStarClick(e)}
        >
            <span className={classes['top-left-top-square-line']}/>
            <span className={classes['top-left-middle-square-line']}/>
            <span className={classes['top-right-top-square-line']}/>
            <span className={classes['top-right-middle-square-line']}/>

            <span className={classes['bottom-left-top-square-line']}/>
            <span className={classes['bottom-left-bottom-square-line']}/>
            <span className={classes['bottom-right-top-square-line']}/>
            <span className={classes['bottom-right-bottom-square-line']}/>

            <span className={classes['bottom-left-square-line']}/>
            <span className={classes['bottom-right-square-line']}/>
        </div>
    );
};

export default Star;