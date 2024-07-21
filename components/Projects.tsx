"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { projects } from "../data/index";

export function Projects() {
  return <HeroParallax  products={projects} />;
}
