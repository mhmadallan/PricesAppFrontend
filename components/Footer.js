import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="w-full h-52 bg-lime-600 flex flex-col gap-6 justify-center items-center text-white text-xl mt-40">
           
           <img src="DeBudget.png" width='50px' height='50px' className="rounded-full"/>
            <div className="flex gap-8 justify-center items-center">
            <FaGooglePlusG size={35} className='hover:cursor-pointer'/>
           
            <FaFacebookF size={30} className='hover:cursor-pointer'/>
            <FaTwitter size={30} className='hover:cursor-pointer'/>
            <FaInstagram size={30} className='hover:cursor-pointer'/>
            </div>
           
            <p className=" text-lg">copyright &copy; DeBudget 2022 </p>
           
        </div>
    );
}

export default Footer;