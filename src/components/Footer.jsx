import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white px-6 py-10 text-sm">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-wrap justify-between mb-6">
            {/* About Us */}
            <div className="flex-1">
              <h4 className="font-semibold mb-2">About Us</h4>
              <ul className="space-y-1 text-gray-300">
                <li className="hover:underline">Contact HP</li>
                <li className="hover:underline">Careers</li>
                <li className="hover:underline">Investor relations</li>
                <li className="hover:underline">Sustainable Impact</li>
                <li className="hover:underline">Newsroom</li>
                <li className="hover:underline">Tech Takes</li>
              </ul>
            </div>

            {/* Ways to buy */}
            <div className="flex-1">
              <h4 className="font-semibold mb-2">Ways to buy</h4>
              <ul className="space-y-1 text-gray-300">
                <li className="hover:underline">Shop online</li>
                <li className="hover:underline">
                  HP World: Brand exclusive stores
                </li>
                <li className="hover:underline">Call an HP rep</li>
                <li className="hover:underline">Find a reseller</li>
                <li className="hover:underline">HP Promotions</li>
              </ul>
            </div>

            {/* Support */}
            <div className="flex-1">
              <h4 className="font-semibold mb-2">Support</h4>
              <ul className="space-y-1 text-gray-300">
                <li className="hover:underline">Download drivers</li>
                <li className="hover:underline">Support & troubleshooting</li>
                <li className="hover:underline">Community</li>
                <li className="hover:underline">
                  Authorized service providers
                </li>
                <li className="hover:underline">Check repair status</li>
                <li className="hover:underline">Featured links</li>
              </ul>
            </div>

            {/* HP Partners */}
            <div className="flex-1">
              <h4 className="font-semibold mb-2">HP Partners</h4>
              <ul className="space-y-1 text-gray-300">
                <li className="hover:underline">HP Amplify Partner Program</li>
                <li className="hover:underline">HP Partner Portal</li>
                <li className="hover:underline">Developers</li>
              </ul>
            </div>

            {/* Social Icons */}
            <div className="flex-1">
              <h4 className="font-semibold mb-2">Stay connected</h4>
              <div className="flex space-x-4 text-xl text-gray-400">
                <FaFacebookF className="hover:text-white cursor-pointer" />
                <FaInstagram className="hover:text-white cursor-pointer" />
                <FaXTwitter className="hover:text-white cursor-pointer" />
                <FaYoutube className="hover:text-white cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Bottom Links */}
          <div className="border-t border-gray-700 pt-4 text-xs text-gray-400 flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <span className="hover:underline cursor-pointer">Recalls</span>
              <span className="hover:underline cursor-pointer">
                Product recycling
              </span>
              <span className="hover:underline cursor-pointer">
                Accessibility
              </span>
              <span className="hover:underline cursor-pointer">
                India CSR Policy
              </span>
              <span className="hover:underline cursor-pointer">
                India Entity Annual Return
              </span>
              <span className="hover:underline cursor-pointer">Privacy</span>
              <span className="hover:underline cursor-pointer">
                Terms of use
              </span>
              <span className="hover:underline cursor-pointer">
                Cookie Preferences
              </span>
            </div>
            <div>©2025 HP Development Company, L.P. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
