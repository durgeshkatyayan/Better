import React from 'react';
import { Bell, Clock, Star } from 'lucide-react';

const RateDropHeader = () => {
  return (
    <div className="bg-emerald-800 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-32">
        {/* Alert Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 space-x-2">
            <Bell className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Rate drop alert</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-16">
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-8">
            The rate drop you've<br />been waiting for
          </h1>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center">
          {/* Start Button */}
          <button className="bg-emerald-400 hover:bg-emerald-500 text-emerald-900 font-semibold px-8 py-4 rounded-full text-lg mb-4 w-full sm:w-auto">
            Start my approval
          </button>

          {/* Timer Info */}
          <div className="flex items-center justify-center space-x-2 text-white/80 mb-8">
            <Clock className="w-5 h-5" />
            <span>3 min</span>
            <span className="mx-2">|</span>
            <span>No credit impact</span>
          </div>

          {/* Reviews Section */}
          <div className="flex items-center justify-center space-x-2">
            {/* Google Logo */}
            <img 
              src="/api/placeholder/24/24"
              alt="Google"
              className="w-6 h-6"
            />
            {/* Stars */}
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i}
                  className={`w-5 h-5 ${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400 fill-none'}`}
                />
              ))}
            </div>
            <span className="text-white">
              4.6 Stars | 3177 Google reviews
            </span>
          </div>
        </div>

        {/* Phone Image */}
        <div className="flex justify-center mt-16">
          <div className="relative w-64 h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 rounded-[40px] opacity-30 blur-xl"></div>
            <div className="relative bg-black rounded-[40px] w-full h-full overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-6 bg-black">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-4 bg-black rounded-full"></div>
              </div>
              <div className="p-4 pt-8">
                <div className="w-full h-full bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl">
                  {/* App content would go here */}
                  <div className="p-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mt-16">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-emerald-600 rounded-lg"></div>
                        <span className="text-white text-sm">Better Mortgage</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateDropHeader;