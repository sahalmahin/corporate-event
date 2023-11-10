import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {

    // const bgImg = {
    //     background: `url(/Resources/cover.jpg) center/cover no-repeat`, 
    //     overflow: 'hidden',
    //     height: "500px",
    //     brightness: '50px',
    //     filter: "grayscale(100%)",
    //     backgroundColor: '#ebe4e4'
    //   };
    const [activePage, setActivePage] = useState('home');

    // Function to update the active page
    const handlePageChange = (page) => {
        setActivePage(page);
    };

    const activeLinkStyle = {
        borderBottom: '3px solid #FF444A', 
        paddingBottom: '2px'
    };

    return (
        <div >
            <div className="  navbar bg-base-100 px-12 mt-10">
                <div className="flex-1">
                    <img src="../../../Resources/Logo.png" alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold gap-10">
                        <NavLink to='/' onClick={() => handlePageChange('home')}
                            style={activePage === 'home' ? activeLinkStyle : {}}>Home</NavLink>
                        <NavLink to='/Donation' onClick={() => handlePageChange('Donation')}
                            style={activePage === 'Donation' ? activeLinkStyle : {}}>Donation</NavLink>
                        <NavLink to='/Statistics' onClick={() => handlePageChange('Statistics')}
                            style={activePage === 'Statistics' ? activeLinkStyle : {}}>Statistics</NavLink>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Header;