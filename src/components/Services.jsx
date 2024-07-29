import {Logo,Logo1,Logo2,Logo3,Logo4,Logo5,Logo6} from '../assets/Logos';
import {icon,icon1,icon2} from '../assets/icons';
import Scards from "./Scards.jsx";
import "../App.css"
function Services(){
    return(
        <>
        <section className="mt-4">
          <div className="d-flex flex-column align-items-center p-4 p-md-0">
            <h3>Our Clients</h3>
            <p className="text-center text-md-left">We have been working with some fortune 500+ Clients</p>
            </div>
            <div>
            <div class="container text-center mt-3 mb-3">
               <div class="row align-items-md-start align-items-center">
                  <div class="col">
                    <img src={Logo} alt="Logo" />
                </div>
                 <div class="col">
                    <img src={Logo1} alt="Logo" />
                </div>
                 <div class="col">
                    <img src={Logo2} alt="Logo" />
                </div>
                <div class="col">
                     <img src={Logo3} alt="Logo" />
                </div>
                 <div class="col">
                    <img src={Logo4} alt="Logo" />
                </div>
                 <div class="col">
                    <img src={Logo5} alt="Logo" />
                </div>
                <div class="col">
                    <img src={Logo6} alt="Logo" />
                </div>
             </div>
            </div>
        </div>
        <div className="d-flex flex-column align-items-center mt-4 pt-6">
            <h3 className='mt-3 pt-2'>Manage your entire community <br/></h3>
            <h3>in a single system</h3>
            <p>Who is nextcent suitable for?</p>
        </div>
        <div className="d-flex flex-md-row flex-column gap-4 align-items-center justify-content-md-evenly pt-4">
            <Scards className="ml-3" icon={icon} title="Membership Organizations" description="Our membership management
             software provides full automation of membership renewals and payements"/>
            <Scards className="ml-3" icon={icon1} title="National Association" description="Our membership management
             software provides full automation of membership renewals and payements"/>
            <Scards className="ml-3" icon={icon2} title="Clubs and Groups" description="Our membership management
             software provides full automation of membership renewals and payements"/>
        </div>
    </section>
        </>
    );
}

export default Services;