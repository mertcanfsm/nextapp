import React from 'react';
import styles from './slide.module.css';
import Image from 'next/image';

function Slide(props) {
    return (
        <div className={styles.slide} style={{width: props.width, height: props.height}}>
            <Image src={props.src} alt={props.alt} width={props.width} height={props.imgHeight} />
            <div><p>{props.text}</p></div>
        </div>
    );
}

export default Slide;