import 'bootstrap-icons/font/bootstrap-icons.css';
import "../App.css"
import Contacts from "./Contacts.jsx"
import {useState} from 'react'
function ContactP(){
const [name,setName]=useState('');
const [email,setEmail]=useState('');
const [message,setMessage]=useState('');


const handleSubmit=(e)=>{
    e.preventDefault();
    const userDetails={name,email,message};
    console.log(userDetails)
}


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
            <form className="container mt-4 mb-4 pt-4" onSubmit={handleSubmit}>
                <h2>Contact Us</h2>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Full Name</label>
              <input type="text" className="form-control w-75 " id="exampleFormControlInput1" placeholder="Enter your full name" required value={name}
               onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control w-75" id="exampleFormControlInput1" placeholder="name@example.com" required value={email}
               onChange={(e)=>setEmail(e.target.value)}/>
            </div>
           <div class="mb-3">
             <label for="exampleFormControlTextarea1" className="form-label">Message</label>
             <textarea className="form-control w-75" id="exampleFormControlTextarea1" rows="3" placeholder="Enter your message.." required value={message}
              onChange={(e)=>setMessage(e.target.value)}></textarea>
             <div class="mb-2 mt-2">
             <button className="w-25 bg-color" type="submit">Send</button>
            </div>
            </div>
        </form>
        </section>
        <Contacts/>
        </main>
    );
}

export default ContactP;
