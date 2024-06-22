import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect } from "react";
import { projectkeImages } from "../data/index";
import VideoCarousel from "./VideoCarousel";

const Highlights: React.FC = () => {
    const { watchImg , rightImg }  = projectkeImages;
     useGSAP(() => {
       gsap.to("#title", { opacity: 1, y: 0 });
       gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
     }, []);

    return (
      <section
        id="highlights"
        className="w-full overflow-hidden h-full common-padding bg-zinc"
      >
        <div className="screen-max-width">
          <div className="mb-12 w-full md:flex items-end justify-between">
            <h1 className="heading">
              Project 
              <span className="text-purple"> Highlights </span>
            </h1>
          </div>
          <VideoCarousel />
        </div>
      </section>
    );
};

export default Highlights;
