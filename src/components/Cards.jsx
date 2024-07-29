import '../App.css'
import {right} from '../assets/icons';
function Cards({image,description}){
    return(
        <div className="feedback">
        <div className="card scards behind">
         <img src={image} className="card-img-top" alt="Image"/>
       </div>
       <div className="card cards above shadow-lg p-3 mb-5 bg-body rounded">
         <div className="card-body text-center">
        <p class="card-text fs-4 fw-semibold ">{description}</p>
        <a href="" className="card-link login fw-semibold ">Readmore</a>
        <img src={right} alt="" />
                    
      </div>
     </div>
   
    </div>

    );

}

export default Cards;