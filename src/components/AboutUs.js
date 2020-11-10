import React from "react";
import decoration from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";

const AboutUs = () => {

  return (
    <section className="about-us" id="about-us">
      <div className="about-us-content">
        <h2 className="section-title">O nas</h2>
        <img src={decoration} alt="decoration" width="29%" height="auto"></img>
        <p>Nori grape silver beet broccoli kombu beet <br />
        greens fava bean potato quandong celery. <br />
        Bunya nuts black-eyed pea prairie turnip leek <br />
        lentil turnip greens parsnip.<br />
        <img src={signature} alt="signature" width="35%" height="auto"></img>
        </p>
      </div>
      <div className="about-us-picture"></div>
    </section>
  )
}

export default AboutUs;