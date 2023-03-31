import React, {memo} from 'react';
import styles from './Wrapper.module.css'

type Props = {
    children: React.ReactNode;
    wrapperName: string;
}

const Wrapper: React.FC<Props> = memo((props) => {
    return (
        <div className={`${styles.wrapper} ${styles[props.wrapperName]}`}>
            {props.children}
        </div>
    );
})

export default Wrapper;