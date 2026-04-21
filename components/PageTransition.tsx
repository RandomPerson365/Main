'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative" style={{ perspective: '2000px', transformStyle: 'preserve-3d' }}>
      <AnimatePresence mode="popLayout">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, rotateY: -60, scale: 0.9, filter: 'blur(4px)' }}
          animate={{ opacity: 1, rotateY: 0, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, rotateY: 60, scale: 0.9, filter: 'blur(4px)', position: 'absolute', inset: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} // Snappy custom ease
          className="w-full transform-gpu origin-center"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
