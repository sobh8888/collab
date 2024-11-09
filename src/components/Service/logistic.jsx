import React from "react";
import "./service.css";
import Loglocal from "./images/local-logistics-1.jpg";
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
function Logistic() {
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
      heading: "Local Logistics",
      subheading: "ezTruck offers customizable local relocation services",
      paragraph:
        "House shifting or relocating your office even a few blocks away is a tedious task. We are well aware of the problems associated with it. House and office relocation involves shifting of an entire system in an order to a new place. All items including household goods, computers, and furniture. So, if you are contemplating to shift locally, let ezTruck take your headache and the complete hand over of relocating your house or office. We at ezTruck provide efficient and seamless home and office relocation services through our pan India network of certified truckers – whether it is within your city or relocating to a new city.",
    },
    {
      heading: "",
      paragraph:
        "ezTruck offers families and individuals with prompt and economical services to take off all the burden of moving involved in residential as well as office relocation. Whether the move is local or long distance, we acquire all the expertise to handle simple to most demanding relocation moves.",
    },
    {
      heading: "",
      paragraph:
        "Household relocation services comprise of an entire package of services, right from the initial consultancy to the final settling in at the new destination. Premium quality packaging materials like wrapping papers, cartons, wooden boxes etc. are used to maintain the safety of the goods. All the packing processes is done under the guidance and supervision of packaging experts, who work tirelessly making sure that the goods are perfectly packed and don't get damaged during transportation. A host of allied services are also provided, as negotiated at the beginning of the contract with the service provider.",
    },
    {
        heading: "",
        paragraph:
          "Often clients feel that except for a few articles, they can pack everything on their own. We at ezTruck also offer the facility of partial packing. But the conditions must be clearly agreed upon beforehand. The clients are given the option to choose between door-to-door or door-to-terminal services. The added advantage in door-to-door move is that the shipment is unloaded and custom formalities are cleared, before being delivered to the residence.",
      },
      {
        heading: "",
        paragraph:
          "Our customizable domestic relocation services offer you hassle-free and effortless moving solution. With our trained crew we offer unparalleled domestic relocation services which help you to manage your priorities and suits to your timeline. According to traveling distance, size and volume your goods we to customize a relocation program that is flexible, cost-effective, and able to make managing your mobile workforce easier.",
      },
      {
        heading: "",
        paragraph:
          "ezTruck domestic relocation services include door-to-door solutions, bulk item transportation, personalized loading and unloading services, transportation of vehicles, packing and rearranging of goods to the destination. For the long move, expert as well experienced packers and movers is a must. To ensure successful move our trained and licensed staff visit the site and make a plan to reach the destination safely and smoothly.",
      },
      {
        heading: "",
        paragraph:
          "Pre-location survey is most important to plan a perfect relocation. ezTruck carries out every step under keen supervision of expert packers-movers. The plan executes as per define schedule to meet the client timeline. We use a supreme quality material to keep your goods safe and secure. The insurance coverage takes care of any post damages if happened and will give you complete compensation. We have a wide range of transport vehicles, cargos with high loading capacity and all safety measures. Our logistic facilities are well equipped. Client satisfaction is our utmost priority and ezTruck always endure to avail you the best services.",
      },
      
  ];
  return (
    <>
      <div className="logistic-background">
        <h1 className="service-heading">Local Logistics</h1>
      </div>
      <div className="service-content-section">
        <div className="service-content-left">
          <img src={Loglocal} alt="Logistics" className="service-content-image" />
          {logisticsContent.map((item, index) => (
            <div key={index}>
              <h2 className="service-content-heading">{item.heading}</h2>
              <h3 className="service-content-heading-sub">{item.subheading}</h3>
              <p className="service-content-paragraph">{item.paragraph}</p>
              
            </div>
            
          ))}
           <p className="local-link"><span>Click here</span> to get a quote for our customizable local relocation services.</p>
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
export default Logistic;









