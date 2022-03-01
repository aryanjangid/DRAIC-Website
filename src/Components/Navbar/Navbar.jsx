import React from 'react'
import { NavLink } from 'react-router-dom';
import "../../App.css"
import "./Navbar.css"
// import logo from "../../Assets/logo_white.png"

function Navbar() {

    return (<>

        <div className="navbar">
            <div className="nav-container">
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink className="nav-link " activeClassName="active" aria-current="page" to="/About"> <div className="title">About</div> <span className='icon'><ion-icon name="information-circle"></ion-icon></span> </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " activeClassName="active" aria-current="page" to="/project"> <div className="title">Projects</div> <span className='icon'><ion-icon name="rocket"></ion-icon></span> </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/">
                            <div className="title">
                                Home
                            </div>
                            <span className='icon hover'>
                                {/* <img className="logo" src={logo}/> */}
                                {/* <div className="home"> */}
                                <ion-icon name="home" ></ion-icon>
                                {/* </div> */}
                            </span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" aria-current="page" to="/achievements"><div className="title achievements">Achievements</div><span className='icon'><ion-icon name="medal"></ion-icon></span> </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link " activeClassName="active" aria-current="page" to="/contact"><div className="title">Contact</div><span className='icon'><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="64" height="64"
                            viewBox="0 0 172 172"
                            style={{ fill: '#4a90e2' }}><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#00a0ff"><path d="M63.15625,13.4375c-5.19494,0 -9.40625,4.21131 -9.40625,9.40625v1.34375c0,5.19494 4.03125,10.75 9.40625,10.75c5.375,0 9.40625,-5.55506 9.40625,-10.75v-1.34375c0,-5.19494 -4.21131,-9.40625 -9.40625,-9.40625zM103.46875,13.4375c-5.19494,0 -9.40625,4.21131 -9.40625,9.40625v1.34375c0,5.19494 4.03125,10.75 9.40625,10.75c5.375,0 9.40625,-5.55506 9.40625,-10.75v-1.34375c0,-5.19494 -4.21131,-9.40625 -9.40625,-9.40625zM119.92969,42.11816c-0.45688,-0.08163 -0.9274,-0.07953 -1.39099,0.0105l-4.48792,0.87134l-17.88867,2.65601c0,0 -18.05357,-2.65601 -22.77551,-2.65601h-10.26184c-7.25088,0 -13.60618,1.70946 -17.15906,2.90271c-1.83825,0.61812 -3.20102,2.16524 -3.57458,4.06799l-4.5719,23.32141c-0.5805,2.95894 0.11027,6.02412 1.90015,8.45093l7.13342,9.6687l-1.06555,57.30359l-1.54846,0.98682c-0.76863,0.49719 -1.23877,1.35114 -1.23877,2.26758v3.90527h11.0177c1.376,0 2.52663,-1.04136 2.67175,-2.4093l5.09155,-48.6532h2.6875l5.40649,51.0625h10.75v-99.4375l16.25623,-0.72961l18.84924,-4.64539h7.14392c1.06156,0 1.99782,-0.69275 2.30957,-1.70593l0.67188,-2.17834c0.26875,-0.87344 -0.08928,-1.82339 -0.87134,-2.29907l-3.75305,-2.27283c-0.40447,-0.24456 -0.84488,-0.40653 -1.30176,-0.48816zM125.42542,56.04907l-1.82666,0.47766h-7.61108l-18.22461,4.5614l-11.76306,0.72436v94.0625h10.75l5.34351,-51.0625h2.75049l5.09155,48.6532c0.14513,1.36794 1.29575,2.4093 2.67175,2.4093h11.0177v-4.21496c0,-0.74175 -0.30759,-1.44995 -0.84509,-1.95789l-1.98938,-1.86865l-1.02356,-56.42175l7.13342,-9.6687c1.78987,-2.42412 2.47796,-5.49199 1.90015,-8.45093z"></path></g></g></svg></span> </NavLink>
                    </li>

                </ul>
            </div>
        </div>

    </>
    );
}
export default Navbar;