import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Members from './components/Members';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Members />
        <section className="space-section"></section>
        <Menu />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
