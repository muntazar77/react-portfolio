import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <>
      <div className="title-section">
        <h1 className="title">My Projects</h1>
        <p className="sub-title">
          Here are some of the projects I have worked on. Click on the buttons
          to filter the projects by category.
        </p>
      </div>

      <main className="flex" id="projects">
        <section className="flex  left-section">
          <button
            onClick={() => {
              setcurrentActive("all");
              setArr(myProjects);
            }}
            className={currentActive === "all" ? "active" : null}
          >
            all projects
          </button>

          <button
            onClick={() => {
              handleClick("css");
            }}
            className={currentActive === "css" ? "active" : null}
          >
            HTML & CSS
          </button>

          <button
            onClick={() => {
              handleClick("js");
            }}
            className={currentActive === "js" ? "active" : null}
          >
            JavaScript
          </button>
          <button
            onClick={() => {
              handleClick("react");
            }}
            className={currentActive === "react" ? "active" : null}
          >
            React & MUI
          </button>
          <button
            onClick={() => {
              handleClick("php");
            }}
            className={currentActive === "php" ? "active" : null}
          >
           Php & Laravel
          </button>
        </section>

        <section className=" flex right-section">
          <AnimatePresence>
            {arr.map((item) => {
              return (
                <motion.article
                  layout
                  initial={{ transform: "scale(0.4)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ type: "spring", damping: 8, stiffness: 50 }}
                  key={item.imgPath}
                  className="  card"
                >
                  <a href={`${item.liveUrl}`} target="_blank" rel="noopener noreferrer">
                    <img width={266} src={item.imgPath} alt="" />
                    </a>
                  <div style={{ width: "266px" }} className="box">
                    <h3 className="title">{item.projectTitle}</h3>
                    <p className="sub-title">
                      Lorem ipsum dolor sit amet consectetur elit adipisicing .
                      Ex tempore dolor in, accusantium laudantium accusamus.
                    </p>
                
                    <div className="flex icons">
                      <div style={{ gap: "11px" }} className="flex">
                       <a href={ `${item.githubUrl}`} target="_blank" rel="noopener noreferrer"><div className="icon-github"></div> </a>
                       <a href={ `${item.liveUrl}`} target="_blank" rel="noopener noreferrer">  <div className="icon-link"></div> </a>
                        
                      
                      </div>

                      <a className="link flex" href={`${item.githubUrl}`} target="_blank" rel="noopener noreferrer">
                        more
                        <span
                          style={{ alignSelf: "end" }}
                          className="icon-arrow-right"
                        ></span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </section>
      </main>
    </>
  );
};

export default Main;
