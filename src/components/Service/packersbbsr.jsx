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
function Packersbbsr() {
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
      heading: "Packers and Movers Company in Bhubaneswar",
      paragraph:
        "Are you planning a move within or to the beautiful city of Bhubaneswar? Relocating your home or office, even if it's just a short distance away, can be a daunting and exhausting task. At ezTruck, we understand the challenges and complexities associated with moving, and we're here to make your transition smooth, stress-free, and efficient.",
    },
    {
      heading: "Why Choose ezTruck for Packers and Movers Services in Bhubaneswar?",
      paragraph:
        "Reliability, professionalism, and a commitment to customer satisfaction are at the core of our services at ezTruck. We take pride in being one of the leading packers and movers service providers in Bhubaneswar. Here's why you should consider us for your next move:",
    },
    {
      subheading: "Comprehensive Services:",
      paragraph:
        "We offer a wide range of services tailored to meet your specific needs. Whether you're relocating your household goods, office equipment, or even vehicles, we have you covered. Our services encompass everything from packing and loading to transportation and unpacking.",
    },
    {
        heading: "",
        subheading: "Quality Packing Materials:",
        paragraph:
          "We understand the importance of ensuring the safety of your belongings during a move. That's why we use premium-quality packaging materials, including wrapping papers, cartons, and wooden boxes, to protect your items from damage during transportation.",
         
      },
      {
        subheading: "Experienced Team:",
        paragraph:
        "Our dedicated team of packers and movers is highly experienced and trained to handle every aspect of your move. They work tirelessly to ensure that your goods are perfectly packed and remain secure throughout the journey.",
      },
      {
        subheading: "Flexibility:",
        paragraph:
        "At ezTruck, we understand that every move is unique. That's why we offer flexible options, allowing you to choose between door-to-door or door-to-terminal services. We can even customize your relocation plan based on factors like distance, size, and volume of your belongings.",
      },
      {
        subheading: "Pre-Location Survey:",
        paragraph:
        "To plan a perfect relocation, we conduct a pre-location survey, which allows us to assess your specific requirements and develop a tailored moving plan. This ensures that your move is executed according to your timeline and expectations.",
      },
      {
        subheading: "Insurance Coverage:",
        paragraph:
        "We prioritize the safety of your belongings, but unforeseen circumstances can happen. That's why we provide comprehensive insurance coverage to take care of any post-move damages and provide you with complete compensation.",
      },
      {
        heading: "",
        paragraph:
        "Wide Range of Vehicles: Our fleet of transport vehicles and cargo options with high loading capacity ensures that we can accommodate moves of all sizes. From small apartments to large offices, we have the right vehicle for your needs.",
      },
      {
        heading: "",
        paragraph:
        "Customer Satisfaction: At ezTruck, your satisfaction is our utmost priority. We are committed to providing you with the best possible moving experience, and our team works tirelessly to ensure your complete satisfaction.",
      },
      {
        heading: "",
        paragraph:
        "When you choose ezTruck for your packing and moving needs in Bhubaneswar, you're choosing a reliable partner dedicated to making your relocation process hassle-free. We take care of the heavy lifting so that you can focus on settling into your new home or office with ease.",
      },
      {
        heading: "",
        paragraph:
        "Relocating in or to Bhubaneswar? Let ezTruck take the stress out of your move with our comprehensive packers and movers services. Our local expertise, experienced team, quality materials, and commitment to customer satisfaction make us the ideal choice for all your relocation needs. Contact us today to experience a seamless and efficient move with ezTruck.",
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
        <h1 className="service-heading">Packers and Movers in Bhubaneswar</h1>
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
export default  Packersbbsr;









