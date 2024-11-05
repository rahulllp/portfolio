import {
  IoCodeWorking,
  IoLogoGithub,
  IoLogoYoutube,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoWhatsapp,
  IoLogoInstagram,
} from "react-icons/io5";
import img1 from "./images/thumb-fooddeliveryapp-reactjs-dec.png";
import img2 from "./images/thumb-fullstack-socialmedia-app-react-sanity.png";
import img3 from "./images/thumb-google-map-clone-nextjs-feb22.png";
import img4 from "./images/thumb-pinterest-clone-reactjs.png";
import img5 from "./images/thumb-videoblog-firebase-reactjs-feb-22.png";
import img6 from "./images/thumb-whatsappui-clone-nextjs.png";

export const Experience = [
  {
    id: 1,
    date: "Project-Building",
    iconsSrc: <IoCodeWorking />,
    title: "FullStack Projects",
    location: "FreeCodeCamp",
    description:
      "Created several FullStack Development Using ReactJS tailwindcss Firebase",
  },
  {
    id: 2,
    date: "Full-Stack Development",
    iconsSrc: <IoCodeWorking />,
    title: "Backend Programming",
    location: "FreeCodeCamp",
    description:
      "Get familiar to backend programming language and got understand about its features and importance",
  },
  {
    id: 3,
    date: "Frontend Development",
    iconsSrc: <IoCodeWorking />,
    title: "React-JS",
    location: "FreeCodeCamp",
    description:
      "Strong command in HTML,CSS,JS and also the libraries like ReactJS TailwindCSS Framer-Motion Animations",
  },
  {
    id: 4,
    date: "MySQL",
    iconsSrc: <IoCodeWorking />,
    title: "DataBaseManagement",
    location: "GeeksForGeeks",
    description:
      "Grab my Command in a Database Management (MySQL)",
  },
  {
    id: 5,
    date: "Java Programming",
    iconsSrc: <IoCodeWorking />,
    title: "Data Structures",
    location: "PeepCoding",
    description:
      "strong background in programming languages Java honed my skills in Data Structures and Algorithms Worked on Java projects."
  },
];

export const Projects = [
  {
    id: 1,
    name: "Food Delivery UI Mockup",
    imageSrc: img1,
    techs: "React Js, Redux, Material UI",
    github: "#",
  },
  {
    id: 2,
    name: "Full Stack Social Media App ",
    imageSrc: img2,
    techs: "React Js, Sanity, Tailwind CSS",
    github: "#",
  },
  {
    id: 3,
    name: "Travel Advisor",
    imageSrc: img3,
    techs: "React Js, Chakra UI, Google API",
    github: "#",
  },
  {
    id: 4,
    name: "Pintrest UI Clone 2.0 ",
    imageSrc: img4,
    techs: "React Js,  Material UI",
    github: "#",
  },
  {
    id: 5,
    name: "Own Video Blog",
    imageSrc: img5,
    techs: "React Js, Chara UI, Firebase",
    github: "#",
  },
  {
    id: 6,
    name: "Whatsapp UI Clone",
    imageSrc: img6,
    techs: "NextJs, Firebase Auth",
    github: "#",
  },
];

export const SocialLinks = [
  {
    id: 1,
    iconSrc: <IoLogoGithub className="text-textBase text-3xl cursor-pointer" />,
    name: "GitHub",
    link: "#",
  },
  
  {
    id: 1,
    iconSrc: (
      <IoLogoTwitter className="text-blue-500 text-3xl cursor-pointer" />
    ),
    name: "Twitter",
    link: "#",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoLinkedin className="text-blue-800 text-3xl cursor-pointer" />
    ),
    name: "LinkedIn",
    link: "#",
  },
  {
    id: 1,
    iconSrc: <IoLogoInstagram className="text-red-500 text-3xl cursor-pointer" />,
    name: "Instagram",
    link: "#",
  },
  {
    id: 1,
    iconSrc: (
      <IoLogoWhatsapp className="text-green-500 text-3xl cursor-pointer" />
    ),
    name: "Whatsapp",
    link: "#",
  },
];
