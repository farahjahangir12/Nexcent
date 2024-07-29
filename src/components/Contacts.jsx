import {instagram,youtube,twitter,website} from '../assets/icons'
import { Company2 } from '../assets/Logos';
import {send} from '../assets/icons';
import '../App.css'
function Contacts(){
    return(
        <section className="bg-dark w-full p-4">
         <div className="row p-4 d-flex flex-row">
           <div className="col-md-4 d-flex flex-column align-items-center gap-4">
            <img src={Company2} alt="Logo" className="style" />
            <p className="style">Copyright &copy; 2020 Nexcent ltd.<br/>
            All rights reserved.</p>

            <div className="d-flex flex-row gap-2">
                   <img src={instagram} alt="" />
                   <img src={website} alt="" />
                   <img src={youtube} alt="" />
                   <img src={twitter} alt="" />
                </div>
            </div>
           <div className="col-8 row d-md-flex flex-md-row d-none justify-content-end align-items-start mt-4 mt-md-1">
                 <div class="col-md-3">
                   <ul>
                    <li><h5 className="headings">Company</h5></li>
                    <li className="nav-item"><a className="nav-link links" href="#">About us</a></li>
                    <li className="nav-item"><a className="nav-link links" href="#">Blog</a></li>
                    <li className="nav-item"><a className="nav-link links" href="#">Contact us</a></li>
                    <li className="nav-item"><a className="nav-link links" href="#">Pricing</a></li>
                    <li className="nav-item"><a className="nav-link links" href="#">Testimonials</a></li>
                   </ul>
                 </div>
                 <div class="col-md-3">
                   <ul>
                    <li><h5 className="headings">Support</h5></li>
                    <li className="nav-item"><a className="nav-link links" href="#">About us</a></li>
                    <li className="nav-item"><a className="nav-link links" href="#">Blog</a></li>
                    <li className="nav-item"><a className="nav-link links" href="#">Contact us</a></li>
                    <li className="nav-item"><a className="nav-link links" href="#">Pricing</a></li>
                    <li className="nav-item"><a className="nav-link links" href="#">Testimonials</a></li>
                   </ul>
                 </div>
                 <div class="col-md-3">
                 <h5 className="headings mb-3">Stay Up to date</h5>
                <input type="email" name="" id="" placeholder='Your email address'/>
                 </div>
           </div>
         </div>
        </section>
    );

}

export default Contacts;