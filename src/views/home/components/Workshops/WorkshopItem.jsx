import "./Workshops.css";

const WorkshopItem = ({ title, image }) => {
  return (
    <div
      className="p-8 rounded-3xl mx-auto workshop-item max-w-xs"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h3 className="text-karma-blue font-bold font-retroTeam text-3xl sm:text-4xl">{title}</h3>
    </div>
  );
};

export default WorkshopItem;
