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
function Logisticbam() {
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
      heading: "Logistics Services in Berhampur",
      paragraph:
        "When it comes to local logistics in Berhampur, you need a reliable partner to handle the intricate task of transporting goods efficiently and seamlessly. Whether you are a business looking to streamline your supply chain or an individual planning a household move, the name you can trust is ezTruck. We understand the challenges associated with local logistics, and we're here to take the hassle out of it for you.",
    },
    {
      heading: "Why Choose ezTruck for Local Logistics in Berhampur?",
      paragraph:
        "At ezTruck, we pride ourselves on being a top-tier local logistics provider in Berhampur, and here's why you should choose us:",
    },
    {
      heading: "Efficiency in Every Move",
      paragraph:
        "We understand that time is of the essence in logistics. Whether you're moving goods for your business or shifting to a new home, our team ensures that every step of the process is carried out efficiently. Our local logistics services are designed to save you time and effort.",
    },
    {
        heading: "Local Expertise",
        paragraph:
          "With a deep understanding of the Berhampur area, we can navigate the local roads, traffic, and regulations with ease. This knowledge is invaluable in ensuring that your goods reach their destination promptly and without any hiccups.",
      },
      {
        heading: "Comprehensive Services",
        paragraph:
          "ezTruck offers a wide range of services to cater to diverse local logistics needs. Our services include household relocation, office relocation, bulk item transportation, vehicle transportation, and more. Whatever your logistics requirements, we have you covered.",
      },
      {
        heading: "Trained Professionals",
        paragraph:
          "Our team of experts is highly trained in handling logistics tasks. Whether it's packing your belongings securely, loading and unloading with care, or ensuring the safe transportation of your goods, our professionals have the experience and expertise to do it all.",
      },
      {
        heading: "Flexible Options",
        paragraph:
          "We understand that every logistics situation is unique. That's why we offer flexible options such as door-to-door and door-to-terminal services. You can tailor our services to meet your specific needs.",
      },
      {
        heading: "Quality Packaging",
        paragraph:
          "When it comes to the safety of your goods, we spare no expense. We use premium packaging materials like wrapping papers, cartons, and wooden boxes to ensure that your items are well-protected during transit.",
      },
      {
        heading: "Insurance Coverage",
        paragraph:
          "We go the extra mile to give you peace of mind. In the rare event of any post-transportation damages, our insurance coverage ensures that you receive complete compensation.",
      },
      {
        heading: "Client Satisfaction",
        paragraph:
          "At ezTruck, our utmost priority is client satisfaction. We are committed to providing the best local logistics services in Berhampur, and we continuously strive to exceed your expectations.",
      },
      {
        heading: "Transparent and Competitive Pricing",
        paragraph:
          "We believe in transparent pricing with no hidden fees. Our competitive rates make quality local logistics services accessible to businesses and individuals alike.",
      },
      {
        heading: "Pan India Network",
        paragraph:
          "While we specialize in local logistics in Berhampur, our pan India network of certified truckers allows us to assist you with moves to other cities as well. We provide the same level of efficiency and care wherever you go.",
      },
      {
        heading: "Conclusion",
        paragraph:
          "When you need local logistics services in Berhampur, ezTruck is your trusted partner. Our commitment to efficiency, reliability, and client satisfaction sets us apart in the industry. Whether you're planning a household move within the city or require comprehensive logistics support for your business, we have the expertise and resources to make it happen seamlessly. Contact us today, and let's make your local logistics needs a stress-free experience.",
      },
      
  ];
  return (
    <>
      <div className="logisticbam-background">
        <h1 className="service-heading">Logistics Services in Berhampur</h1>
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
export default  Logisticbam;









