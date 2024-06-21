import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect } from "react";
import { projectkeImages } from "../data/index";
import VideoCarousel from "./VideoCarousel";

const Highlights: React.FC = () => {
  useEffect(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  const { rightImg ,watchImg}  = projectkeImages
 
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Projects 
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Github
              <img src={watchImg} className="ml-2" alt="Watch the Film" />
            </p>
            <p className="link">
              LinkedIn
              <img src={rightImg} className="ml-2" alt="Watch the Event" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
