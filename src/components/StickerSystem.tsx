'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

type Sticker = {
  id: number;
  image: string;
  x: number;
  y: number;
  rotation: number;
};

export default function StickerSystem() {
  const [stickers, setStickers] = useState<Sticker[]>([]);
  const [nextId, setNextId] = useState(0);

  // Array of available stickers (actual files in /images/stickers/)
  const stickerImages = [
    '/images/stickers/1_11.png',
    '/images/stickers/1_3.png',
    '/images/stickers/197.png',
    '/images/stickers/2.png',
    '/images/stickers/2_7.png',
    '/images/stickers/3.png',
    '/images/stickers/3_3.png',
    '/images/stickers/4.png',
    '/images/stickers/4_3.png',
    '/images/stickers/49.png',
    '/images/stickers/5.png',
    '/images/stickers/5_2.png',
    '/images/stickers/6.png',
    '/images/stickers/6_1.png',
    '/images/stickers/7.png',
    '/images/stickers/73.png',
    '/images/stickers/8.png',
    '/images/stickers/9.png',
  ];

  const handleClick = useCallback((e: MouseEvent) => {
    // Get random sticker
    const randomSticker = stickerImages[Math.floor(Math.random() * stickerImages.length)];

    // Create new sticker at click position
    const newSticker: Sticker = {
      id: nextId,
      image: randomSticker,
      x: e.clientX,
      y: e.clientY,
      rotation: Math.random() * 60 - 30, // Random rotation between -30 and 30 degrees
    };

    setStickers(prev => [...prev, newSticker]);
    setNextId(prev => prev + 1);

    // Remove sticker after 3 seconds
    setTimeout(() => {
      setStickers(prev => prev.filter(s => s.id !== newSticker.id));
    }, 3000);
  }, [nextId, stickerImages]);

  useEffect(() => {
    // Add click event listener
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {stickers.map(sticker => (
          <motion.div
            key={sticker.id}
            initial={{
              opacity: 0,
              scale: 0,
              x: sticker.x - 50,
              y: sticker.y - 50,
              rotate: -180,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: sticker.x - 50,
              y: sticker.y - 50,
              rotate: sticker.rotation,
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
              y: sticker.y - 100,
              transition: { duration: 0.5 }
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="absolute w-24 h-24"
            style={{
              filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))',
            }}
          >
            <Image
              src={sticker.image}
              alt="Sticker"
              fill
              className="object-contain"
              draggable={false}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
