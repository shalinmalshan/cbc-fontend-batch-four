import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

export default function Header() {
    return (
        <header className="w-full h-[70px] flex justify-center items-center bg-gray-100 relative">
            <div className=" w-[500px] h-full flex items-center justify-evenly  text-pink-400 text-xl">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact us</Link>
                <Link to="/reviews">Reviews</Link>
                <Link className="absolute right-[30px] text-3xl " to="/cart"> <BsCart4 /> </Link>
            
                </div>
           
        </header>
    );
}
