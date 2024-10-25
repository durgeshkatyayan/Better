import React from 'react';
import { Play } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:px-16">
      {/* Mission Statement */}
      <div className="text-center mb-32">
        <h2 className="text-emerald-700 text-2xl font-semibold mb-6">
          Our mission
        </h2>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 max-w-5xl mx-auto leading-tight">
          We're making homeownership simpler, faster —
          <br />
          and most importantly, more accessible for all Americans.
        </h1>
      </div>

      {/* Status Quo Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            The status quo is broken
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            The traditional processes around homeownership are opaque and stressful. 
            Fees aren't transparent and some are simply outrageous in size. Traditional 
            mortgage lending is rife with unnecessary fees and slow, painful processes. 
            It's a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, 
            set out to change that.
          </p>
        </div>

        {/* Video Section */}
        <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden">
          <img 
            src="/api/placeholder/800/450" 
            alt="CEO Vishal Garg"
            className="w-full h-full object-cover"
          />
          <button 
            className="absolute inset-0 flex items-center justify-center group"
            aria-label="Play video"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
              <Play className="w-8 h-8 text-emerald-700 ml-1" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;