import { useEffect } from 'react';

import Aos from 'aos';
import "aos/dist/aos.css";

import Divider from '../components/divider';
import Footer from '../components/footer';
import Header from '../components/header';

import Home from '../patterns/home';
import Skills from '../patterns/skills';


export default function Main() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Divider />
      <Skills />
      <Footer />
    </>
  );
}