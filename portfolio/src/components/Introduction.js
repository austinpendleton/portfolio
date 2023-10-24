import "../blocks/Introduction.css";
import intropic from "../images/intro-pic.png";

const Introduction = () => {
  return (
    <section className="introduction">
      <div className="hello__wrapper">
        <p className="hello__text">Hello, my name is</p>
      </div>
      <div className="name__wrapper">
        <h1 className="name__text">Austin Pendleton</h1>
      </div>
      <div className="introduction__picture">
        <img src={intropic} alt="Myself" className="introduction__image" />
      </div>
      <div className="title__wrapper">
        <h2 className="title__text">Web Developer</h2>
      </div>
    </section>
  );
};

export default Introduction;
