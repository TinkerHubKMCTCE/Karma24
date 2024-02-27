import hackImage from "../assets/events/event-hackathon.jpg";
import caddImage from "../assets/events/caddImage.png";
import vrImage from "../assets/events/event-vr.jpg";
import techquiz from "../assets/events/techquiz.png";
import expo from "../assets/events/expo.png";
import bridgeit from "../assets/events/bridgeit.png";

const events = [
  {
    id: "bridge-it",
    title: "Bridge It",
    dateTime: "02 MARCH 2024, 2 PM - 4 PM",
    image: bridgeit,
    description: ["Team of 3 or 4 members","Free registartion"],
    fee: 0,
    prize: "1st Prize: ₹3000, 2nd Prize: ₹1500",
    registerLink: "https://forms.gle/XX3e8Nq5qCxFdPmz9",
  },
  {
    id: "hackathon",
    title: "HACKATHON",
    dateTime: "01 MARCH 2024, 10 AM - 02 MARCH 2024, 10 AM",
    image: hackImage,
    description: [
      "Stack: Software",
      "Team of 2 to 4 members",
      "₹150 per person",
    ],
    fee: "300 for team ( 2 members )",
    prize: "1st Prize: ₹15000, 2nd Prize: ₹10000",
    registerLink: "https://rzp.io/l/2LP6j1GlVc",
  },
  {
    id: "cadd-moddeling",
    title: "Cadd Modeling",
    dateTime: "02 MARCH 2024, 2 PM - 4 PM",
    image: caddImage,
    description: ["Individual Participation","Free registartion"],
    fee: 0,
    prize: "1st Prize: ₹2000, 2nd Prize: ₹1000",
    registerLink: "https://forms.gle/teE2UVA5QQbdZfwd8",
  },
  {
    id: "vr-expo",
    title: "VR EXPERIENCE",
    dateTime: "02 MARCH 2024, 10 AM - 4 PM",
    image: vrImage,
    description: ["6+ Adeventures and Games"],
    fee: 49,
    registerLink: "https://rzp.io/l/ZfsNGX2",
  },
  {
    id: "tech-quiz",
    title: "Tech Quiz",
    dateTime: "02 MARCH 2024, 2 PM - 4 PM",
    image: techquiz,
    description: ["Individual Participation","Free registartion"],
    fee: 0,
    prize: "1st Prize: ₹2000, 2nd Prize: ₹1000",
    registerLink: "https://forms.gle/5PLYzQyjDmRko4j36",
  },
  {
    id: "expo",
    title: "EXPO",
    dateTime: "02 MARCH 2024, 10 AM - 3 PM",
    image: expo,
    description: [
      "For ITI, Polytechnic and Engineering students",
      "A team of 3 or 4 members",
      "Category - Working model and still model",
      "Free registartion",
    ],
    prize: "Prize: ₹10000 for each category",
    fee: 0,
    registerLink: "https://forms.gle/gtG4uWPaxcW1fd8q6",
  },
];

export default events;
