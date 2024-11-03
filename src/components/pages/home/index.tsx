"use client";

import PaymentSection from "./payment";
import SectionOne from "./sections/section-1";
import SectionTwo from "./sections/section-2";
import { Faq } from "./sections/section-4";

export default function HomeComponent() {
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://gfxpartner.com/Crypten/assets/dark/assets/images/banner-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-24"
      >
        <SectionOne />
      </div>

      <SectionTwo />

      <PaymentSection />

      <Faq />
    </div>
  );
}
