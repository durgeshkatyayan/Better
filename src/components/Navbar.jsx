import React, { useState } from 'react';
import { ChevronDown, Phone } from 'lucide-react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      label: 'Buy',
      dropdown: [
        'Purchase a home',
        'See if you qualify',
        'Find a real estate agent',
        'Home buying guide'
      ]
    },
    {
      label: 'Refinance',
      dropdown: [
        'Lower your payment',
        'Get cash out',
        'Refinance calculator',
        'Refinancing guide'
      ]
    },
    {
      label: 'HELOC',
      dropdown: [
        'Apply for HELOC',
        'HELOC calculator',
        'HELOC vs Cash-out',
        'HELOC guide'
      ]
    },
    {
      label: 'Rates',
      dropdown: [
        'Today\'s rates',
        'Rate calculator',
        'Rate trends',
        'Rate alerts'
      ]
    },
    {
      label: 'Better+',
      dropdown: [
        'Member benefits',
        'Join Better+',
        'Premium services',
        'Success stories'
      ]
    }
  ];

  return (
    <nav className="bg-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-2xl">
            Better
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
              <div 
                key={index}
                className="relative"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center px-3 py-2 text-sm font-medium hover:text-gray-200">
                  {item.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>

                {/* Dropdown */}
                {activeDropdown === index && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {item.dropdown.map((dropdownItem, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {dropdownItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center text-white">
              <Phone className="h-5 w-5 mr-2" />
              <span className="text-sm">Call us</span>
            </button>
            <button className="bg-white text-emerald-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100">
              Sign in
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="p-2 rounded-md hover:bg-emerald-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;