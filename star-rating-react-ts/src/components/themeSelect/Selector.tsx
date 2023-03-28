import React from 'react';
import styles from './Selector.module.css'
import {getStarThemeFromLocalStorage} from "../../helpers";

type Props = {
    changeTheme: (state:number) => void;
    setThemeToLocalStorage:(value:string) => void;
}

const Selector = (props:Props) => {

    const onChangeThemeHandler = (event:React.ChangeEvent<HTMLSelectElement>) => {
        if(event.target.value === 'red') {
            props.changeTheme(1);
            props.setThemeToLocalStorage('red')
        }
        else if(event.target.value === 'gold') {
            props.changeTheme(0);
            props.setThemeToLocalStorage('gold')
        }
    }

    return (
        <div className={styles['theme-wrapper']}>
            <p className={styles['theme-title']}>Theme:</p>
            <label className={styles['theme-label']} htmlFor="theme-selector">
                <select defaultValue={getStarThemeFromLocalStorage(true)} id="theme-selector"
                        onChange={event =>onChangeThemeHandler(event)}
                        className={styles['theme-selector']}
                        name="theme-selector">
                    {(localStorage.getItem("star-theme")) ? '' : <option value="default" disabled>Select option</option>}
                    <option value="gold">Gold</option>
                    <option value="red">Red</option>
                </select>
                <svg className={styles['arrow-down']}>
                    <use xlinkHref="#select-arrow-down"/>
                </svg>
            </label>

            <svg className={styles['sprites']}>
                <symbol id="select-arrow-down" viewBox="0 0 10 6">
                    <polyline points="1 1 5 5 9 1"/>
                </symbol>
            </svg>

        </div>
    );
};

export default Selector;