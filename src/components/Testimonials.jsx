import Cards from "./Cards.jsx";
import { image1, image2, image3 } from "../assets/images";

function Testimonials() {
    return (
        <>
            <section className="text-container mt-3 mb-4 pt-4">
                <h1 className="fs-1 fw-bold text-center">Caring is the new marketing</h1>
                <div className="d-flex justify-content-center w-50">
                    <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempore officia ad fugit dicta doloribus maxime    
                     deserunt recusandae in, natus dolores at, illo molestiae. Minus provident error incidunt molestiae architecto!</p>
                </div>
                </section>
            <section className="d-flex flex-column flex-md-row justify-content-md-evenly justify-content-center align-items-center">
                <Cards image={image1} description="Creating streamlined safeguard processes with one ren" />
                <Cards image={image2} description="What are your safeguarding responsibilities and how can you manage them" />
                <Cards image={image3} description="Rewamping the membership model with Triathon Australia" />
            </section>
        </>
    );
}

export default Testimonials;
