import Awards from './Awards.jsx'
import FlipCards from './FlipCards.jsx'
import {illustration} from '../assets/Logos'
import Feature from './Feature.jsx';
import Contacts from './Contacts.jsx';

function About(){
    return(
        <section>
            <div className="d-flex flex-row justify-content-center text-center gap-4 mt-4 mb-4 pb-4">
             <Awards number="100" text='Users'/>
             <Awards number="150" text='Projects'/>
             <Awards number="100" text='Partners'/>
            </div>
            <section className="mt-4 mb-4 pt-4">
            <div className="mt-4 mx-auto p-4">
            <h2 className="display-4 fw-bold text-center">Our Working <span>Stategy</span></h2>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center justify-content-md-around flex-md-row mt-4 mb-4 p-2 pb-4 gap-md-o gap-3">
            <FlipCards heading="Consultation" description="Our team organize meetings and interviews with stakeholders for requirements gathering from time to time during contract"/>
            <FlipCards heading="Design" description="Our Designers have expertise in making customers stick to site with visually appealing UI/UX"/>
            <FlipCards heading="Development" description="Our developers work in pairs for efficient solution via CI/CD while documenting each use case"/>
            <FlipCards heading="Deployment" description="We make sure all steps in the engineering cycle leads to smooth deployment of application and maintenance on demand"/>
            </div>
            </section>
             <Feature image={illustration} description="What unique we are offering to our clients"/>
             <Contacts/>
            </section>
    );

}

export default About;
