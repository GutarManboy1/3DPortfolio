import { ecc, devs, alc, wagon } from "../assets/images";
import robinson from "../assets/images/robinson.png";
import goldware from "../assets/images/goldware.png";



import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  react,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  bootstrap,
  ruby,
  rails,
  storytime,
  dice,
  hatano,
  waru,
  barberking,
  swinging,
  brain,
  
} from "../assets/icons";

export const skills = [
  {
    imageUrl: ruby,
    name: "Ruby",
    type: "Frontend",
  },
  {
    imageUrl: rails,
    name: "Ruby on Rails",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: bootstrap,
    name: "Bootstrap",
    type: "Framework",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "UI/UX Design & Frontend Development",
    company_name: "Robinson Consulting",
    icon: robinson,
    iconBg: "#b7e4c7",
    date: "September 2024 - January 2025",
    points: [
      "Developing UI/UX design and front-end development using Javascript, React and other related technologies.",
      "Collaborating with a small team of designers and developers to create unique and interesting projects.",
      "Implementing modern design patterns and best practices.",
      "Participating in team building activities and contributing to the development of projects.",
    ],
  },
  {
    title: "Web Development",
    company_name: "Goldware Park",
    icon: goldware,
    iconBg: "#accbe1",
    date: "July 2024 - August 2024",
    points: [
      "Developing websites using Wordpress.",
      "Working on mobile applications using React Native and Typescript.",
      "Implementing interesting designs and features to enhance user experience.",
      "Participating in development of projects on a strict time schedule.",
    ],
  },
  {
    title: "Web Development Education",
    company_name: "Le Wagon Bootcamp",
    icon: wagon,
    iconBg: "#b7e4c7",
    date: "January 2024 - March 2024",
    points: [
      "Developing web applications using Ruby, Ruby on Rails and Javascript and and other related technologies.",
      "Collaborating with cross-functional teams including designers and other developers to create unique and interesting projects.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "100 Devs Agency",
    icon: devs,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Developing web applications using React.js and other related technologies.",
      "Designing and developing software solutions to meet specific business or user needs.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Debugging and troubleshooting issues, ensuring the overall functionality, security, and performance of the software.",
    ],
  },
  {
    title: "English Teacher",
    company_name: "ALC",
    icon: alc,
    iconBg: "#b7e4c7",
    date: "March 2018 - October 2023",
    points: [
      "Working as a college English teacher required a deep appreciation for the academic and intellectual development of students, as well as a commitment to nurturing critical thinking and analytical skills through literature and language studies.",
      "Imparting knowledge but also inspiring a love for lifelong learning, encouraging students to explore diverse perspectives and engage in meaningful discourse. ",
      "Contributing to a dynamic academic community, participating in scholarly activities, research, and staying abreast of evolving educational methodologies to enhance the overall learning experience.",
    ],
  },
  {
    title: "English Teacher",
    company_name: "ECC",
    icon: ecc,
    iconBg: "#a2d2ff",
    date: "April 2010 - Present",
    points: [
      "Fostering a positive and inclusive learning environment, where students felt comfortable expressing themselves and taking risks with language.",
      "Adapting my teaching methods and maintaining a flexibility to cater to various learning styles,technological advancements, students and ensuring a relevance and accessibility.",
      "Assessing my students' progress thoughtfully and providing constructive feedback as well as guiding them towards improvement while acknowledging their achievements, while fostering a growth mindset in language acquisition.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/GutarManboy1",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "www.linkedin.com/in/glenn-torrens/",
  },
];

export const projects = [
  {
    iconUrl: storytime,
    theme: "btn-back-red",
    name: "Story Time",
    description:
      "An AI text and image generated app where users can choose their own adventure through genre, language difficulty level(based on the CEFL structure), and length. Created with the ChatGPT api to generate text and the DallE api; built upon Ruby on Rails. Once created a user can begin their own adventure whilst keeping track of the vocabulary by creating flashcards. Learners can pause and resume their story whenever they like by looking into their library.",
    link: "https://github.com/GutarManboy1/story-time",
  },
  {
    iconUrl: dice,
    theme: "btn-back-green",
    name: "Dice House",
    description:
      "A full stack app built upon Ruby on Rails with Javascript, that allows users to rent games and post their own games to be lent.",
    link: "https://github.com/GutarManboy1/rails-board-game-rentals",
  },
  {
    iconUrl: react,
    theme: "btn-back-white",
    name: "React-Movies",
    description:
      "React app built with Javascript with a backend created in appwrite. Users can search for movies and see the most popular movies according to the TMDB API.",
    link: "https://github.com/GutarManboy1/React-Movies",
  },
  {
    iconUrl: hatano,
    theme: "btn-back-yellow",
    name: "Hatano Yakitori",
    description:
      "A Japanese chicken skewer resturant serving delicious meals and hearty laughs to a local clientele in the city of Suginami, Tokyo.",
    link: "https://github.com/GutarManboy1/Portfolio-Site-Hatano",
  },
  {
    iconUrl: waru,
    theme: "btn-back-blue",
    name: "Waru Izakaya",
    description:
      "Cozy neighborhood Japanese eatery located in the outskirts of Tokyo, serving a diverse range of dishes and spirits.",
    link: "https://github.com/GutarManboy1/Portfolio-Site-Waru",
  },
  {
    iconUrl: barberking,
    theme: "btn-back-pink",
    name: "Barber King",
    description:
      "A specialized barber shop in Fussa, Tokyo that focuses on exclusively providing high-end grooming services for clients seeking bespoke and intricate haircuts, beard styling, and grooming experiences. ",
    link: "https://github.com/GutarManboy1/Portfolio-Site-BarberKing",
  },
  {
    iconUrl: swinging,
    theme: "btn-back-black",
    name: "Swinging Market Landing Page",
    description:
      "Simple yet aesthetically pleasing page for a popular skate shop located on the hip outskirts of Shimokitawa, Tokyo",
    link: "https://github.com/GutarManboy1/Portfolio-Site-SwingingMarket",
  },
  {
    iconUrl: brain,
    theme: "btn-back-yellow",
    name: "JavaScript/Ruby Build Exercises Pt. 1",
    description:
      "Assortment of Javascript/Ruby build exercises and questions used to deepen my knowledge and flex my mental muscles.",
    link: "https://github.com/GutarManboy1/Javascript-Ruby-Exercises",
  },
  {
    iconUrl: brain,
    theme: "btn-back-red",
    name: "JavaScript/Ruby Build Exercises Pt.2",
    description:
      "Assortment of Javascript/Ruby build exercises and questions used to deepen my knowledge and flex my mental muscles.",
    link: "https://github.com/GutarManboy1/Javascript-Ruby-Exercises-Pt.2",
  },
];
