import Head from 'next/head';

const PREFIX = process.env.NEXT_BASE_PATH || ''


export default function Home() {
  return (
    <>
      <main>
        <h1>Olá Mundo</h1>
      </main>
    </>
  );
}