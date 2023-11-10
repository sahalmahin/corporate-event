import DonationDetails from "../DonationDetails/DonationDetails";

const Home = () => {

    

    return (
        <div className="max-w-screen-2xl mx-auto bg-fixed">
            <div>
                <img src="" alt="" />
                <div className="text-center mt-36">
                    <p className="text-5xl font-bold mb-20">I Grow By Helping People In Need</p>
                    <div className="w-[470px] h-[70px] mx-auto">
                        <input className="search w-4/5 pl-3 py-2 border border-gray-200 rounded-l-lg" type="text" name="text" placeholder="Search here..." />
                        <button className="w-1/5 font-semibold text-white rounded-r-lg py-2 border border-[#FF444A] bg-[#FF444A]">Search</button>
                    </div>
                </div>
            </div>
            <DonationDetails></DonationDetails>
        </div>
    );
};

export default Home;