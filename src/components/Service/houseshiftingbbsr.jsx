import React from "react";
import "./service.css";
import Housebbsr from "./images/transportation-services.jpg";
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
function Houseshiftingbbsr() {
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
      heading: "E-commerce Logistics Company in Bhubaneswar",
      paragraph:
        "Relocating your house is undoubtedly a monumental task, filled with excitement for the new beginning but often overshadowed by the stress of logistics. If you're planning a house shift in Bhubaneswar, you're in luck. Let ezTruck, your trusted logistics partner, alleviate your worries and ensure a smooth transition to your new home. In this blog, we'll explore how ezTruck simplifies house shifting logistics in Bhubaneswar, making the process hassle-free and efficient.",
    },
    {
      heading: "The Challenge of House Shifting :",
      paragraph:
        "House shifting involves much more than just moving your belongings from one place to another. It requires meticulous planning, secure packing, safe transportation, and careful unpacking at the new destination. Handling this entire process on your own can be overwhelming and time-consuming. This is where ezTruck steps in to provide expert assistance.",
    },
    {
      heading: "Comprehensive Relocation Services:",
      paragraph:
        "ezTruck brings in-depth knowledge of the local landscape and logistics requirements in Bhubaneswar. This local expertise is invaluable when it comes to navigating the city's traffic, optimizing routes, and ensuring timely deliveries.",
    },
    {
        heading: "",
        subheading: "Efficient Last-Mile Delivery:",
        paragraph:
          "At ezTruck, we offer comprehensive relocation services tailored to meet your specific needs. Whether you're moving locally within Bhubaneswar or planning a long-distance shift, we have the expertise to handle all types of relocation moves.",
         
      },
      {
        heading: "",
        paragraph:
        "Professional Packing: Our experienced team uses premium quality packaging materials like wrapping papers, cartons, and wooden boxes to ensure the safety of your belongings. Every packing process is carried out under the supervision of packaging experts to prevent any damage during transportation.",
      },
      {
        heading: "",
        paragraph:
        "Partial Packing Option: If you prefer to pack some items yourself, we offer the flexibility of partial packing. We can discuss the terms and conditions beforehand to customize the service according to your requirements.",
      },
      {
        heading: "",
        paragraph:
        "Transportation Choices: You can choose between door-to-door or door-to-terminal services. The door-to-door option provides the convenience of unloading and clearing customs before delivering your belongings to your new residence.",
      },
      {
        heading: "",
        paragraph:
        "Domestic Relocation Expertise: Our domestic relocation services are designed to make your move effortless. We consider factors such as distance, size, and volume of your goods to customize a relocation program that is not only cost-effective but also aligns with your timeline.",
      },
      {
        heading: "",
        paragraph:
        "Specialized Services: Our services encompass bulk item transportation, personalized loading and unloading, vehicle transportation, and packing and rearranging of goods at the destination.",
      },
      {
        heading: "Planning and Execution:",
        paragraph:
        "To ensure a successful relocation, we begin with a pre-location survey, an essential step in planning a perfect move. This survey is conducted under the supervision of our expert packers and movers to develop a comprehensive plan that meets your timeline and expectations.",
      },
      {
        heading: "Safety and Security:",
        paragraph:
        "At ezTruck, the safety and security of your belongings are our top priorities. We use high-quality materials to safeguard your goods during transit. Additionally, we provide insurance coverage to protect against any post-move damages, giving you complete peace of mind.",
      },
      {
        heading: "State-of-the-Art Logistics:",
        paragraph:
        "Our logistics facilities are equipped with a wide range of transport vehicles and cargos with high loading capacity. We adhere to stringent safety measures, ensuring that your belongings are handled with care throughout the entire relocation process.",
      },
      {
        heading: "",
        paragraph:
        "When it comes to house shifting logistics in Bhubaneswar, ezTruck is your trusted partner. We understand the intricacies involved in relocating a house and offer a seamless, efficient, and cost-effective solution to make your move stress-free. Client satisfaction remains at the forefront of our mission, and we strive to provide you with the best services in Bhubaneswar. Choose ezTruck for your next house shift, and experience the ease of relocation like never before.",
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
      <div className="housebbsr-background">
        <h1 className="service-heading">House Shifting Logistics in Bhubaneswar</h1>
      </div>
      <div className="service-content-section">
        <div className="service-content-left">
          <img src={Housebbsr} alt="Logistics" className="service-content-image" />
          {logisticsContent.map((item, index) => (
            <div key={index}>
              <h2 className="service-content-heading">{item.heading}</h2>
              <h3 className="service-content-heading-sub">{item.subheading}</h3>
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
export default  Houseshiftingbbsr;









