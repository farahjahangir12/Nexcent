import Scards from "./Scards.jsx";
import Contacts from "./Contacts.jsx";
import {app,web,digital,seo} from "../assets/images"

function ServicesP(){
    return(
        <section className="mt-4 pt-3 ">
            <h1 className="fs-3 fw-bold text-center">Our <span className="bg-dark color p-2">Services</span></h1>
            <section className="d-flex flex-column justify-content-center align-items-center justify-content-md-around flex-md-row mt-4 mb-4 p-4 pb-4 gap-md-o gap-3">
               <Scards icon={app} title="App Development" description="lorem gths dewdx askowjd skamdw qwsd wdsdada derftxded jhy frklewo dabdeas" />
               <Scards icon={web} title="Web Development" description="lorem gths dewdx askowjd skamdw qwsd wdsdada derftxded jhy frklewo dabdeas"/>
               <Scards icon={digital} title="Digital Marketing" description="lorem gths dewdx askowjd skamdw qwsd wdsdada derftxded jhy frklewo dabdeas"/>
               <Scards icon={seo} title="SEO Optimization" description="lorem gths dewdx askowjd skamdw qwsd wdsdada derftxded jhy frklewo dabdeas"/>
            </section>
            <Contacts/>
        </section>
    );

}

export default ServicesP;