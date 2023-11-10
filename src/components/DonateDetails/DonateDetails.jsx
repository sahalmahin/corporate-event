import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { donateInfo } from "../Utility/localstoragel";

const DonateDetails = () => {

    const donates = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const donate = donates.find(donate => donate.id === idInt)

    const btnBg = {
        backgroundColor: donate.color_for_text,
    }

    const handleDonate = () => {
        donateInfo(idInt)
        toast('Donated Successfully');
    }

    return (
        <div className="shadow-inherit  w-3/6 mx-auto">
            <figure><img className="w-full" src={donate.img} alt="" /></figure>
            <div className="w-full card bg-base-[50] h-22 rounded-md  py-5 mt-[-82px]">
                <button onClick={handleDonate} style={btnBg} className="p-2 w-32 h-10 ml-6 font-semibold rounded-md text-white">Donate {donate.price}</button>
            </div>
            <h3 className="font-bold text-2xl mt-9">{donate.title}</h3>
            <p className="font-semibold text-gray-600">{donate.description}</p>
            <ToastContainer />
        </div>
    );
};

export default DonateDetails;