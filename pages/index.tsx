import { useEffect } from 'react';

import Aos from 'aos';
import "aos/dist/aos.css";

import Divider from '../components/divider';
import Footer from '../components/footer';

import Home from '../patterns/home';
import Skills from '../patterns/skills';
import Projects from '../patterns/projects';
import Charts from '../patterns/charts';


export default function Main() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Home />
      <Divider />
      <Skills />
      <Charts />
      <Projects />
      <Divider reverse />
      <Footer />
    </>
  );
}