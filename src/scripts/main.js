import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//Delays
const second = 0.4;
const third = 0.6;
const forth = 1;
const fifth = 1.5;

// Colors
const secondary = "rgb(250, 76, 20)";

/**
 * Above the fold
 */

// Navbar
gsap.from("#nav", { y: -50, delay: forth });
// Scroller
gsap.from(".skills", { opacity: 0, delay: fifth });
// Header H1
const h1 = { y: 50, opacity: 0 };
gsap.from(".h1-full", { ...h1 });
gsap.from(".h1-stack", { ...h1, delay: second });
gsap.from(".h1-developer", { ...h1, delay: third });

// Marque
gsap.from(".marquee-wrapper", { opacity: 0, delay: fifth });
// Latest work link
gsap.from(".latestwork", { y: 50, delay: forth });
gsap.to(".latestwork", {
  delay: 2,
  color: secondary,
  y: "+=1px",
  fontWeight: "bold",
  duration: 2,
  repeat: 3,
});

gsap.to("header", {
  backgroundColor: "white",
  color: secondary,
  duration: 0.5,
  scrollTrigger: {
    trigger: ".h2-work",
    start: "top 85%",
    toggleActions: "restart reverse restart reverse",
  },
});

gsap.from(".work-bar-inner", {
  width: "100%",
  duration: 2,
  yoyo: true,
  repeat: -1,
});

const skills = [
  "Node.js",
  "React",
  "Angular",
  "SQL",
  "Laravel",
  "Redis",
  "Vue",
  "MongoDB",
  "Webpack",
  "GraphQL",
  "Storybook",
];
const marquee = document.querySelector(".marquee");
skills
  .concat(skills)
  .concat(skills)
  .concat(skills)
  .forEach((skill) => {
    const span = document.createElement("span");
    span.innerHTML = skill + " ";
    marquee.appendChild(span);
  });
