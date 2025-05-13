import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-10 px-6 border-6 border-white rounded-3xl ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8  ">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Soft Sell</h3>
          <p className="text-sm text-gray-300">
            At Soft Sell, we specialize in delivering top-tier software licensing solutions. Whether you're a small business or a large enterprise, we make software procurement simple, secure, and scalable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: contact@softsell.com</li>
            <li>Phone: +1 (234) 567-8901</li>
            <li>Location: 123 Software St, Tech City, USA</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-white text-lg">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-white mt-10 border-t border-white pt-6">
        &copy; {new Date().getFullYear()} Soft Sell. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
