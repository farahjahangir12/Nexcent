import "../App.css"

function Feature({image,description}){
 return(
    <>
    <section className="d-flex flex-column flex-md-row justify-content-center justify-content-md-around align-items-center gap-5 mt-4 p-4">
      <div className="mt-2 p-2">
        <img src={image} alt="Image" />
      </div>
      <div className="mt-4 p-4">
        <h3>{description}</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloremque, blanditiis quam, molestiae
             aperiam iure error officia non ducimus deserunt suscipit id exercitationem animi nesciunt pariatur quia 
             ipsam veniam ratione?Lorem ipsum dolor sit amet consectet.
        </p>
        <button className="bg-color w-1/2" type="submit">Learn More</button>
      </div>
      
    </section>
    </>
 );
}

export default Feature;