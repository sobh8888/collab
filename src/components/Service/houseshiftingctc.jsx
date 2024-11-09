import React from "react";
import "./service.css";
import Logisticctcimg from "./images/logistics-services-in-cuttack (1).jpg";
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
function Houseshiftingctc() {
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
      heading: "House Shifting Logistics Company in Cuttack",
      paragraph:
        "Relocating your house can be a daunting task, especially in a city like Cuttack, where navigating through narrow lanes and bustling streets can be challenging. That's where ezTruck comes to your rescue. We understand the intricacies of house shifting logistics in Cuttack and are here to simplify the process for you.",
    },
    {
      heading: "Why Choose ezTruck for House Shifting in Cuttack?",
      subheading: "Local Expertise",
      paragraph:
        "Cutack's unique geography demands local expertise in house shifting logistics. We know the city like the back of our hand, ensuring efficient navigation through its streets. Whether you're moving within the city or to a new location nearby, our knowledge of Cuttack's layout makes the process smoother.",
    },
    {
      subheading: "Comprehensive Services",
      paragraph:
        "At ezTruck, we offer a wide range of services tailored to your specific needs. From packing and loading to transportation and unloading, we handle every aspect of your house shifting logistics. Our team of experts ensures that your belongings are treated with the utmost care and arrive at your new destination in perfect condition.",
    },
    {
        subheading: "Premium Packaging Materials",
        paragraph:
          "The safety of your belongings is our top priority. We use premium quality packaging materials, including wrapping papers, cartons, and wooden boxes, to safeguard your goods during transit. Our experienced packing professionals meticulously wrap and secure your items, minimizing the risk of damage.",
      },
      {
        subheading: "Partial Packing Option",
        paragraph:
          "We understand that some clients prefer to handle certain items themselves. That's why we offer the flexibility of partial packing. You can choose which items you'd like us to pack, while you take care of the rest. This customizable approach ensures that your house shifting logistics align with your preferences.",
      },
      {
        subheading: "Door-to-Door Convenience",
        paragraph:
          "ezTruck provides two convenient options for delivery - door-to-door and door-to-terminal services. With door-to-door delivery, your shipment is unloaded, and custom formalities are cleared before it reaches your residence. This hassle-free approach saves you time and effort.",
      },
      {
        subheading: "Customizable Solutions",
        paragraph:
          "Every house shifting situation is unique. We customize our services to meet your specific requirements. Whether it's a local move or a long-distance one, we adapt to the distance, size, and volume of your belongings. Our flexible and cost-effective solutions make managing your move stress-free.",
      },
      {
        subheading: "Pre-Location Survey",
        paragraph:
          "A crucial step in ensuring a smooth relocation is a pre-location survey. Our expert packers and movers conduct a detailed survey to plan the perfect relocation strategy. We work according to a predefined schedule, ensuring that your timeline is met.",
      },
      {
        subheading: "Safety and Insurance",
        paragraph:
          "We prioritize the safety and security of your goods. In the unlikely event of damage during transit, our comprehensive insurance coverage provides complete compensation. Rest assured, your belongings are in safe hands with ezTruck.",
      },
      {
        subheading: "Well-Equipped Logistics",
        paragraph:
          "Our logistics facilities are well-equipped with a wide range of transport vehicles and high-capacity cargo options. We take all necessary safety measures to protect your belongings throughout the journey.",
      },
      {
        heading: "",
        paragraph:
          "When it comes to house shifting logistics in Cuttack, ezTruck is your trusted partner. We offer local expertise, comprehensive services, premium packaging materials, and customizable solutions to make your move hassle-free. With our pre-location surveys, insurance coverage, and well-equipped logistics, your satisfaction is our utmost priority. Choose ezTruck for a seamless and stress-free house shifting experience in Cuttack.",
      },
      
  ];
  return (
    <>
      <div className="logisticctc-background">
        <h1 className="service-heading">House Shifting Logistics in Cuttack</h1>
      </div>
      <div className="service-content-section">
        <div className="service-content-left">
          <img src={Logisticctcimg} alt="Logistics" className="service-content-image" />
          {logisticsContent.map((item, index) => (
            <div key={index}>
              <h2 className="service-content-heading">{item.heading}</h2>
              <h3 className="service-content-heading-sub">{item.subheading}</h3>
              <p className="service-content-paragraph">{item.paragraph}</p>
            </div>
          ))}
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
export default  Houseshiftingctc;









