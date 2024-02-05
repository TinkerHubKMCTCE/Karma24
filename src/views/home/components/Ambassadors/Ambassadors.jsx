import styles from "./Ambassadors.module.css";
import ambassador from "../../../../assets/ambassador.svg";


const AmbassadorsSection = () => {
    return (
      <div className="container mx-auto px-4">
        <div id={styles.ambassadors} className="flex justify-between pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 mr-8 mt-20 ml-8">
          <div className="w-3/4 z-10">
            <img className="transform scale-75 mx-auto" src={ambassador} alt="BOX" /> 
          </div>
          <div className="grid place-items-center ">
          <h1 id={styles.heading} className="text-5xl text-center font-bold bg-gradient-to-r from-[#A3FF36] to-[#C2FF7B] text-transparent bg-clip-text mb-4 leading-relaxed">Campus Ambassadors  Program</h1>
          <p className="text-justify mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Rerum a in quo maxime reiciendis ducimus at consequuntur 
            nesciunt eius suscipit provident sequi numquam qui sunt
            enim ratione atque dolorem aliquam nostrum error, adipisci
            commodi. Molestiae esse numquam repellendus error? Laboriosam 
            tempore atque earum, neque distinctio excepturi, quia corporis 
            a facilis fugiat fugit maxime veniam sapiente ex nisi vitae mollitia
            repellat perspiciatis expedita blanditiis. Exercitationem aut possimus, 
            animi soluta labore, maxime atque amet dolorum non nam enim, vero in voluptatibus
            harum quos assumenda iste repellendus cum libero! Molestias asperiores maiores 
            natus perferendis ipsum ratione voluptas in voluptatibus minus dignissimos. Magni, nisi!
          </p>
          <button className="bg-[#8EFF09] hover:bg-[#09D3FF] text-black font-bold text-lg py-2 px-10 tracking-wide rounded-xl place-items-center mt-8 ">
              Enroll Now
          </button>
          </div>
        </div>
      </div>
      </div>
    );
  };
  
  export default AmbassadorsSection;