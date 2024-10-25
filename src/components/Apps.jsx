// App.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const NavButton = ({ primary, children }) => (
  <button
    className={`px-6 py-3 rounded-full font-medium transition-all
      ${primary 
        ? 'bg-emerald-700 text-white hover:bg-emerald-800' 
        : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'
      }`}
  >
    {children}
  </button>
);

const Card = ({ title, description, imageSrc, superscript }) => (
  <div className="bg-white rounded-2xl p-8 transition-transform hover:-translate-y-1 duration-300">
    {imageSrc && (
      <img
        src="/api/placeholder/400/320"
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-6"
      />
    )}
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900">
        {title}
        {superscript && <sup className="text-sm">{superscript}</sup>}
      </h2>
      <p className="text-gray-600">{description}</p>
      <button className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors">
        <ArrowRight className="w-5 h-5 text-gray-900" />
      </button>
    </div>
  </div>
);

const Apps = () => {
  const cards = [
    {
      title: 'Buying your first home with Better',
      description: 'Start your journey to homeownership with our streamlined first-time buyer program.',
      imageSrc: true
    },
    {
      title: 'One Day Mortgage',
      description: 'Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.',
      superscript: '1'
    },
    {
      title: 'Better HELOC',
      description: 'Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit². Access up to 90% of your home equity as cash in as little as 7 days.³'
    },
    {
      title: 'Insurance',
      description: 'Protect your investment with comprehensive insurance coverage designed for homeowners.',
      imageSrc: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white px-6 py-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Got questions?
              <br />
              We've got answers
            </h1>
            <div className="flex flex-wrap gap-4">
              <NavButton primary>Our products</NavButton>
              <NavButton>Calculators</NavButton>
              <NavButton>Guides & FAQs</NavButton>
            </div>
          </div>
        </div>
      </header>

      <main className="px-6 py-12 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Apps;