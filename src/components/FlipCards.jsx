import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import '../App.css';

function FlipCards({heading,description}){
    const [flip, setFlip] = useState(false);
    return(
        <section className="mt-4 pt-4">
            <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
              <div className="flip-1 d-flex flex-column justify-content-center bg-dark text-center p-4 gap-3 shadow-lg rounded ">
                <h5 className="fs-3">{heading}</h5>
                <button className="button" onClick={()=>setFlip(!flip)}>Details</button>
              </div>
              <div className="flip-2 bg-dark d-flex flex-column justify-content-between bg-dark text-center p-4 shadow-lg rounded">
                <p>{description}</p>
                <button  className="button" onClick={()=>setFlip(!flip)}>Back</button>
              </div>
            </ReactCardFlip>
        </section>
    );
}

export default FlipCards;