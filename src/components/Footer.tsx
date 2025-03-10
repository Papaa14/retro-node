import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-6">
      <div className="container mx-auto px-4 md:flex md:justify-between">
        {/* Social Media Section */}
        <div className="mb-4 md:mb-0">
          <h5 className="text-lg font-bold mb-2">Follow Us</h5>
          <ul className="flex space-x-4">
                     
            <li>
              <a
                href="https://www.instagram.com/RETRO_INKTATTOO"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-500 transition duration-300"
              >
               <FaInstagram className="size-5" /> 
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@TATU_BOSS.KE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 transition duration-300"
              >
              <FaTiktok className="size-5"/>
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div className="text-center md:text-right">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Retro Ink . All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;