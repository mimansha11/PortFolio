import React from "react";
import "./Project.css";
import IMG1 from "../../assests/IMG1.png";
import IMG2 from "../../assests/IMG2.png";
import IMG3 from "../../assests/IMG3.png";
import IMG4 from "../../assests/IMG4.png";
//import IMG5 from "../../assests/IMG5.png";
const Project = () => {
  return (
    <section id="Project">
      <center>
        <h4>My Recent Work</h4>
      </center>
      <h2>Project</h2>
      <div className="container project__container">
        <article className="project__item">
          <div className="project__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Streamlit ChatBot</h3>
          <div className="project-item-cta">
            <a
              href="https://github.com/mimansha11/StreamLit_ChatBot"
              className="btn"
              target="__blank"
            >
              Github
            </a>
            <a
              href="https://appchatbot-nzgboxxh3wrmmmqdsx8vmi.streamlit.app/"
              className="btn btn-primary"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>
           A recipie Exploration website-TasteBud made in Reactjs 
          </h3>
          <div className="project__item-cta">
            <a
              href="https://github.com/mimansha11/FoodWeb_AI"
              className="btn"
              target="__blank"
            >
              Github
            </a>
            <a
              href="https://food-web-ai.vercel.app/"
              className="btn btn-primary"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="project__item">
          <div className="project__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>
            A Real time Movie Reccomendations Web Application
          </h3>
          <div className="project__item-cta">
            <a
              href="https://github.com/mimansha11/MovieReccomendation"
              className="btn"
              target="__blank"
            >
              Github
            </a>
            <a
              href="https://movie-reccomendation-ruddy.vercel.app/"
              className="btn btn-primary"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>


        <article className="project__item">
          <div className="project__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>
            A Restaurent Website made in html,css,javascript
          </h3>
          <div className="project__item-cta">
            <a
              href="https://github.com/mimansha11/Restaurent_web"
              className="btn"
              target="__blank"
            >
              Github
            </a>
            <a
              href="https://mimansha11.github.io/Restaurent_web/"
              className="btn btn-primary"
              target="__blank"
            >
              Live Demo
            </a>
          </div>
        </article>


      </div>
    </section>
  );
};

export default Project;