import React, { useState } from 'react';
import { Droplets, Sprout, ShoppingCart } from 'lucide-react';

const ImpactCounter: React.FC<{ value: number; label: string; icon: JSX.Element; color: string }> = ({ 
  value, 
  label, 
  icon,
  color
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg`}>
        {icon}
      </div>
      <div className="text-4xl font-bold mb-2">{value.toLocaleString()}</div>
      <div className="text-gray-600 text-center">{label}</div>
    </div>
  );
};

const Impact: React.FC = () => {
  const [people, setPeople] = useState(100);
  const [days, setDays] = useState(30);
  
  // Calculate impact metrics
  const foodWasteSaved = people * days * 0.15; // kg
  const waterSaved = foodWasteSaved * 1000; // liters
  const moneySaved = people * days * 2.5; // dollars

  return (
    <section id="impact" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Potential Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the difference Don't Waste AI could make in your organization. Adjust the values to calculate potential savings.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Impact Calculator</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Number of People</label>
              <input
                type="range"
                min="10"
                max="1000"
                value={people}
                onChange={(e) => setPeople(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-gray-600 mt-2">
                <span>10</span>
                <span className="font-medium text-emerald-600">{people}</span>
                <span>1,000</span>
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Number of Days</label>
              <input
                type="range"
                min="1"
                max="365"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-gray-600 mt-2">
                <span>1</span>
                <span className="font-medium text-emerald-600">{days}</span>
                <span>365</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6 border-t border-gray-100">
            <ImpactCounter 
              value={Math.round(foodWasteSaved)} 
              label="kg of Food Waste Saved" 
              icon={<Sprout size={24} className="text-white" />}
              color="bg-emerald-500"
            />
            <ImpactCounter 
              value={Math.round(waterSaved)} 
              label="Liters of Water Saved" 
              icon={<Droplets size={24} className="text-white" />}
              color="bg-blue-500"
            />
            <ImpactCounter 
              value={Math.round(moneySaved)} 
              label="USD in Food Costs Saved" 
              icon={<ShoppingCart size={24} className="text-white" />}
              color="bg-amber-500"
            />
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Global Impact Potential</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            If implemented widely, Don't Waste AI could help reduce global food waste by up to 10%, saving:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl font-bold text-emerald-600 mb-2">133M</div>
              <p className="text-gray-700">Tons of food annually</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl font-bold text-blue-600 mb-2">45B</div>
              <p className="text-gray-700">Gallons of water</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-4xl font-bold text-amber-600 mb-2">$230B</div>
              <p className="text-gray-700">In global savings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;