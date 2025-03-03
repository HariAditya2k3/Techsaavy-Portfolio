// This is now a server-side component.
import Footer from './components/Footer';
import TitleCard from './components/TitleCard';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'TechSaavy',
  description: 'TechSaavy is your go-to platform for the latest in tech, code challenges, and community events.',
  keywords: 'TechSaavy, technology, coding, challenges, events',
  author: 'TechSaavy',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen bg-black text-white`}>
        <TitleCard />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}