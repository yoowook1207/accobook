import React from "react"; 
// import { useQuery } from '@apollo/client';
// import { QUERY_ME } from "../../utils/queries";

import { FaHome } from "react-icons/fa";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const BottomBar = ({currentPage, handlePageChange}) => {
    // const { data: userData } = useQuery(QUERY_ME);

    // let currentUser = userData?.me?.username

    return (
    <div className='bottomBar'>
        {/* <div className={`sidebar-logo navLi`}>
            <a href="#Home" onClick={() => handlePageChange('Home')}>Hi, {currentUser}</a>
        </div> */}
        <nav>
            <ul className="navUl">
                <li className={`navLi ${currentPage==='Home' ? 'navActive' : ' '}`}>
                    <a href="#Home" onClick={() => handlePageChange('Home')}><FaHome/></a>
                </li>
                <li className={`navLi ${currentPage==='Bank' ? 'navActive' : ' '}`}>
                    <a href="#Bank" onClick={() => handlePageChange('Bank')}><FaMoneyCheckAlt/></a>
                </li>
                <li className={`navLi ${currentPage==='Calendar' ? 'navActive' : ' '}`}>
                    <a href="#Calendar" onClick={() => handlePageChange('Calendar')}><FaRegCalendarAlt/></a>
                </li>
                <li className={`navLi ${currentPage==='Settings' ? 'navActive' : ' '}`}>
                    <a href="#Settings" onClick={() => handlePageChange('Settings')}><IoSettingsSharp/></a>
                </li>
            </ul>
        
        </nav>
    </div>
    );
};

export default BottomBar;