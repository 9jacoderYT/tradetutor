"use client";

import SectionOne from "./sections/section-1";
import SectionTwo from "./sections/section-2";
import SectionThree from "./sections/section-3";

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

      <SectionThree />
    </div>
  );
}
