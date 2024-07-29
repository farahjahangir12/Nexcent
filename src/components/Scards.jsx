import "../App.css"
function Scards({icon,title,description}){
 return(
<div className="card scards p-3 shadow-lg">
    <div className="icons mx-auto">
  <img src={icon} className="card-img-top icons" alt="Icons"/>
  </div>
  <div className="card-body">
    <h2 className="card-title text-center text-bold">{title}</h2>
    <p className="card-text fs-6 text-wrap text-center">{description}</p>
  </div>
</div>
 );
}

export default Scards;