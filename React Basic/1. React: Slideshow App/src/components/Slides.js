import React, { useState } from 'react';

function Slides({slides}) {
   const [currentSlide, setCurrentSlide]= useState(0)
   const [restartVal, setRestartVal]= useState(false)
   const [prevVal, setPrevVal]= useState(false)
   const [nextVal, setNextVal]= useState(true)
   
   const restart= ()=>{
        setCurrentSlide(0)
        setRestartVal(false)
        setPrevVal(false)
        setNextVal(true)
   }
   const previous= ()=>{
    let confirm = true;
     currentSlide < 2 ? confirm = false : confirm = true
       if (currentSlide < 2) {
           setPrevVal(confirm)
           setRestartVal(confirm)
       } else {
            setPrevVal(confirm)
            setRestartVal(confirm)
            setNextVal(confirm)
       }
       setCurrentSlide(currentSlide - 1)
   }
   const next= ()=>{
       if (currentSlide < slides.length-2) {
            setNextVal(true)
            setRestartVal(true)
            setPrevVal(true)
       } else {
            setNextVal(false)
            setRestartVal(true)
            setPrevVal(true)

       }
       setCurrentSlide(currentSlide + 1)
   }
    return (
        <div>
            <div id="navigation" className="text-center">
                <button data-testid="button-restart" className="small outlined" onClick={restart} disabled={!restartVal}>Restart</button>
                <button data-testid="button-prev" className="small" onClick={previous} disabled={!prevVal}>Prev</button>
                <button data-testid="button-next" className="small" onClick={next} disabled={!nextVal}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides && slides[currentSlide].title}</h1>
                <p data-testid="text">{slides && slides[currentSlide].text}</p>
            </div>
        </div>
    );

}

export default Slides;