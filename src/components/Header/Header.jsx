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
            <div>
                <div className="text-center mt-36">
                    <p className="text-5xl font-bold mb-20">I Grow By Helping People In Need</p>
                    <div className="w-[470px] h-[70px] mx-auto">
                        <input className="search w-4/5 pl-3 py-2 border border-gray-200 rounded-l-lg" type="text" name="text" placeholder="Search here..." />
                        <button className="w-1/5 font-semibold text-white rounded-r-lg py-2 border border-[#FF444A] bg-[#FF444A]">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;