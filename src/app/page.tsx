'use client';
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { Testimonials } from '@/sections/Testimonials';
import { useEffect } from 'react';
import Lenis from 'lenis';
import { LogoTicker } from '@/sections/LogoTicker';
import { Features } from '@/sections/Features';
import { CallToAction } from '@/sections/CallToAction';
import { Footer } from '@/sections/Footer';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy(); // Cleanup on unmount
    };
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <Features />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
