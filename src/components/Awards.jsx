import CountUp from "react-countup";

function Awards({number,text}){
  return(
 <div className="card w-25 h-25 mt-4" >
  <div className="card-body text-center">
  <h5 className="card-title fs-1 fw-bold">
  <CountUp end={number} duration={2.75} />
  </h5>
    <p className="card-subtitle mb-2">{text}</p>  
  </div>
</div>

  );


}

export default Awards;
