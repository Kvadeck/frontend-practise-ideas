import React, {memo} from 'react';
import styles from './Wrapper.module.css'

interface Props {
    children: React.ReactNode;
    wrapperName: string;
}

const Wrapper = memo((props:Props) => {
    return (
        <div className={`${styles.wrapper} ${styles[props.wrapperName]}`}>
            {props.children}
        </div>
    );
})

export default Wrapper;