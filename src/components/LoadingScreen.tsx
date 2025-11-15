'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const circleRadius = 28;
  const circumference = 2 * Math.PI * circleRadius;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-[150px]"></div>

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Circular Loading Spinner */}
        <motion.div
          className="relative w-16 h-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* SVG Circle Loader */}
          <svg className="w-full h-full -rotate-90" viewBox="0 0 64 64">
            {/* Background circle */}
            <circle
              cx="32"
              cy="32"
              r={circleRadius}
              fill="none"
              stroke="#858068"
              strokeWidth="4"
            />

            {/* Animated progress circle */}
            <motion.circle
              cx="32"
              cy="32"
              r={circleRadius}
              fill="none"
              stroke="#F2ECC8"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{
                strokeDashoffset: [circumference, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                filter: 'drop-shadow(0 0 8px #F2ECC8)'
              }}
            />
          </svg>

          {/* Inner pulsing circle */}
          <motion.div
            className="absolute inset-3 bg-accent/30 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Center glow */}
          <div className="absolute inset-5 bg-accent/40 rounded-full blur-sm"></div>
        </motion.div>

        {/* Loading text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h2 className="text-xl font-bold text-white mb-2">Loading</h2>
          <div className="flex gap-1 justify-center">
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
              className="w-2 h-2 bg-accent rounded-full"
            />
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
              className="w-2 h-2 bg-accent rounded-full"
            />
            <motion.span
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
              className="w-2 h-2 bg-accent rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
