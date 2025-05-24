import React, { useState } from 'react';
import { Watch, Smartphone, QrCode, Database } from 'lucide-react';

const steps = [
  {
    icon: <Watch className="w-8 h-8" />,
    title: "Health Data Collection",
    description: "Your wearable device collects real-time health metrics including stomach capacity, digestion status, and nutritional needs.",
    color: "bg-blue-500"
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "On-Device Processing",
    description: "All sensitive health data is processed directly on your wearable device, ensuring complete privacy.",
    color: "bg-emerald-500"
  },
  {
    icon: <QrCode className="w-8 h-8" />,
    title: "Secure Data Sharing",
    description: "Only essential data, such as portion recommendations, is shared with food service systems via secure methods like QR codes.",
    color: "bg-purple-500"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Personalized Recommendations",
    description: "Receive tailored food portion suggestions based on your current health status, preferences, and dietary restrictions.",
    color: "bg-amber-500"
  }
];

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't Waste AI operates with a privacy-first approach, ensuring your health data remains secure while providing personalized recommendations.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 order-2 lg:order-1">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`mb-6 rounded-xl transition-all duration-300 cursor-pointer ${
                  activeStep === index 
                    ? 'bg-white shadow-lg border-l-4 border-emerald-500' 
                    : 'bg-white/50 hover:bg-white hover:shadow-md'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="p-6 flex items-start">
                  <div className={`${step.color} p-3 rounded-full text-white mr-4 flex-shrink-0`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Animation for active step */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`absolute w-full h-full rounded-full opacity-20 ${steps[activeStep].color} animate-ping-slow`}></div>
                    <div className={`absolute w-3/4 h-3/4 rounded-full opacity-20 ${steps[activeStep].color} animate-ping-medium`}></div>
                    
                    <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl">
                      <div className={`${steps[activeStep].color} p-4 rounded-full text-white mx-auto mb-4`}>
                        {steps[activeStep].icon}
                      </div>
                      <h4 className="text-center text-gray-800 font-semibold">{steps[activeStep].title}</h4>
                    </div>
                    
                    {/* Connection lines */}
                    {activeStep > 0 && (
                      <div className="absolute top-1/4 left-0 w-12 h-1 bg-gray-300 transform -translate-x-12"></div>
                    )}
                    {activeStep < steps.length - 1 && (
                      <div className="absolute bottom-1/4 right-0 w-12 h-1 bg-gray-300 transform translate-x-12"></div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Progress indicator */}
              <div className="flex justify-center mt-6">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full mx-1 ${
                      activeStep === index ? 'bg-emerald-500' : 'bg-gray-300'
                    }`}
                    onClick={() => setActiveStep(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;