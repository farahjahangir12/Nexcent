import Navbar from './Navbar.jsx';
import  Hero from './Hero.jsx';
import Contacts from './Contacts.jsx';
import Services from './Services.jsx';
import Feature from './Feature.jsx';
import Product from './Product.jsx';
import Testimonials from './Testimonials.jsx';
import Work from './Work.jsx';
import Message from './Message.jsx';
import frame from '../assets/images/frame.png';
import login from '../assets/images/mobile-login.png';
import '../App.css'

function Home(){
    return(
        <>
      <Hero/>
      <Services/>
      <Feature image={frame} description={"The unseen of spending three years at Pixelgrade"} />
      <Work/>
      <Feature image={login} description={"How to design your site footer like we did"} />
      <Product/>
     
        </>
    );
}
 export default Home;


