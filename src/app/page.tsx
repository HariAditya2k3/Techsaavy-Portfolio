'use client'; // This is a client component
import { useEffect, useState } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; 
import Loader from './components/Loader';
import Home from './home/page';

const Page = () => {
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
    setTimeout(handleStop, 1000); // Simulate loading completion

    return () => {
      handleStop(); // Clean up on component unmount
    };
  }, []);

  return (
    <div>
      {loading ? <Loader /> : <Home />}
    </div>
  );
};

export default Page;
