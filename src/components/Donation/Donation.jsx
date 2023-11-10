import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonateInfo } from "../Utility/localstoragel";
import DonateCard from "../DonateCard/DonateCard";

const Donation = () => {

    const donation = useLoaderData();

    const [donates, setDonates] = useState([]);
    const [donateLength, setDonateLength] = useState(4);

    useEffect(() => {
        const storedDonation = getStoredDonateInfo();
        if (donation.length > 0) {
            const donateInfo = donation.filter(donate => storedDonation.includes(donate.id))
            setDonates(donateInfo)
        }
    }, [])

    return (
        <div>
            <div className="grid grid-cols-2 gap-10 mx-24 mt-20">
                {
                    donates.slice(0, donateLength).map((donate, idx) => <DonateCard key={idx} donate={donate}></DonateCard>)
                }
            </div>
            <div className={(donateLength > 4 && donateLength <= donates.length) || donates.length === 0 ? 'hidden' : ''}>
                <button onClick={() => setDonateLength(donates.length)} className="flex btn btn-lg font-semibold text-white bg-green-700 mx-auto my-10">Show More</button>
            </div>

        </div>
    );
};

export default Donation;