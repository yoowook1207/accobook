import React, {useState} from 'react';

import Home from '../components/1Home'
import Bank from '../components/2Bank'
import Calendar from '../components/3Calendar'
import Settings from '../components/4Settings'
import BottomBar from '../components/BarBottom'
import TopBar from '../components/BarTop'

const Landing = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />
        };

        if (currentPage === 'Bank') {
            return <Bank />
        };

        if (currentPage === 'Calendar') {
            return <Calendar />
        };

        if (currentPage === 'Settings') {
            return <Settings />
        };
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <main className='app'>
            <div>
                <TopBar/>
            </div>
            <div className='contents'>
                    {renderPage()}
            </div>
            <div>
                <BottomBar currentPage={currentPage} handlePageChange={handlePageChange}/>
            </div>
        </main>

    )
}

export default Landing;