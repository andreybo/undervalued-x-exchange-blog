import * as React from "react";

const Blur = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    function getRandomBool() {
        return Math.random() < 0.6;
    }

  return (
    <div className="blur-container">
        <div className={`blur blur__position-1 blur__variant-${getRandomInt(4)}`} style={{display:getRandomBool()?'block':'none'}}/>
        <div className={`blur blur__position-2 blur__variant-${getRandomInt(4)}`} style={{display:getRandomBool()?'block':'none'}}/>
        <div className={`blur blur__position-3 blur__variant-${getRandomInt(4)}`} style={{display:getRandomBool()?'block':'none'}}/>
        <div className={`blur blur__position-4 blur__variant-${getRandomInt(4)}`} style={{display:getRandomBool()?'block':'none'}}/>
    </div>
  );
};

export default Blur;