import { NavLink } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <div className="navbar bg-base-100 px-12 mt-10">
                <div className="flex-1">
                    <img src="../../../Resources/Logo.png" alt="" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold gap-10">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/Donation'>Donation</NavLink>
                        <NavLink to='/Statistics'>Statistics</NavLink>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Header;