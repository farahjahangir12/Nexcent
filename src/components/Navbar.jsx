import { Link } from 'react-router-dom';
import '../App.css'
import {CompanyLogo} from '../assets/Logos'
function Navbar(){
    return(
     <nav className=" navbar navbar-expand-lg bg-light p-3 ">
    <div className="container-fluid">
      <div className="d-flex align-items-center">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span></button>
      <img src={CompanyLogo} alt="Company Logo" className="p-2 me-2"/>
      </div>
      <div className="collapse navbar-collapse d-md-none" id="navbarNav">
      <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/contact">Contacts</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/service">Services</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/">Testimonials</Link>
          </li>
           <li className="nav-item">
           <Link className="nav-link" to="/">FAQs</Link>
          </li>
        </ul>
        <div className="d-flex align-items-center">
            <a className="nav-link me-3" aria-current="page" href="#">Login</a>
            <button className="bg-color" type="button">Sign Up</button>
          </div>
    </div>
    </div>
     </nav>
    );
  }

export default Navbar