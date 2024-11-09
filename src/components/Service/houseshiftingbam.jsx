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
      heading: "E-commerce Logistics Company in Berhampur",
      paragraph:
        "Relocating your home in Berhampur can be a daunting task. The process involves meticulous planning, careful packing, and efficient transportation, all of which can be overwhelming for homeowners. However, with the right logistics partner, such as ezTruck, you can make your house shifting experience in Berhampur smooth and hassle-free.",
    },
    {
      heading: "Berhampur's House Shifting Challenges",
      paragraph:
        "Berhampur, a vibrant city in Odisha, has its unique challenges when it comes to house shifting. The city's diverse neighborhoods, traffic congestion, and narrow streets can pose significant challenges for anyone planning a move. Additionally, ensuring the safety of your belongings during transit and complying with local regulations can add to the complexities.",
    },
    {
      heading: "Why Choose ezTruck for House Shifting in Berhampur",
      paragraph:
        "At ezTruck, we understand the intricacies of house shifting logistics in Berhampur. Our commitment to making your relocation as seamless as possible has earned us a reputation as a reliable logistics partner in the region. Here's why you should choose ezTruck for your house shifting needs:",
    },
    {
        heading: "",
        subheading: "Local Expertise:",
        paragraph:
          "We have an in-depth understanding of Berhampur's neighborhoods, traffic patterns, and local regulations. This local knowledge enables us to plan your house shifting logistics efficiently.",
         
      },
      {
        subheading: "End-to-End Services:",
        paragraph:
        "We offer a comprehensive range of services, from packing and loading to transportation and unloading. Our team of experienced professionals handles every aspect of your move, ensuring that your belongings are safe and secure throughout the process.",
      },
      {
        subheading: "Customized Solutions:",
        paragraph:
        "Every house shifting project is unique. We tailor our services to meet your specific requirements. Whether you're moving within Berhampur or relocating to another city, we have the expertise to handle it all.",
      },
      {
        subheading: "Safety First:",
        paragraph:
        "We prioritize the safety of your belongings. Our team uses premium-quality packaging materials and follows meticulous packing techniques to prevent damage during transportation.",
      },
      {
        subheading: "Insurance Coverage:",
        paragraph:
        "In the rare event of any post-move damages, our insurance coverage ensures that you receive complete compensation for any losses incurred.",
      },
      {
        subheading: "Pre-Location Survey:",
        paragraph:
        "Before your move, we conduct a thorough pre-location survey to assess your needs and plan the perfect relocation strategy. This step allows us to provide you with an accurate quote and a timeline for your move.",
      },
      {
        heading: "Flexible Options:",
        paragraph:
        "Whether you prefer door-to-door or door-to-terminal services, ezTruck has you covered. We offer flexible options to suit your convenience.",
      },
      {
        subheading: "Experienced Team:",
        paragraph:
        "Our trained and licensed staff members are experts in their field. They visit your site, strategize the move, and execute it safely and smoothly.",
      },
      {
        heading: "The ezTruck Advantage",
        paragraph:
        "With ezTruck as your house shifting logistics partner in Berhampur, you can expect a hassle-free and organized move. Our commitment to excellence, attention to detail, and customer-centric approach set us apart from the rest. We understand that your belongings are valuable, both sentimentally and financially, and we treat them with the utmost care.",
      },
      {
        heading: "",
        paragraph:
        "When you choose ezTruck for your house shifting needs in Berhampur, you're choosing a partner dedicated to ensuring your peace of mind throughout the entire process. Our logistical expertise combined with our local knowledge makes us the go-to choice for homeowners in Berhampur looking to relocate without stress.",
      },
      {
        heading: "",
        paragraph:
        "In conclusion, house shifting logistics in Berhampur can be simplified with ezTruck. Our commitment to safety, customized solutions, and local expertise make us the ideal partner for your upcoming move. Say goodbye to the stress of relocation and let ezTruck handle the logistics while you focus on settling into your new home.",
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
      <div className="logisticbam-background">
        <h1 className="service-heading">House Shifting Logistics in Berhampur</h1>
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
          <div className="box-container">
            {boxContent.map((box, index) => (
              <div key={index} className="box">
                <FontAwesomeIcon icon={box.icon} className="box-icon" />
                <h3 className="box-heading">{box.heading}</h3>
                <p className="box-paragraph">{box.paragraph}</p>
              </div>
            ))}
          </div>
          
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









