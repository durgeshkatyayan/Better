import React from 'react';
import { CheckCircle2, Clock, DollarSign, Shield } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Quick pre-approval",
      description: "Get pre-approved in as little as 3 minutes with no impact to your credit score"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Save on your rate",
      description: "Lock in today's lower rates and save thousands over the life of your loan"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Secure process",
      description: "Your information is protected with bank-level security and encryption"
    }
  ];

  return (
    <div className="bg-white">
      {/* Top Wave Decoration */}
      <div className="bg-emerald-800">
        <svg className="w-full text-white" viewBox="0 0 1440 100" fill="currentColor">
          <path d="M0,96L48,85.3C96,75,192,53,288,53.3C384,53,480,75,576,80C672,85,768,75,864,58.7C960,43,1056,21,1152,16C1248,11,1344,21,1392,26.7L1440,32L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Content */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why choose Better
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've simplified the mortgage process to help you save time and money
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-emerald-600 mb-6 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-emerald-50 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-emerald-800">$10,000+</div>
              <div className="text-gray-600">Average savings per year</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-emerald-800">3 mins</div>
              <div className="text-gray-600">Fast pre-approval process</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-emerald-800">24/7</div>
              <div className="text-gray-600">Online access to your application</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-full text-lg inline-flex items-center space-x-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>Check your rate today</span>
          </button>
          <p className="mt-4 text-gray-600">
            No credit check required • Free rate check
          </p>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;