import React from 'react';
import { Heart, ShieldCheck, Clock, Salad, BarChart4, Globe } from 'lucide-react';

const features = [
  {
    icon: <Heart className="w-6 h-6 text-red-500" />,
    title: "Health Optimization",
    description: "Monitors real-time health data including stomach capacity, digestion status, and nutritional needs."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
    title: "Complete Privacy",
    description: "Processes all sensitive health data directly on your wearable device, ensuring your information never leaves your control."
  },
  {
    icon: <Clock className="w-6 h-6 text-purple-500" />,
    title: "Real-Time Analysis",
    description: "Continuously analyzes your health metrics to provide up-to-date portion recommendations as your needs change."
  },
  {
    icon: <Salad className="w-6 h-6 text-emerald-500" />,
    title: "Cultural Preferences",
    description: "Considers your dietary restrictions and cultural food preferences when making recommendations."
  },
  {
    icon: <BarChart4 className="w-6 h-6 text-amber-500" />,
    title: "Impact Tracking",
    description: "Visualizes your personal contribution to reducing food waste through optimized consumption."
  },
  {
    icon: <Globe className="w-6 h-6 text-cyan-500" />,
    title: "Global Solution",
    description: "Especially beneficial in developing countries where food waste is high and health optimization tools are scarce."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Key Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't Waste AI combines cutting-edge technology with practical solutions to address the global food waste crisis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;