import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 0,
      duration: 2,
      ease: "power2.inOut",
      scale: 0,
      borderRadius: "100%",
    });
  }, []);
  return (
    <section id="hero" className="w-lvw h-lvh bg-black absolute">
      <h1>hello desde hero</h1>
    </section>
  );
};

export default Hero;
