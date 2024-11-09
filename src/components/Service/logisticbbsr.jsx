import React from "react";
import "./service.css";
import Logistic from "./images/logistics-services-in-bhubaneswar (1).jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import {
  faTruck,
  faHome,
  faBoxes,
  faBuilding,
  faShoppingCart,
  faBriefcase,
  faCouch,
  faHardHat,
} from "@fortawesome/free-solid-svg-icons";
function Logisticbbsr() {
  // Array of button names and corresponding icons
  const services = [
    { name: "Local Logistics", icon: faTruck },
    { name: "House Shifting", icon: faHome },
    { name: "Packers & Movers", icon: faBoxes },
    { name: "Construction Material", icon: faBuilding },
    { name: "Mining Logistics", icon: faHardHat },
    { name: "Ecommerce Logistics", icon: faShoppingCart },
    { name: "Business Logistics", icon: faBriefcase },
    { name: "Furniture Logistics", icon: faCouch },
    // Removed "Mining Logistics" since the icon is unavailable
  ];
  const logisticsContent = [
    {
      heading: "Logistics Services in Bhubaneswar",
      paragraph:
        "In the bustling city of Bhubaneswar, where the wheels of commerce and daily life are constantly in motion, efficient local logistics are essential for individuals and businesses alike. Whether you're planning a residential move, need goods transported across town, or require reliable office relocation services, ezTruck is here to simplify your local logistics needs in Bhubaneswar.",
    },
    {
      heading: "Logistics Services in Bhubaneswar",
      paragraph:
        "In the bustling city of Bhubaneswar, where the wheels of commerce and daily life are constantly in motion, efficient local logistics are essential for individuals and businesses alike. Whether you're planning a residential move, need goods transported across town, or require reliable office relocation services, ezTruck is here to simplify your local logistics needs in Bhubaneswar.",
    },
    {
      heading: "Logistics Services in Bhubaneswar",
      paragraph:
        "In the bustling city of Bhubaneswar, where the wheels of commerce and daily life are constantly in motion, efficient local logistics are essential for individuals and businesses alike. Whether you're planning a residential move, need goods transported across town, or require reliable office relocation services, ezTruck is here to simplify your local logistics needs in Bhubaneswar.",
    },
    {
        heading: "Logistics Services in Bhubaneswar",
        paragraph:
          "In the bustling city of Bhubaneswar, where the wheels of commerce and daily life are constantly in motion, efficient local logistics are essential for individuals and businesses alike. Whether you're planning a residential move, need goods transported across town, or require reliable office relocation services, ezTruck is here to simplify your local logistics needs in Bhubaneswar.",
      },
  ];
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
      <div className="service-background">
        <h1 className="service-heading">Logistics Services in Bhubaneswar</h1>
      </div>
      <div className="service-content-section">
        <div className="service-content-left">
          <img src={Logistic} alt="Logistics" className="service-content-image" />
          {logisticsContent.map((item, index) => (
            <div key={index}>
              <h2 className="service-content-heading">{item.heading}</h2>
              <p className="service-content-paragraph">{item.paragraph}</p>
            </div>
          ))}
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
            <h3 className="service-form-heading">Get a Quote</h3>
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
        </div>
        <div className="service-rightside-cont">
          <div className="service-content-right">
            <h2 className="service-button-heading">Services We Offer</h2>
            {services.map((service, index) => (
              <button key={index} className="service-content-button">
                <FontAwesomeIcon
                  icon={service.icon}
                  style={{ marginRight: "12px", marginLeft: "20px" }}
                />
                {service.name}
              </button>
            ))}
          </div>
          <div className="service-help-box">
            <h3 className="service-help-heading">How We Can Help You?</h3>
            <p className="service-help-paragraph">
              Need assistance? We’re happy to help, reach us out through the
              appropriate channels below.
            </p>
            <div
              className="service-contact-info"
              style={{ display: "flex", alignItems: "center" }}
            >
              <FontAwesomeIcon
                icon={faPhoneVolume}
                aria-hidden="true"
                className="service-futuristic-icon" // Add the new class here
                style={{ marginRight: "8px", fontSize: "30px" }} // margin for spacing
              />
              <div>
                <h4
                  className="service-contact-heading"
                  style={{ display: "inline", margin: 0 }}
                >
                  Contact <br />
                </h4>
                <p
                  className="service-contact-number"
                  style={{ display: "inline", marginLeft: "8px" }}
                >
                  1800-208-3311
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default  Logisticbbsr;









