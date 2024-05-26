import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex" id="about">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./me2.jpg"
            className="avatar"
            alt=""
          />
                <div className="icon-verified"></div>
              </div>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="title"
              >
                Web Developer and content creator in social media.
              </motion.h1>

              <p className="sub-title">
                I&apos;m Muntadher Attar ,a Web Developer and content creator in social media, also I have a passion for tech.
                 I started as a student at Ostim-Tiknik, learning JavaScript, Nuxt.js, Vue.js, React.js, Php, Laravel, and more. I built many projects by myself and became a Fullstack developer. My favorite part of programming is the problem-solving aspect. I love the feeling of finally figuring out a solution to a problem.
                My journey has taught me to adapt and innovate in the fast-changing world of web development.
              </p>

              <div className="all-icons flex">
                <a className="icon icon-instagram" href="https://www.instagram.com/mp.code7/" target="_blank" rel="noreferrer"></a>
               <a className="icon icon-github" href="https://github.com/muntazar77" target="_blank" rel="noreferrer"></a>
              <a className="icon icon-linkedin" href="https://www.linkedin.com/in/muntadher-attar-b101661a5/" rel="noreferrer"  target="_blank"></a>
              </div>
              </div>

              <div className="right-section animation ">
              <Lottie
                lottieRef={lottieRef}
                className=""
                onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
