import React from "react";
import './Header.scss';

const Header = () => {
    return (
        <div className="header-main">
            <div className="left-header">
                <img src="./star.png" className="logo"/>
                <div className="title">stellarie</div>
            </div>
            <div className="right-header">
                <a className="link-item" href="#under-construction">To-do</a>
                <a className="link-item" href="#under-construction">Projects</a>
                <a className="link-item" href="#under-construction">Misc Links</a>
            </div>
        </div>
    )
}

export default Header;