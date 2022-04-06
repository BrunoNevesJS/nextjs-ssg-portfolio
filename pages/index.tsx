import Divider from '../components/divider';
import Footer from '../components/footer';
import Header from '../components/header';

import Home from '../patterns/home';
import Skills from '../patterns/skills';


export default function Main() {
  return (
    <>
      <Header />
      <Home />
      <Divider />
        <Skills />
        <Divider />
      <Divider />
      <Footer />
    </>
  );
}