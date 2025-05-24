import React, { useState } from 'react';
import { UtensilsCrossed, Building2, Guitar as Hospital, Users, Building } from 'lucide-react';

const scenarios = [
  {
    icon: <UtensilsCrossed className="w-6 h-6" />,
    title: "Buffets & Restaurants",
    description: "Patrons receive personalized portion recommendations based on their health data, reducing the tendency to overload plates and waste food.",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: "Corporate Canteens",
    description: "Employees get healthier, right-sized portions that reduce waste while optimizing nutrition for workplace productivity.",
    image: "https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    icon: <Hospital className="w-6 h-6" />,
    title: "Hospitals & Care Facilities",
    description: "Patients receive portions tailored to their specific medical conditions and nutritional requirements, improving recovery and reducing waste.",
    image: "https://images.pexels.com/photos/7088486/pexels-photo-7088486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Public Kitchens",
    description: "Community meal programs can optimize food distribution, ensuring everyone gets enough while minimizing excess.",
    image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    icon: <Building className="w-6 h-6" />,
    title: "Educational Institutions",
    description: "Schools and universities can provide students with appropriate portions based on age, activity level, and nutritional needs.",
    image: "https://images.pexels.com/photos/8844383/pexels-photo-8844383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

const Implementation: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState(0);

  return (
    <section id="implementation" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Implementation Scenarios</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't Waste AI can be implemented across various settings to optimize food portioning and reduce waste.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="bg-gray-50 rounded-xl p-4 sticky top-24">
              {scenarios.map((scenario, index) => (
                <div
                  key={index}
                  className={`mb-2 transition-all duration-300 rounded-lg cursor-pointer ${
                    activeScenario === index 
                      ? 'bg-emerald-50 text-emerald-700' 
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setActiveScenario(index)}
                >
                  <div className="p-4 flex items-center">
                    <div className={`p-2 rounded-full mr-3 ${
                      activeScenario === index 
                        ? 'bg-emerald-100 text-emerald-600' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {scenario.icon}
                    </div>
                    <span className="font-medium">{scenario.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100">
              <div className="h-64 md:h-80 relative overflow-hidden">
                <img 
                  src={scenarios[activeScenario].image} 
                  alt={scenarios[activeScenario].title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{scenarios[activeScenario].title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-6">{scenarios[activeScenario].description}</p>
                
                <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-4">
                  <h4 className="text-emerald-700 font-medium mb-2">Implementation Benefits:</h4>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Reduces food waste by up to 30%</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Improves nutritional intake for individuals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Decreases operational costs for food service providers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">✓</span>
                      <span>Promotes more sustainable food consumption patterns</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;