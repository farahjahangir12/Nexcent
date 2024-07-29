
import {illustration} from '../assets/Logos'
import '../App.css'
import Footer from './Footer.jsx';

function Hero(){
return(
    <>
     <section className="d-flex flex-column flex-md-row bg-light align-items-center justify-content-md-around pt-5 mt-8">
        <div className="d-flex flex-column align-items-center align-items-md-start">
         <h1 className="display-4 fw-semibold ml-md-0 ml-3">Lessons and insights<br/>
        <span>from 8 years</span></h1>
         <p className='pt-2 pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
         <button className="bg-color w-50" type="submit">Register</button>
        </div>
        <div className="d-none d-md-block">
         <img src={illustration} alt="Hero Image"/>
        </div>
     </section>
     <Footer/>
    </>
);

}

export default Hero;