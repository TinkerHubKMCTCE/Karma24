import mehendi from "../assets/images/Mehendi.png";
import face from "../assets/images/face.png";
import mirror from "../assets/images/mirror.png";
import dance from "../assets/images/dance.png";
import treasure from "../assets/images/treasure.png";
import touchmenot from "../assets/images/touchmenot.png";
import shootout from "../assets/images/shootout.png";
import light from "../assets/images/light.png";
import mrkarma from "../assets/images/Mr&mrs.jpeg";
import mappila from "../assets/images/mappila.jpeg";

const games = [
  {
    id: "spotdance",
    title: "Spot Dance",
    dateTime: "02 MARCH 2024, 2 PM - 4 PM",
    description: ["Individual Participation"],
    venue: "Main Stage",
    image: dance,
    fee: 49,
    prize: "1st Prize: ₹3000",
    registerLink: "https://rzp.io/l/5MBBvgK",
  },
  {
    id: "facepainting",
    title: "Face painting",
    dateTime: "01 MARCH 2024, 2 PM - 3 PM",
    venue : "Indoor",
    image: face,
    description: ["Individual Participation"],
    fee: 49,
    registerLink: "https://rzp.io/l/XL6Nn95w",
    prize: "1st Prize: ₹1500",
  },
  {
    id: "mehendi",
    title: "Mehendi",
    dateTime: "02 MARCH 2024, 1 PM - 2 PM",
    venue: "Indoor",
    image: mehendi,
    description: ["Individual Participation"],
    fee: 49,
    registerLink: "https://rzp.io/l/5HXkSmy",
    prize: "1st Prize: ₹1000, 2nd Prize: prize worth ₹400",
  },
  {
    id: "mirrordance",
    title: "Mirror Dance",
    dateTime: "02 MARCH 2024, 9 AM - 10 PM",
    venue: "Garden",
    image: mirror,
    description: ["Group of 2"],
    fee: 99,
    registerLink: "https://rzp.io/l/tuU537jIQF",
    prize: "1st Prize: ₹1000, 2nd Prize: prize worth ₹400",
  },
  {
    id: "lightmusic",
    title: "Light Music",
    dateTime: "02 MARCH 2024, 2 PM - 4 PM",
    venue: "Garden",
    image: light,
    fee: 49,
    registerLink: "https://rzp.io/l/9tzxi6KRo",
    prize: "1st Prize: ₹1000, 2nd Prize: prize worth ₹400",
  },
  {
    id: "photography",
    title: "Spot Photography ",
    dateTime: "02 MARCH 2024, 10 AM - 4 PM",
    image: treasure,
    description: [],
    prize: "Prize: ₹2500",
    fee: 49,
    registerLink: "https://rzp.io/l/YxogSIWZqy",
  },
  {
    id: "comedy",
    title: "Stand Up Comedy",
    dateTime: "",
    image: touchmenot,
    description: [],
    prize: "1st Prize: ₹1000, 2nd Prize: prize worth ₹400",
    fee: 49,
    registerLink: "https://rzp.io/l/Kqrs3aQ9o",
  },
  {
    id: "pattu",
    // title: "Mappila Pattu",
    dateTime: "",
    image: mappila,
    description: [],
    prize: "1st Prize: ₹1000, 2nd Prize: prize worth ₹400",
    fee: 49,
    registerLink: "https://rzp.io/l/77yZr7U",
  },
  {
    id: "mr",
    // title: "Mr and Miss Karma",
    dateTime: "",
    image: mrkarma,
    description: [],
    prize: "1st Prize: ₹5000",
    fee: 0,
    registerLink: "",
  },
];

export default games;
