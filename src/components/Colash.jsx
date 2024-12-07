import image1 from "../assets/DALL·E 2024-12-07 12.42.58 - A hyper-realistic image focusing solely on a pair of inline skates with a sleek and futuristic design. The skates have a dark color palette of black, .webp";
import image4 from "../assets/DALL·E 2024-12-07 12.43.05 - A hyper-realistic image featuring a pair of inline skates, designed with a dark color palette that combines black, white, and shades of purple. The sk.webp";
import image5 from "../assets/DALL·E 2024-12-07 16.53.57 - A hyper-realistic image featuring a pair of inline skates with a sleek and modern design. The image focuses on the skates with a wider width than heig.webp";
import imagewidth6 from "../assets/DALL·E 2024-12-07 16.56.39 - A hyper-realistic image featuring a pair of inline skates with a modern, sleek design, emphasizing black, white, and purple tones. The skates are posi.webp";
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Colash = () => {
  const imagesRef = useRef([]);
  useGSAP(() => {
    console.log("test", imagesRef);
    gsap.fromTo(
      imagesRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        stagger: 0.2,
        ease: "power2.inOut",
        delay: 1,
      },
    );
  }, []);

  const [images, setImages] = useState([image1, image5, imagewidth6, image4]);
  return (
    <section className="w-screen h-screen flex justify-center items-center ">
      <div className="     rounded-lg shadow-lg grid grid-cols-3 gap-4     overflow-hidden  w-1/2 h-1/2 ">
        {images.map((image, index) => (
          <div
            key={image}
            className={`relative overflow-hidden rounded-lg ${index == 1 || index == 2 ? "col-span-2" : ""}`}
          >
            <img
              ref={(el) => (imagesRef.current[index] = el)}
              src={image}
              key={index}
              className={` object-cover overflow-hidden
hover:scale-110 opacity-0   w-full h-full rounded-lg shadow-lg object-center`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Colash;
