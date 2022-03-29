import Footer from '../components/footer';
import Header from '../components/header';
import Home from '../components/home';
import Divider from '../components/divider';

export default function Main() {
  return (
    <>
      <Header />
      <Home />
      <Divider />
      <div style={{ backgroundColor: 'white', height: 200}} />
      <Footer />
    </>
  );
}