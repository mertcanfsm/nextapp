import React, { useState, useEffect } from 'react';
import styles from './slider.module.css';
import Slide from './slide';

function Slider(props) {
  const [active, setActive] = useState(0);

  const amount = props.slides.length;
  const activeSlide = props.slides[active];

  // Move according to visible slide amount
  const getMove = function(){
    let move = Math.floor(0.8*window.innerWidth / parseInt(props.width));
    if(move < 1) move = 1;
    return move;
  }

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      let next = active + getMove();
      if(next >= amount) next = 0;
      setActive(next);
    }, 3000);
    return () => clearInterval(interval);
  });

  const marginLeft = -1 * active * (parseInt(props.width)+20);

  return (
      <div className={styles.slider}>

        {/* Slides */}
        <div className={styles.wrapper} style={{marginLeft: marginLeft}}>
          {props.slides.map(slide => {
            return (
              <Slide key={slide.src} src={slide.src} alt={slide.alt} text={slide.text}
              width={props.width} height={props.height} imgHeight={props.imgHeight} />
            );
          })}
        </div>

        {/* Left button */}
        <span className={styles.arrow+" "+styles.prev} onClick={() => {
            if(active == 0) setActive(amount-getMove());
            else setActive(active-1);
        }}>&#10094;</span>

        {/* Right button */}
        <span className={styles.arrow+" "+styles.next} onClick={() => {
            if(active == amount-getMove()) setActive(0);
            else setActive(active+1);
        }}>&#10095;</span>

        {/* Indicators */}
        <div className={styles.dots}>
          {props.slides.map((slide,index) =>
            <span key={slide.src} className={styles.dot+" "+(slide == activeSlide ? styles.dotActive : "")}
            onClick={() => setActive(index)}></span>
          )}
        </div>
        
    </div>
  );
}

export default Slider;