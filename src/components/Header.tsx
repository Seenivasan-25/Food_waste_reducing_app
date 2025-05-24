import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Leaf 
            size={28} 
            className={`transition-colors duration-300 ${
              isScrolled ? 'text-emerald-600' : 'text-white'
            }`} 
          />
          <span 
            className={`ml-2 font-bold text-xl transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            Don't Waste AI
          </span>
        </div>
        
        <nav>
          <ul className="hidden md:flex space-x-8">
            {['Features', 'How It Works', 'Impact', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`transition-colors duration-300 hover:text-emerald-500 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
        >
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;