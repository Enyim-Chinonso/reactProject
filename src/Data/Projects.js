// import TicketImage from "../assets/Ticket image.png"
import TicketImage from "../assets/TicketTask2.png"
import Calculator from "../assets/Calculator image.png"
import Figma from "../assets/FigmaImage.png"
import Udemy from "../assets/Udemi image.png"
import TODO from "../assets/TODO image.png"
// import todoImage from "../assets/project-images/todo.png";



const projects = [
  {
    id: 1,
    title: "A TODO-LIST App",
    description:
      "A simple app that helps one create, manage, organize and perform tasks in an orderly manner with accurate time management.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: TODO,
    live: "https://enyim-chinonso.github.io/TASKTODO/",
    github: "https://github.com/Enyim-Chinonso/TASKTODO",
  },
  {
    id: 2,
    title: "A Calculator App",
    description:
      "A simple calculator app that is used to perform mathematical calculations and operations.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: Calculator,
    live: "https://enyim-chinonso.github.io/calculatorTask/",
    github: "https://github.com/Enyim-Chinonso/calculatorTask",
  },
  {
    id: 3,
    title: "A Ticket Generator App",
    description: "Used to generate a customized ticket.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: TicketImage,
    live: "https://enyim-chinonso.github.io/TicketTask/",
    github: "https://github.com/Enyim-Chinonso/TicketTask",
  },
  {
    id: 4,
    title: "A Non-Responsive Website",
    description: "A demo service website.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: Figma,
    live: "https://enyim-chinonso.github.io/FigmaProject/",
    github: "https://github.com/Enyim-Chinonso/FigmaProject",
  },
  {
    id: 5,
    title: "A Cloned Udemy Website",
    description: "A demo Udemy website.",
    tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: Udemy,
    live: "https://enyim-chinonso.github.io/IGF-TASK5-Udemy/",
    github: "https://github.com/Enyim-Chinonso/IGF-TASK5-Udemy",
  },
];

export default projects;
