import Hero from '../components/home/Hero';
import FeaturedDogs from '../components/home/FeaturedDogs';
import Services from '../components/home/Services';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedDogs />
      <Services />
      <Testimonials />
    </div>
  );
};

export default Home;