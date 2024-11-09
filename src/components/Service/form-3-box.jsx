import React from "react";
import "./service.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faHome,
  faBoxes,
  
} from "@fortawesome/free-solid-svg-icons";
function App() {
    const boxContent = [
        {
          icon: faTruck,
          heading: "Fast Delivery",
          paragraph: "Quick and reliable delivery services to meet your needs.",
        },
        {
          icon: faHome,
          heading: "Safe Relocation",
          paragraph: "Professional moving services for your home and office.",
        },
        {
          icon: faBoxes,
          heading: "Efficient Packing",
          paragraph: "Secure and efficient packing solutions for your valuables.",
        },
      ];
  return (
    <>
    <div className="box-container">
            {boxContent.map((box, index) => (
              <div key={index} className="box">
                <FontAwesomeIcon icon={box.icon} className="box-icon" />
                <h3 className="box-heading">{box.heading}</h3>
                <p className="box-paragraph">{box.paragraph}</p>
              </div>
            ))}
          </div>
    <form className="service-form">
            <h3 className="service-form-heading">Contact Us</h3>
            <div className="service-form-row">
              <div className="service-form-group">
                <input
                  type="text"
                  id="service-name"
                  className="service-form-input"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="service-form-group">
                <input
                  type="email"
                  id="service-email"
                  className="service-form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="service-form-row">
              <div className="service-form-group">
                <input
                  type="tel"
                  id="service-number"
                  className="service-form-input"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="service-form-group">
                <input
                  type="text"
                  id="service-subject"
                  className="service-form-input"
                  placeholder="Enter subject"
                  required
                />
              </div>
            </div>
            <div className="service-form-group">
              <textarea
                id="service-message"
                className="service-form-input service-form-textarea"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="service-form-button">
              Get a Quote
            </button>
          </form>
    </>
)
}

export default App;