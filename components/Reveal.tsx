
import React, { useEffect, useRef, PropsWithChildren } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

// Add key and make children optional via PropsWithChildren to satisfy strict TS checks in JSX
interface RevealProps {
  width?: "fit-content" | "100%";
  delay?: number;
  key?: React.Key;
}

export const Reveal = ({ children, width = "fit-content", delay = 0.25 }: PropsWithChildren<RevealProps>) => {
  // Add type parameter to useRef to avoid null/undefined issues
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};
