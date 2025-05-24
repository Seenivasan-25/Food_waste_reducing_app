import React from 'react';
import { Activity, ShieldCheck, Utensils } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-blue-700 opacity-90"></div>
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animation: 'pulse 4s infinite'
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Personalized Portions, <br />
              <span className="text-emerald-200">Zero Waste</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
              Using wearable tech to optimize food portions based on your real-time health data, while maintaining complete privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-white text-emerald-700 px-8 py-3 rounded-md font-medium hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Learn More
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-all">
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative w-72 h-72 mx-auto">
              <div className="absolute inset-0 bg-white/10 rounded-full animate-ping-slow"></div>
              <div className="absolute left-0 top-1/4 bg-emerald-400 p-4 rounded-2xl shadow-lg transform -translate-x-1/2 animate-float">
                <Activity size={32} className="text-white" />
              </div>
              <div className="absolute right-0 top-1/3 bg-blue-400 p-4 rounded-2xl shadow-lg transform translate-x-1/2 animate-float-delay">
                <ShieldCheck size={32} className="text-white" />
              </div>
              <div className="absolute bottom-0 left-1/2 bg-orange-400 p-4 rounded-2xl shadow-lg transform -translate-x-1/2 translate-y-1/4 animate-float-long">
                <Utensils size={32} className="text-white" />
              </div>
              <div className="absolute inset-1/4 bg-white/20 backdrop-blur-md rounded-full border border-white/40 flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/3912990/pexels-photo-3912990.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Smart watch" 
                  className="w-3/5 h-3/5 object-contain rounded-full" 
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-start mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8">
            {[
              { icon: <Activity size={20} />, text: "Real-time health monitoring" },
              { icon: <ShieldCheck size={20} />, text: "Privacy-first approach" },
              { icon: <Utensils size={20} />, text: "Personalized portions" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20"
              >
                <div className="text-emerald-200 mr-3">
                  {item.icon}
                </div>
                <span className="text-white text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;