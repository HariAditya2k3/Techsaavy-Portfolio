// app/layout.tsx

import Footer from './components/Footer';
import TitleCard from './components/TitleCard';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Techsaavy',
  description: 'Innovate, Collaborate, Elevate',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen bg-blue-300 text-white`}>

        <TitleCard />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
