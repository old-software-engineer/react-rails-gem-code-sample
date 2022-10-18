import React from "react";
import styled from "styled-components";

const Link =styled.div`
    padding-top: 10px;
`
// Render Navbar on Each page and 
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark ">
            <div className="container-fluid">
                <ul className="navbar-nav ">
                    <a className="navbar-brand" href="/">
                        Filghts
                    </a>
                </ul>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/">
                        Home 
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link text-white d-flex justify-content-end" rel="nofollow" data-method="delete" href="/users/sign_out">Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar