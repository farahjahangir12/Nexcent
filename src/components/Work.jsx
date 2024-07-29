import {icon3,icon4,icon5,icon6} from '../assets/icons';
import Stats from './Stats.jsx';

function Work(){
return(
    <>
    <section className="d-flex flex-column flex-md-row gap-4 justify-content-center justify-content-md-around align-items-center bg-light p-6">
      <div className="mt-4 mb-4 p-4">
        <h2>Helping a local <br /><span>business reinvent itself</span></h2>
       <p>We reached here with our hardwork and dedication</p>
      </div>
      <div>
        <div className="container mt-md-4 mb-4">
          <div className="row row-cols-2" >
          <div className="col pl-md-0 ml-2 pt-3"><Stats icon={icon3} text="Members" number="2,245,341"/></div>
          <div className="col pl-md-0 ml-2 pt-3"><Stats icon={icon4} text="Clubs" number="46,328"/></div>
          <div className="col pl-md-0 ml-2 pt-3"><Stats icon={icon5} text="Event Bookings" number="828,867"/></div>
          <div className="col pl-md-0 ml-2 pt-3"><Stats icon={icon6} text="Payements" number="1,926,436"/></div>
        </div>
      </div>
       </div>
    </section>
    </>
);
}

export default Work;