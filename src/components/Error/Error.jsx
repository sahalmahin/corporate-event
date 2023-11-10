import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="text-4xl font-bold items-center text-center mt-[300px]">
            <h1>Oops!!!</h1>
            <Link to='/home'>GO BACK TO HOME</Link>
        </div>
    );
};

export default Error;
