import React from "react";
import Image from "next/image";

const Footer: React.FC = () => (
  <footer className="flex gap-8 items-center justify-center bg-black text-white p-20">
    <Image src="/assets/logo.svg" width={200} height={30} alt="logo" />
    <h4 style={{ marginBottom: "8px" }}>Terms</h4>
    <h4 style={{ marginBottom: "8px" }}>Privacy Policy</h4>
  </footer>
);

export default Footer;
