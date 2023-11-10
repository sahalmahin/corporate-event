import PropTypes from 'prop-types';
const DonateCard = ({ donate }) => {

    const { img, category, title, price, button_background, color_for_text, card_background } = donate;

    const background = {
        backgroundColor: button_background,
        color: color_for_text
    }

    const btnBg = {
        backgroundColor: color_for_text
    }

    const cardBg = {
        backgroundColor: card_background
    }

    const colorText = {
        color: color_for_text
    };

    return (
        <div style={cardBg} className="card card-side bg-base-100 shadow-xl">
            <figure><img className="h-full" src={img} alt="Movie" /></figure>
            <div className="card-body">
                <div style={background} className="p-1 w-24 h-8 text-center font-semibold rounded-md">{category}</div>
                <h2 className="text-2xl font-bold card-title">{title}</h2>
                <p style={colorText} className="font-bold">{price}</p>
                <button style={btnBg} className="w-32 h-10 font-bold rounded-md text-white">View Details</button>
            </div>
        </div>
    );
};

DonateCard.propTypes = {
    donate: PropTypes.object
  };

export default DonateCard;