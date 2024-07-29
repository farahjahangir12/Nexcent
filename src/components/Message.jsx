import {down} from '../assets/icons'

function Message(){
 return(
    <section className="bg-light d-flex flex-column justify-content-center p-4">
      <h1 className="text-center title">Pellentesque susicpit <br/> fringila libro euo</h1>
      <button className="button mx-auto mb-4" type="submit">Get a Demo <img src={down} alt="" /></button>
    </section>
 );

}

export default Message;