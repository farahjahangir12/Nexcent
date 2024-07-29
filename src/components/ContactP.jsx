import 'bootstrap-icons/font/bootstrap-icons.css';
import "../App.css"
import Contacts from "./Contacts.jsx"
function ContactP(){
    return(
        <main>
            <h1 className="fs-1 mt-4 text-center fw-bold p-4">We will love to <span>Welcome</span> you at all our forums!</h1>
        <section className="d-flex flex-column flex-md-row align-items-center mt-4 p-4 bg-dark font">
            <div className="container mt-4 pt-4">
                  <div className="col-md-6">
                   <h4><i className="bi bi-geo-alt icons"></i>&nbsp;Location</h4>
                   <p>50 Bounsten United States</p>
                  </div>
                  <div className="col-md-6">
                   <h4><i className="bi bi-telephone icons"></i>&nbsp;Contact No</h4>
                   <p>+1 (434) 56789032</p>
                  </div>
                  <div className="col-md-6">
                   <h4><i className="bi bi-envelope icons"></i>&nbsp;Email</h4>
                   <p>farahjahangir12@gmail.com</p>
                  </div>
            </div>
            <div className="container mt-4 mb-4 pt-4">
                <h2>Contact Us</h2>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Full Name</label>
              <input type="email" class="form-control w-75 " id="exampleFormControlInput1" placeholder="Enter your full name"/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control w-75" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
           <div class="mb-3">
             <label for="exampleFormControlTextarea1" class="form-label">Message</label>
             <textarea class="form-control w-75" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your message.."></textarea>
             <div class="mb-2 mt-2">
             <button className="w-25 bg-color" type="submit">Send</button>
            </div>
            </div>
        </div>
        </section>
        <Contacts/>
        </main>
    );
}

export default ContactP;