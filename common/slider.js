import React, { useState, useEffect } from 'react';
import styles from './slider.module.css';

function Slider(props) {
  const [active, setActive] = useState(0);

  const amount = props.slides.length;
  const activeSlide = props.slides[active];

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      let next = active+1;
      if(next >= amount) next = 0;
      setActive(next);
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.slider} style={{width: props.width, height: props.height}}>

      {/* Wrapper for slides */}
      {props.slides.map((slide,index) => {

        // hSet image positions
        let left;
        if(index == active) left = "0%"; // Visible middle
        else if(index < active) left = "-100%"; // Hidden left
        else left = "100%"; // Hidden rigt
        
        // Only image and neighbors should be visible
        let visibility = (index == active || index == active-1 || index == active+1) ? "visible" : "hidden";

        return (
          <div className={styles.slide} style={{left: left, visibility: visibility}} >
            <img className={styles.slideImg} src={slide.src} alt={slide.alt} />
            <p className={styles.text}>{slide.text}</p>
          </div>
        )})}
       
      {/* Left and right controls */}
      <span className={styles.arrows+" "+styles.arrowLeft}>&#10094;</span>
      <span className={styles.arrow+" "+styles.prev} onClick={() => {
          if(active == 0) setActive(amount-1);
          else setActive(active-1);
      }}></span>

      <span className={styles.arrows+" "+styles.arrowRight}>&#10095;</span>
      <span className={styles.arrow+" "+styles.next} onClick={() => {
          if(active == amount-1) setActive(0);
          else setActive(active+1);
      }}></span>

      {/* Indicators */}
      <div className={styles.dots} style={{width: 20*amount, paddingTop: parseInt(props.height)-25}}>
        {props.slides.map((slide,index) =>
          <span className={styles.dot+" "+(activeSlide == slide ? styles.dotActive : "")}
          onClick={() => setActive(index)}></span>
        )}
      </div>

    </div>
  );
}

export default Slider;