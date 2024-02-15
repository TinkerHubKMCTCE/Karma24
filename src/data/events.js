import hackImage from "../assets/events/event-hackathon.jpg";
import caddImage from "../assets/events/caddImage.png";
import vrImage from "../assets/events/event-vr.jpg";
import techquiz from "../assets/events/techquiz.png";
import expo from "../assets/events/expo.png";
import bridgeit from "../assets/events/bridgeit.png";

const events = [
  {
    id: "1",
    title: "Bridge It",
    dateTime: "02 MARCH 2024, 2 PM - 4 PM",
    image: bridgeit,
    description: ["Team of 3 or 4 members"],
    fee: "299 per team",
    prize: "1st Prize: ₹3000, 2nd Prize: ₹1500",
    registerLink: "https://rzp.io/l/LnZMBfr",
  },
  {
    id: "2",
    title: "HACKATHON",
    dateTime: "01 MARCH 2024, 10 AM - 02 MARCH 2024, 10 AM",
    image: hackImage,
    description: ["Stack: Hardware, Software", "Team of 3 or 4 members"],
    fee: "300 per team",
    prize: "1st Prize: ₹15000, 2nd Prize: ₹10000",
    registerLink: "",
  },
  {
    id: "3",
    title: "Cadd Modeling",
    dateTime: "02 MARCH 2024, 2 PM - 4 PM",
    image: caddImage,
    description: ["Individual Participation"],
    fee: 99,
    prize: "1st Prize: ₹2000, 2nd Prize: ₹1000",
    registerLink: "https://rzp.io/l/xJQyrDE",
  },
  {
    id: "4",
    title: "VR EXPERIENCE",
    dateTime: "02 MARCH 2024, 10 AM - 4 PM",
    image: vrImage,
    description: ["6+ Adeventres and Games"],
    fee: 49,
    registerLink: "https://rzp.io/l/ZfsNGX2",
  },
  {
    id: "5",
    title: "Tech Quiz",
    dateTime: "02 MARCH 2024, 2 PM - 4 PM",
    image: techquiz,
    description: ["Individual Participation"],
    fee: 99,
    prize: "1st Prize: ₹2000, 2nd Prize: ₹1000",
    registerLink: "https://rzp.io/l/ZKrRwFL7V",
  },
  {
    id: "6",
    title: "EXPO",
    dateTime: "02 MARCH 2024, 10 AM - 3 PM",
    image: expo,
    description: [
      "For ITI, Polytechnic and Engineering students",
      "A team of 3 or 4 members",
      "Category - Working model and still model",
    ],
    prize: "Prize: ₹10000 for each category",
    fee: 399,
    registerLink: "https://rzp.io/l/SMQTsvP1z",
  },
];

export default events;
