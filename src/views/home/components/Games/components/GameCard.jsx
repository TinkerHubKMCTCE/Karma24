import React from "react";
import { useNavigate } from "react-router-dom";

const GameCard = ({ game }) => {
  const navigate = useNavigate();
  const image = `../../../../../assets/games/${game.image}`;

  return (
    <div
      onClick={() => navigate(`/games/${game.id}`)}
      className="p-8 rounded-3xl mx-auto workshop-item"
      style={{
        backgroundImage: `url(${game.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="text-white font-bold font-retroTeam text-3xl sm:text-5xl">
        {game.title}
      </h3>
    </div>
  );
};

export default GameCard;
