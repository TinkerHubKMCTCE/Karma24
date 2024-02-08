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
    description: ["Team of 2 or 3 members"],
    venue: "Main Stage",
    fee: "299 per team",
    prize: "1st Prize: ₹3000, 2nd Prize: ₹1500",
  },
  {
    id: "2",
    title: "HACKATHON",
    dateTime: "01 MARCH 2024, 10 AM - 02 MARCH 2024, 10 AM",
    image: hackImage,
    description: ["Stack: Hardware, Software", "Team of 3 or 4 members"],
    fee: "300 per team",
    prize: "1st Prize: ₹15000, 2nd Prize: ₹10000",
  },
  {
    id: "3",
    title: "Cadd Modeling",
    dateTime: "02 MARCH 2024, 2 PM - 4 PM",
    image: caddImage,
    description: ["Individual Participation"],
    fee: 99,
    prize: "1st Prize: ₹2000, 2nd Prize: ₹1000",
  },
  {
    id: "4",
    title: "VR EXPO",
    dateTime: "02 MARCH 2024, 10 AM - 4 PM",
    image: vrImage,
    description: ["6+ Adeventres and Games"],
    fee: 50,
  },
  {
    id: "5",
    title: "Tech Quiz",
    dateTime: "02 MARCH 2024, 2 PM - 4 PM",
    image: techquiz,
    fee: 99,
    prize: "1st Prize: ₹2000, 2nd Prize: ₹1000",
  },
  {
    id: "6",
    title: "EXPO",
    dateTime: "02 MARCH 2024, 10 AM - 4 PM",
    image: expo,
    description: [],
    prize: "Prize: ₹10000 for each category",
    fee: 399,
  },
];

export default events;
