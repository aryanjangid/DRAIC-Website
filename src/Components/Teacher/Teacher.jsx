import react from 'react'
import './Teacher.css'
import achieve from '../../Assets/Achievements2.webp'

function Teacher(){
    return(
        <>
        <div className='teacher'>
            {/* <div className="seperator"> */}
            <div className="teachfirstrow">
                    <h1 className="teachwheredowe">THE FACE THAT GUIDES US</h1>
                    <div className="teachseperator">
                        <div className="teachlineaboutus1"></div>
                        <div>
                            <h1 className="aboutusheading">OUT MENTOR</h1>
                        </div>
                        <div className="teachlineaboutus2"></div>
                    </div>
                </div>
            {/* </div> */}
            <div className="cflex">
                <div className='teacherphoto'>
                <img className='teacherpic' src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="imgx"></img>
                </div>
                <div className="para">
                    <h1 className='teachername'>ARYAN JANGID</h1>
                    <p className='teacherpara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium commodi aliquam vero voluptates labore laboriosam id maxime explicabo animi, tenetur, sapiente suscipit harum inventore autem quam minima asperiores a illum? </p>
                    <img className='teacher_footer_social_img' src="https://img.icons8.com/color/48/000000/linkedin.png" alt="Linkedin"/>
                    <img className='teacher_footer_social_img' src="https://img.icons8.com/fluency/48/000000/instagram-new.png" alt="Linkedin"/>
                    <img className='teacher_footer_social_img' src="https://img.icons8.com/color/48/000000/twitter-squared.png" alt="Linkedin"/>

                </div>
            </div>
        </div>
        </>
    );
}
export default Teacher;