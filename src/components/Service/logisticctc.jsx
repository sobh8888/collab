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
function Logisticctc() {
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
      heading: "Logistics Services in Cuttack",
      paragraph:
        "In the bustling city of Cuttack, where every moment counts, the efficient movement of goods and materials plays a crucial role in the smooth functioning of businesses and households alike. Whether you're a local business owner looking for reliable logistics solutions or a resident planning a household move within Cuttack, ezTruck is here to simplify your local logistics needs. With our expert services and a commitment to excellence, we ensure that your cargo arrives safely and on time, every time.",
    },
    {
      heading: "The Challenges of Local Logistics",
      paragraph:
        "Local logistics can often be more challenging than long-distance transportation due to the need for precision and promptness. Cuttack, as one of the economic hubs of Odisha, witnesses a constant flow of goods, making efficient local logistics essential. Here are some common challenges that businesses and individuals face when dealing with local logistics in Cuttack.",
    },
    {
      heading: "Timely Deliveries",
      paragraph:
        "In the fast-paced business environment of Cuttack, delivering goods on time is crucial. Late deliveries can lead to disruptions in supply chains and affect customer satisfaction.",
    },
    {
        heading: "Traffic Congestion",
        paragraph:
          "Cuttack's bustling streets can be a logistical nightmare during peak hours. Navigating through heavy traffic requires local expertise.",
      },
      {
        heading: "Safety of Goods",
        paragraph:
          "Ensuring the safety of goods during transit is paramount. Proper packaging and handling are essential to prevent damage or loss.",
      },
      {
        heading: "Cost-Effective Solutions",
        paragraph:
          "Local logistics should be cost-effective to help businesses maintain profitability.",
      },
      {
        heading: "ezTruck's Local Logistics Solutions",
        paragraph:
          "At ezTruck, we understand the unique challenges of local logistics in Cuttack, and we've tailored our services to address them effectively.",
      },
      {
        heading: "Prompt Deliveries",
        paragraph:
          "Our team is well-versed with Cuttack's streets, ensuring timely and efficient deliveries. We prioritize punctuality to keep your business running smoothly.",
      },
      {
        heading: "Expert Navigation",
        paragraph:
          "Navigating through Cuttack's traffic is an art, and our experienced drivers are masters at it. We choose the quickest and safest routes to ensure your cargo reaches its destination without delays.",
      },
      {
        heading: "Secure Handling",
        paragraph:
          "We take the safety of your goods seriously. Our trained professionals use premium packaging materials and follow industry-best practices to protect your cargo from any potential harm during transit.",
      },
      {
        heading: "Affordable Rates",
        paragraph:
          "We offer competitive pricing for our local logistics services in Cuttack, making it cost-effective for both businesses and individuals.",
      },
      {
        heading: "Local Logistics Services Offered by ezTruck: Our",
        paragraph:
          "",
      },
      {
        heading: "local logistics services cover a wide range of needs:",
        paragraph:
          "",
      },
      {
        heading: "Business Deliveries",
        paragraph:
          "We assist businesses in Cuttack with their delivery needs, from distributing products to replenishing inventory. Our reliable service ensures that your customers receive their orders promptly.",
      },
      {
        heading: "Household Moves",
        paragraph:
          "Planning a local move within Cuttack? We provide hassle-free household relocation services, making the transition to your new home seamless.",
      },
      {
        heading: "Bulk Item Transportation",
        paragraph:
          "Whether you need to move large equipment, furniture, or appliances, our team is equipped to handle bulk item transportation efficiently.",
      },
      {
        heading: "Customized Solutions",
        paragraph:
          "We understand that every logistics need is unique. Our team works closely with you to create tailored solutions that meet your specific requirements.",
      },
      {
        heading: "Conclusion",
        paragraph:
          "When it comes to local logistics in Cuttack, ezTruck is your trusted partner. We are committed to simplifying your logistics challenges with prompt deliveries, expert navigation, secure handling, and cost-effective solutions. Whether you're a business owner or an individual, we're here to ensure your local logistics needs are met with excellence. Choose ezTruck, and experience the difference in local logistics services. Contact us today to streamline your local logistics in Cuttack!",
      },
  ];
  return (
    <>
      <div className="logisticctc-background">
        <h1 className="service-heading">Logistics Services in Cuttack</h1>
      </div>
      <div className="service-content-section">
        <div className="service-content-left">
          <img src={Logisticctcimg} alt="Logistics" className="service-content-image" />
          {logisticsContent.map((item, index) => (
            <div key={index}>
              <h2 className="service-content-heading">{item.heading}</h2>
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
export default  Logisticctc;









