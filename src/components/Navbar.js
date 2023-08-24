import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

export default function Navbar() {
    let navigate = useNavigate();

    const handleClick = () => {
        localStorage.removeItem('token');
        navigate("/login", { replace: true });
        toast.success("Logout Successfully!");
    };
    return (

        <div>
            <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/dashboard">
                        FWMS
                    </Link>


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" to="/superadmin">
                                    Superadmin
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">
                                    Admin
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/user">
                                    User
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
                <button type="button" className="btn btn-light pull-right " onClick={handleClick} style={{ marginRight: "50px", marginTop: "5px", width: "100px" }}>Logout <i className="fa fa-power-off" /></button>
            </nav>
        </div>


    );
}

