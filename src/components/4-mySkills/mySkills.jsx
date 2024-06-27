import "./mySkills.css";

const Myskills = () => {

  const skills = [
    "Html",
    "Css",
    "Javascript",
    "React",
    "Redux",
    "adobe xd",
    "Jquery",
    "Dataset",
    "laraval",
    "php",
    "mysql",
    "bootstrap",
    "Redux toolkit",
    "veu.js",
    "mongodb",
    "Linux",
    "firebase",
    "git",
    "github",
    "heroku",
    "netlify",
    "vercel",
    "figma",
  
  ];
  const languages = [
    "English(Fluent)",
    "Arabic(Native)",
    "German",
    "Turkish(A1)",
  ];
  return (
    <>
      <section className="mySkills" id="mySkills">
        <div className="title-section">
          <h1 className="title">My skills</h1>
        </div>

    
    <ul className="skills">
   
  {skills.map((item, index) => (
    <li key={index} >
      <div className="skill">
        <h3>{item}</h3>
      </div>
    </li>

  ))}


</ul>
      </section>
        {/* My language */}
      <section className="mySkills" id="mySkills">
        <div className="title-section">
          <h1 className="title">My Languages</h1>
        </div>

    
    <ul className="skills">
   
  {languages.map((item, index) => (
    <li key={index} >
      <div className="skill">
        <h3>{item}</h3>
      </div>
    </li>

  ))}


</ul>
      </section>
     
    </>
  );
};

export default Myskills;
