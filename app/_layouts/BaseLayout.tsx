"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { Footer, Navbar, ScrollButton } from "@/app/components/common";
import type { BaseLayoutProps } from "@/app/interfaces";

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: { duration: 0.5 },
    });
  }, [controls]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={controls}>
      <section className="bg-white min-h-screen">
        <Navbar />
        {children}
        <ScrollButton />
        <Footer />
      </section>
    </motion.div>
  );
};
