'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TimeDisplay() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl font-bold text-accent drop-shadow-[0_0_10px_rgba(134,197,32,0.8)] font-mono tracking-wider"
    >
      {time || '00:00:00'}
    </motion.div>
  );
}
