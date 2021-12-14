import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (<>
        <div classNameName='container-fluid nav_bg'>
            <div classNameName='row'>
                <div classNameName='col-10 mx-auto'>


                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/project">Project</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/achivements">Achivement</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
    );
}
export default Navbar;