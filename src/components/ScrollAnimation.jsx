import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const ScrollAnimations = () => {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.defaults({
    markers: true,
    onEnter: () => console.log("entering"),
    ease: "none",
  });

  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(".bg-orange-400", {
      xPercent: -100,
    })
      .from(".bg-purple-400", { xPercent: -100 })
      .from(".bg-gray-400", {
        yPercent: 100,
      });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".container",
      scrub: true,
      pin: true,
      pinSpacing: false,
      start: "center center",
      ease: "none",
      end: "bottom 50%",
      anticipatePin: 1,
    });
  }, []);

  return (
    <div className="w-full h-lvh">
      <section className=" absolute container w-full h-lvh bg-orange-400"></section>
      <section className=" absolute container w-full h-lvh bg-purple-400"></section>
      <section className=" absolute container w-full h-lvh bg-gray-400"></section>
    </div>
  );
};

export default ScrollAnimations;
