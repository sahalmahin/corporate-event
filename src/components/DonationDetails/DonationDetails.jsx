import { useEffect, useState } from "react";
import Donate from "../Donate/Donate";

const DonationDetails = () => {

    const [donation, setDonation] = useState([]);

    useEffect(() => {
        fetch('donation.json')
            .then(res => res.json())
            .then(data => setDonation(data))
    }, [])

    return (
        <div>
            <div className="grid grid-cols-4 mt-96">
                {
                    donation.map(donate => <Donate key={donate.id} donate={donate}></Donate>)
                }
            </div>
        </div>
    );
};

export default DonationDetails;