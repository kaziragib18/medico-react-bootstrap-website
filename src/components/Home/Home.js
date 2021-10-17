import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Catagory from '../Catagory/Catagory';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';

const Home = () => {
      return (
            <div>
                 <Navigation></Navigation>
                 <Banner></Banner>
                 <Services></Services>
                 <About></About>
                 <Catagory></Catagory>
                 <Contact></Contact>
                 <Footer></Footer>

            </div>
      );
};

export default Home;