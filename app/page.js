
import Choose from './components/Choose';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ImageCard from './components/ImageCard';
import ImageCardGrid from './components/ImageCardGrid';
import NavigationMenu from './components/NavigationMenu';
import Testimonials from './components/Testimonials';
import Testimonials2 from './components/Testimonials2';
export default function Home() {
 
  return (
    <div className='bg-white text-black'>
      <NavigationMenu />
      <Hero />
      <HowItWorks />
      {/* <Choose /> */}
      <ImageCardGrid />
      <Testimonials2 />
      {/* <Testimonials /> */}
      <ContactUs />
      <Footer />
    </div>
  );
}
