import React from "react";

const EventCard = ({ title, image }) => {
  return (
    <div
      className="p-8 rounded-3xl mx-auto workshop-item"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="text-white font-bold font-retroTeam text-3xl sm:text-5xl">{title}</h3>
    </div>
  );
};

export default EventCard;
