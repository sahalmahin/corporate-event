import { Link } from "react-router-dom";

const Donate = ({ donate }) => {

    const { id, img, category, title, color_for_text, button_background, card_background } = donate;

    const btnBg = {
        backgroundColor: button_background,
        color: color_for_text
    }

    const cardBg = {
        backgroundColor: card_background
    }

    const colorText = {
        color: color_for_text
    };

    return (
        <Link to={`/donate/${id}`}>
            <div style={cardBg} className="w-[360px] h-[320px] mb-6 rounded-xl">
                <img className="w-full" src={img} alt="" />
                <div className="mt-4 ml-4">
                    <button style={btnBg} className="p-1 w-24 h-8 font-semibold rounded-md">{category}</button>
                    <p style={colorText} className="font-bold mt-2">{title}</p>
                </div>
            </div>
        </Link>
    );
};

export default Donate;