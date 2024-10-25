// Footer.jsx
import { Link } from 'lucide-react';
import React from 'react';

const FooterSection = ({ title, children }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
    <div className="space-y-3">
      {children}
    </div>
  </div>
);

const FooterLink = ({ href, children }) => (
  <a href={href} className="block text-gray-600 hover:text-emerald-700 transition-colors">
    {children}
  </a>
);

const BrandSection = ({ brand, description }) => (
  <div className="flex items-start space-x-2">
    <div className="text-emerald-700 font-semibold text-lg">{brand}</div>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company & Services Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h1 className="text-emerald-700 text-3xl font-bold">Better</h1>
              <p className="text-gray-600">Better is a family of companies serving all your homeownership needs.</p>
            </div>

            <div className="space-y-6">
              <BrandSection 
                brand="Better Mortgage"
                // description=`We can't wait to say "Welcome home." Apply 100% online, with expert customer support.`
              />
              
              <BrandSection 
                brand="Better Real Estate"
                description="Connect with a local Better Real Estate Partner Agent to find out all the ways you can save."
              />
              
              <BrandSection 
                brand="Better Cover"
                description="Shop, bundle, and save on insurance coverage for home, auto, life, and more."
              />
              
              <BrandSection 
                brand="Better Inspect"
                description="Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee."
              />
              
              <BrandSection 
                brand="Better Settlement Services"
                description="Get transparent rates when you shop for title insurance all in one convenient place."
              />
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <FooterSection title="Resources">
              <FooterLink href="#">Home affordability calculator</FooterLink>
              <FooterLink href="#">Mortgage calculator</FooterLink>
              <FooterLink href="#">Free mortgage calculator</FooterLink>
              <FooterLink href="#">Mortgage calculator with taxes</FooterLink>
              <FooterLink href="#">Mortgage calculator with PMI</FooterLink>
              <FooterLink href="#">Rent vs buy calculator</FooterLink>
              <FooterLink href="#">HELOC payment calculator</FooterLink>
              <FooterLink href="#">HELOC vs cash-out refinance calculator</FooterLink>
              <FooterLink href="#">Buy a home</FooterLink>
              <FooterLink href="#">Sell a home</FooterLink>
              <FooterLink href="#">Get home inspection</FooterLink>
            </FooterSection>
          </div>

          {/* Company Column */}
          <div>
            <FooterSection title="Company">
              <Link to="/about">About Us</Link>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Media</FooterLink>
              <FooterLink href="#">Partner With Us</FooterLink>
              <FooterLink href="#">Learning center</FooterLink>
              <FooterLink href="#">FAQs</FooterLink>
              <FooterLink href="#">Investor Relations</FooterLink>
            </FooterSection>
          </div>

          {/* Contact & Legal Column */}
          <div>
            <FooterSection title="Contact Us">
              <FooterLink href="mailto:hello@better.com">hello@better.com</FooterLink>
              <FooterLink href="tel:415-523-8837">415-523-8837</FooterLink>
            </FooterSection>

            <div className="mt-8">
              <FooterSection title="Legal">
                <FooterLink href="#">FAQ</FooterLink>
                <FooterLink href="#">Glossary</FooterLink>
                <FooterLink href="#">NMLS Consumer Access</FooterLink>
                <FooterLink href="#">Privacy Policy</FooterLink>
                <FooterLink href="#">Terms of Use</FooterLink>
                <FooterLink href="#">Disclosures & Licensing</FooterLink>
                <FooterLink href="#">Affiliated Business</FooterLink>
                <FooterLink href="#">Browser Disclaimer</FooterLink>
              </FooterSection>
            </div>

            <div className="mt-8 flex space-x-4">
              <img src="/api/placeholder/50/50" alt="Equal Housing Lender" className="h-12 w-12" />
              <img src="/api/placeholder/50/50" alt="Equal Opportunity" className="h-12 w-12" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;