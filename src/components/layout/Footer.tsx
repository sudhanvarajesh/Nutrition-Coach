
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-sm text-gray-600">
              Nutrition Coach is an educational platform designed to teach the
              fundamentals of nutrition in an interactive and engaging way.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Nutrition Coach | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
