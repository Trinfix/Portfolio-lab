import React from "react";
import decoration from "../assets/Decoration.svg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";

const Contact = () => {

  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-empty-div"></div>
        <div className="contact-form">
          <h2 className="section-title">Skontaktuj się z nami</h2>
          <img src={decoration} alt="decoration" width="47%" height="auto"></img>
          <form>
            <div className="personal-data-form">
              <label>Wpisz swoje imię <br />
                <input type="name" placeholder="Krzysztof"></input>
              </label>
              <label>Wpisz swój email <br />
                <input type="email" placeholder="abc@xyz.pl"></input>
              </label>
            </div>
            <div className="message-form">
              <label>Wpisz swoją wiadomość<br />
                <textarea type="name" cols="70" rows="4" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
              </label>
            </div>
          </form>
          <button>Wyślij</button>
        </div>
      </section>
      <footer>
        <small>Copyright by Coders Lab</small>
        <div className="footer-icons">
          <img src={facebook} alt="facebook-icon"></img>
          <img src={instagram} alt="instagram-icon"></img>
        </div>
      </footer>
    </>
  )
}

export default Contact;