import React from 'react';
import styles from './Wrapper.module.css'

type Props = {
    children: React.ReactNode;
    wrapperName: string;
}

function Wrapper(props:Props) {
    return (
        <div className={`${styles.wrapper} ${styles[props.wrapperName]}`}>
            {props.children}
        </div>
    );
}

export default Wrapper;