import Slider from "react-slick";

import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SpotLight = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = [
    "https://media.istockphoto.com/id/971433328/vector/pink-blue-neon-animated-vj-background.jpg?s=612x612&w=0&k=20&c=Ul7JNYKyEaXm_S6FfNsNM3nk9CD_7OFUS83UXXp2hrE=",
    "https://edge.99images.com/photos/celebrities/neeraj-madhav/neeraj-madhav-best-hd-photos-download-1080p-whatsapp-dpstatus-images-drg5.jpg",
    "https://w0.peakpx.com/wallpaper/123/490/HD-wallpaper-djing-disco-lights-party-dj.jpg",
    "https://c0.wallpaperflare.com/preview/27/313/180/man-singing-on-stage.jpg",
    "https://w.forfun.com/fetch/f9/f9e722cfe7a41820a1cdc017c1771e9e.jpeg",
    "https://media.istockphoto.com/id/971433328/vector/pink-blue-neon-animated-vj-background.jpg?s=612x612&w=0&k=20&c=Ul7JNYKyEaXm_S6FfNsNM3nk9CD_7OFUS83UXXp2hrE=",
    "https://edge.99images.com/photos/celebrities/neeraj-madhav/neeraj-madhav-best-hd-photos-download-1080p-whatsapp-dpstatus-images-drg5.jpg",
    "https://w0.peakpx.com/wallpaper/123/490/HD-wallpaper-djing-disco-lights-party-dj.jpg",
    "https://c0.wallpaperflare.com/preview/27/313/180/man-singing-on-stage.jpg",
    "https://w.forfun.com/fetch/f9/f9e722cfe7a41820a1cdc017c1771e9e.jpeg",
  ];

  return (
    <section className="pt-20 font-inversionz text-8xl text-karma-green">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-center mb-8">SPOTLIGHT</h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="slider-container"
        >
          <Slider {...settings}>
            {items.map((item, index) => (
              <div
                key={index}
                className="-skew-x-6 overflow-hidden border-black border-8"
                style={{}}
              >
                <img
                  src={item}
                  alt="Spotlight"
                  className="h-80 object-cover skew-x--skew-x-6 scale-125 hover:scale-125 transition-transform duration-1000 ease-in-out"
                />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default SpotLight;