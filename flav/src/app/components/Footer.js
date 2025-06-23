import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6 px-6 sm:px-12 lg:px-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Branding */}
        <div>
          <h3 className="text-2xl font-bold mb-2">D&apos;Woody</h3>
          <p className="text-gray-400 text-sm">
            Handcrafted wood products made with love and precision. Bringing warmth and nature into your home.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/aboutUs" className="hover:text-white">About Us</a></li>
            <li><a href="/products" className="hover:text-white">Products</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-sm text-gray-300">Accra, Ghana</p>
          <p className="text-sm text-gray-300"> +233 592080783 OR +233 261713604</p>
          <p className="text-sm text-gray-300">Stevbaxter24@gmail.com</p>
          <div className="flex space-x-4 mt-4">
            {/* <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a> */}
          <a
  href="https://www.instagram.com/d_woodyshop?igsh=cnJzMmg0M3VsejBu"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-400 hover:text-white"
>
  <FaInstagram />
</a>
            {/* <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a> */}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} D&apos;Woody. All rights reserved.
      </div>
    </footer>
  );
}
