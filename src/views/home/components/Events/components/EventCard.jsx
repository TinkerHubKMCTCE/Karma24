import React from "react";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/events/${event.id}`)}
      className="p-8 rounded-3xl mx-auto workshop-item"
      style={{
        backgroundImage: `url(/src/assets/events/${event.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="text-white font-bold font-retroTeam text-3xl sm:text-5xl">
        {event.title}
      </h3>
    </div>
  );
};

export default EventCard;
