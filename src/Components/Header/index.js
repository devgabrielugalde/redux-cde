import React from 'react';
import './style.css';
import Navbar from 'react-bootstrap/Navbar';

export default function Header (props) {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="https://d8xabijtzlaac.cloudfront.net/Custom/Content/Themes/Shared/Images/marca-bemol.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                ></img>
                Painel de entregas - {props.title}
                </Navbar.Brand>
            </Navbar>
        </div>
    );
}