import React from 'react';
import { Leaf, Mail, MessageCircle, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="text-emerald-400 mr-2" size={24} />
              <span className="text-xl font-bold">Don't Waste AI</span>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing food portioning with AI-powered wearable technology to reduce waste and optimize health.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Features', 'How It Works', 'Implementation', 'Impact', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Data Protection', 'Cookies Policy'].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-emerald-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">info@dontwasteai.com</span>
              </div>
              <div className="flex items-start">
                <MessageCircle className="text-emerald-400 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">Send us a message for partnership inquiries or to request a demo.</span>
              </div>
            </div>
            
            <form className="mt-6">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition-colors">
                Subscribe to Updates
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Don't Waste AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;