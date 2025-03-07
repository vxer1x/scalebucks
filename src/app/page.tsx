"use client";

import { useEffect } from "react";
import "@/app/global.css";

import NavbarComp from "./components/navbar";
import PosterComp from "./components/poster";
import TestimonialComp from "./components/testimonial";
import CaptionComp from "./components/caption";

import ServicesComp from "./elements/servicescomp";
import SocialmediaComp from "./elements/socialmediacomp";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []); // Runs only once on mount

  return (
    <div className="Home">
      <div className="grid">
        <div className="navbar" data-aos="fade-down"><NavbarComp /></div>
        <div className="poster" data-aos="fade-right"><PosterComp /></div>
        <div className="caption" data-aos="fade-left"><CaptionComp /></div>
        <div className="testimonial" data-aos="fade-left"><TestimonialComp /></div>
      </div>

      <div data-aos="fade-up">
        <ServicesComp />
      </div>

      <SocialmediaComp />
    </div>
  );
}
