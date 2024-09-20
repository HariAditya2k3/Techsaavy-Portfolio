'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Footer from './components/Footer';
import TitleCard from './components/TitleCard';
import Loader from './components/Loader';
import './globals.css';
import { Inter } from 'next/font/google';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; 
import Head from 'next/head'; 

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
      setLoading(true);
    };

    const handleStop = () => {
      NProgress.done();
      setLoading(false);
    };

    handleStart(); // Start loading when the component mounts
    handleStop();  // Stop loading when the component mounts

    return () => {
      handleStop(); // Clean up on component unmount
    };
  }, [pathname]);

  return (
    <html lang="en">
      <Head>
        <title>TechSaavy</title>
        <meta name="description" content="TechSaavy is your go-to platform for the latest in tech, code challenges, and community events." />
        <meta name="keywords" content="TechSaavy, technology, coding, challenges, events" />
        <meta name="author" content="TechSaavy " />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-blue-300 text-white`}>
        <TitleCard />
        <main className="flex-grow container mx-auto px-4 py-8">
          {loading ? <Loader /> : children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
