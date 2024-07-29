import {Logo,Logo1,Logo2,Logo3,Logo4,Logo5} from '../assets/Logos';
import product from '../assets/images/product.png';
import {right} from '../assets/icons';
import '../App.css'
function Product(){
     return(
    
        <section className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-4 p-2 gap-4">
          <div>
            <img src={product} alt="Product" />
          </div>
          <div className="d-flex flex-column gap-2 p-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, similique perferendis quasi modi illo
               harum aut dicta libero praesentium nam ratione pariatur mollitia omnis aperiam, non sint cupiditate
               earum ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus itaque, maxime ullam neque,
               vel ducimus incidunt pariatur culpa ex illo dolore distinctio asperiores dolorem cum quo minima 
               accusamus numquam libero?</p>
               <h5 className="color">Tim Smith</h5>
               <p className="fs-7">British Dragon Boat Racing Association</p>
               <div className="container">
                 <div className="row row-cols-auto">
                  <div className="col">
                   <img src={Logo} alt="Logo" className="m-col"/>
                     </div>
                   <div className="col">
                    <img src={Logo1} alt="Logo" className="m-col"/>
                     </div>
                   <div className="col">
                    <img src={Logo2} alt="Logo" className="m-col" />
                     </div>
                     <div className="col">
                    <img src={Logo3} alt="Logo" className="m-col" />
                     </div>
                     <div className="col">
                    <img src={Logo4} alt="Logo" className="m-col" />
                     </div>
                     <div className="col">
                    <img src={Logo5} alt="Logo" className="m-col"/>
                     </div>
                     <div className="col mt-2">
                     <a href="" className="login">Meet all customers</a>
                     <img src={right} alt="" />
                     </div>
                  </div>
                </div>
            </div>
           </section>
     );
}

export default Product;
