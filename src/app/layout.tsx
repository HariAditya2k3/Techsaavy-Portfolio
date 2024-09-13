'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Footer from './components/Footer';
import TitleCard from './components/TitleCard';
import Loader from './components/Loader';
import './globals.css';
import { Inter } from 'next/font/google';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import NProgress styles

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Start NProgress on route change
    const handleStart = () => {
      NProgress.start();
      setLoading(true);
    };

    // Stop NProgress and update loading state
    const handleStop = () => {
      NProgress.done();
      setLoading(false);
    };

    // Setup event listeners for route changes
    handleStart(); // Start loading when the component mounts
    handleStop();  // Stop loading when the component mounts

    return () => {
      handleStop(); // Clean up on component unmount
    };
  }, [pathname]);

  return (
    <html lang="en">
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
