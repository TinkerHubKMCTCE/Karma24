import caddImage from "../assets/events/workshop-cadd.jpg";
import evImage from "../assets/workshops/workshop-ev.jpg";
import cyberImage from "../assets/workshops/workshop-cyber.jpg";

const workshops = [
  {
    id: "1",
    title: "CADD MODELLING Workshop",
    image: caddImage,
    fee: 399,
    registerLink: "https://rzp.io/l/lSljXE1CN",
  },
  {
    id: "2",
    title: "ELECTRONIC VEHICLE Workshop",
    image: evImage,
    description: [
      "Resource person - Muhammed Ajmal, Asst. Service Executive, Monthra Electric",
      "Two wheeler",
      "KTU Activity point - Upto 20",
    ],
    fee: 99,
    registerLink: "https://rzp.io/l/UgNkXAknUI",
  },
  {
    id: "3",
    title: "CYBERSECURITY Workshop",
    image: cyberImage,
    fee: 199,
    registerLink: "https://rzp.io/l/F1ebQgdOu",
  },
];

export default workshops;
