import Head from 'next/head';
import Footer from '../components/footer';

const PREFIX = process.env.NEXT_BASE_PATH || ''


export default function Home() {
  return (
    <>
      <main>
        <h1>Olá Mundo</h1>
        <Footer />
      </main>
    </>
  );
}