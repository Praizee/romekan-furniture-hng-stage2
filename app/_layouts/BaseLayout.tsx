import { Footer, Navbar, ScrollButton } from "@/app/components/common";
import type { BaseLayoutProps } from "@/app/interfaces";

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <section className="bg-white min-h-screen">
      <Navbar />
      {children}
      <ScrollButton />
      <Footer />
    </section>
  );
};
