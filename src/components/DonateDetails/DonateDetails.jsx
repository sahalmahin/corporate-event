import { useLoaderData, useParams } from "react-router-dom";

const DonateDetails = () => {

    const donates = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const donate = donates.find(donate => donate.id === idInt)
    console.log(donate);

    const btnBg = {
        backgroundColor: donate.button_background,
        color: donate.color_for_text
    }

    const colorText = {
        color: donate.color_for_text
    };

    return (
        <div className="w-[600px] h-[200px] gird gap-2 md:grid-cols-4 border border-gray-400">
            <div className="flex gap-8">
                <img className="bg-contain bg-center" src={donate.img} alt="" />
                <div className="mt-8">
                    <p>{donate.category}</p>
                    <h3 className="font-bold text-xl">{donate.title}</h3>
                    <p style={colorText} className="font-bold">{donate.price}</p>
                    <button style={btnBg} className="p-2 w-32 h-10 font-semibold rounded-md">View details</button>
                </div>
            </div>
        </div>
    );
};

export default DonateDetails;