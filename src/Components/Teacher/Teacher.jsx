import react from 'react'
import './Teacher.css'
import achieve from '../../Assets/Achievements2.webp'

function Teacher(){
    return(
        <>
        <div className='teacher'>
            <div className="seperator">
                <div className="lineaboutus1"></div>
                <div>
                    <h1 className="aboutusheading">MENTOR</h1>
                </div>
                <div className="lineaboutus2"></div>
            </div>
            <div className="cflex">
                <img className='teacherpic' src={achieve} alt="img"></img>
                <div className="para">
                    <p className='teacherpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium commodi aliquam vero voluptates labore laboriosam id maxime explicabo animi, tenetur, sapiente suscipit harum inventore autem quam minima asperiores a illum? </p>
                </div>
            </div>
        </div>
        </>
    );
}
export default Teacher;