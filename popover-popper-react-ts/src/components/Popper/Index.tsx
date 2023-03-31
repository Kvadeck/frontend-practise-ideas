import React, {memo} from 'react';
import styles from './Index.module.css'
import Button from "../UI/Button";


type Props = {
    title:string;
    text:string;
    image:string;
    onConfirm: () => void;
    animation:string;
}

const Popper: React.FC<Props> = memo((props) => {
    return (
        <div className={styles.popper}>
                 <div className={styles.inner}>
                     <div className={styles.left}>
                         <img src={props.image} alt={props.title}/>
                     </div>
                     <div className={styles.right}>
                         <span className={styles.title}>{props.title}&nbsp;&#8212;&nbsp;</span>
                         <div className={styles['text-wrapper']}>
                             <span className={styles.text} >{props.text}</span>
                        </div>
                     </div>
                 </div>
                 <div className={styles['button-wrapper']}>
                     <Button name={'Продолжить'} onClickHandler={props.onConfirm} color={'popover-color'} />
                 </div>
        </div>


    );
})

export default Popper;