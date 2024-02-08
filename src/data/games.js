import hackImage from "../assets/events/event-hackathon.jpg";
import caddImage from "../assets/events/workshop-cadd.jpg";
import vrImage from "../assets/events/event-vr.jpg";
import mehendi from "../assets/images/Mehendi.png";
import face from "../assets/images/face.png";
import mirror from "../assets/images/mirror.png";
import dance from "../assets/images/dance.png";
import treasure from "../assets/images/treasure.png";
import touchmenot from "../assets/images/touchmenot.png";
import shootout from "../assets/images/shootout.png";
import light from "../assets/images/light.png";

const games = [
  {
    id: "1",
    title: "Spot Dance",
    dateTime: "02 MARCH 2024, 2 PM - 4 PM",
    description: ["Individual Participation"],
    venue: "Main Stage",
    image: dance,
    fee: "50",
    prize: "1st Prize: ₹2000, 2nd Prize: ₹1000",
  },
  {
    id: "2",
    title: "Face painting",
    dateTime: "01 MARCH 2024, 2 PM - 3 PM",
    venue : "Indoor",
    image: face,
    description: ["Individual Participation"],
    fee: "50",
    prize: "1st Prize: ₹500",
  },
  {
    id: "3",
    title: "Mehendi",
    dateTime: "02 MARCH 2024, 1 PM - 2 PM",
    venue: "Indoor",
    image: mehendi,
    description: ["Individual Participation"],
    fee: 99,
    prize: "1st Prize: ₹2000, 2nd Prize: ₹1000",
  },
  {
    id: "4",
    title: "Mirror Dance",
    dateTime: "02 MARCH 2024, 9 AM - 10 PM",
    venue: "Garden",
    image: mirror,
    description: ["Group of 2"],
    fee: 50,
  },
  {
    id: "5",
    title: "Light Music",
    dateTime: "02 MARCH 2024, 2 PM - 4 PM",
    venue: "Garden",
    image: light,
    fee: 99,
    prize: "1st Prize: ₹2000, 2nd Prize: ₹1000",
  },
  {
    id: "6",
    title: "Treasure Hunt",
    dateTime: "02 MARCH 2024, 10 AM - 4 PM",
    image: treasure,
    description: [
      "For ITI, Polytechnic, and Engineering students",
      "Team of 3 or 4 members",
      "Categories: Working Model, Still Model",
    ],
    prize: "Prize: ₹1500",
    fee: 50,
  },
  {
    id: "6",
    title: "Touch Me Not",
    dateTime: "02 MARCH 2024, 10 AM - 4 PM",
    image: touchmenot,
    description: [],
    prize: "Prize: ₹10000 for each category",
    fee: 399,
  },
  {
    id: "6",
    title: "Penalty Shootout",
    dateTime: "02 MARCH 2024, 10 AM - 4 PM",
    image: shootout,
    description: [],
    prize: "Prize: ₹10000 for each category",
    fee: 399,
  },
];

export default games;
