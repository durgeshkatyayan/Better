import Navbar from './components/Navbar';
import RateDropHeader from './components/RateDropHeader';
import BenefitsSection from './components/BenefitsSection';
import TestimonialSection from './components/TestimonialSection';
import Apps from './components/Apps';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';


export default function App() {
  return (
 
      <>
        <Navbar />
        <RateDropHeader />
        <BenefitsSection />
        <TestimonialSection />
        <Apps />
        <Footer />

      
      </>
   
  );
}
