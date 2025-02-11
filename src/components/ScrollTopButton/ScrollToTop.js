"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ScrollToTop = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  // Ensure the component is mounted on the client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Scroll to top when the router is ready and the component is mounted
  useEffect(() => {
    if (isMounted && router.isReady) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [router.asPath, isMounted]);

  if (!isMounted) return null; // Prevent rendering on the server-side

  return null; // This component doesn't render anything
};

export default ScrollToTop;
