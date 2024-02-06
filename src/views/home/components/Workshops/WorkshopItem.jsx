import { useNavigate } from "react-router-dom";
import "./Workshops.css";

const WorkshopItem = ({ workshop }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/workshops/${workshop.id}`)}
      className="p-8 rounded-3xl mx-auto workshop-item max-w-xs"
      style={{
        backgroundImage: `url(${workshop.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h3 className="text-karma-blue font-bold font-retroTeam text-3xl sm:text-4xl">
        {workshop.title}
      </h3>
    </div>
  );
};

export default WorkshopItem;
