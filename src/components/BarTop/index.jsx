import React from "react"; 
import logo from '../../assets/Icon/test1.png'

const TopBar = () => {
    
    return (
        <div className="topBar">
            <div className="topBarWrapper">
                <img className="topBar_logo"
                    src={logo}
                    alt="ACCOBOOK logo"
                />

                <div className="topBarButton">
                    <button className="primary__button">Logout</button>
                </div>
            </div>

        </div>
    )
}

export default TopBar;