import '../App.css'
function Stats({icon,number,text}){
  return(
    <div>
        <div className="d-flex flex-row gap-2 mt-2 align-items-center">
        <img src={icon} alt="Icons" className="s-icons text-center"/>
        <div>
        <h4>{number}</h4>
        <div className="text">{text}</div>
        </div>
        </div>
    </div>
  );
}

export default Stats;