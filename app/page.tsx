import React from "react";
import { BaseLayout } from "@/app/_layouts";
import { Hero, ProductListing } from "@/app/components/Home";

export default function Home() {
  return (
    <>
      <BaseLayout>
        <Hero />
        <ProductListing />
      </BaseLayout>
    </>
  );
}
