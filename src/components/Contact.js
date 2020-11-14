import React, { useState, useEffect } from "react";
import decoration from "../assets/Decoration.svg";
import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("none")
  const [emailError, setEmailError] = useState("none")
  const [messageError, setMessageError] = useState("none")
  const handleClick = (e) => {
    e.preventDefault();
    const emailValidation = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (name === "" || [...name].includes(" ") || /\d/.test(name)) {
      setNameError("");
    } else setNameError("none");
    !emailValidation.test(email) ? setEmailError('') : setEmailError("none");
    message.length < 120 ? setMessageError("") : setMessageError("none");

    if (nameError && emailError && messageError === "none") {
      const API = "https://fer-api.coderslab.pl/v1/portfolio/contact";

      const data = {
        name: name,
        email: email,
        message: message
      };

      fetch(API, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });

        setName("");
        setEmail("");
        setMessage("");
    }
  };

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
                <input type="name" placeholder="Krzysztof" value={name} onChange={(e) => setName(e.target.value)}></input>
                <p className="form-alert" style={{ display: nameError }}>Podane imię jest nieprawidłowe!</p>
              </label>
              <label>Wpisz swój email <br />
                <input type="email" placeholder="abc@xyz.pl" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <p className="form-alert" style={{ display: emailError }}>Podany e-mail jest nieprawidłowy!</p>
              </label>
            </div>
            <div className="message-form">
              <label>Wpisz swoją wiadomość<br />
                <textarea type="name" cols="75" rows="5" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                <p className="form-alert" style={{ display: messageError }}>Wiadomość musi mieć conajmniej 120 znaków!</p>
              </label>
            </div>
          </form>
          <button onClick={(e) => handleClick(e)}>Wyślij</button>
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