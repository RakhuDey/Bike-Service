import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#a28089", color: "white" }}>
      <div className="row text-center">
        <div className="col-md-4 mt-3">
          <h3>
            <u>Work</u>
          </h3>
          <li>
            Engine halting at the middle of the road or not starting at all.
          </li>
          <li>Not getting a good throttle response.</li>
          <li>Braking Problems.</li>
          <li>Electrical problems.</li>
          <li>Strong vibrations or jerking at top speed.</li>
          <li>High fuel consumption.</li>
        </div>
        <div className="col-md-4 mt-3 mb-5">
          <h3>
            <u>Specialists</u>
          </h3>
          <p>
            Motorbike mechanics service and repair the small engines in
            motorbikes and other types of related vehicles. In addition to
            motorbikes, these mechanics may also work on snowmobiles, jet skis,
            and riding mowers. Specific duties may include performing routine
            maintenance, repairing or replacing defective parts, and
            reassembling engine components.
          </p>
        </div>
        <div className="col-md-4 mt-3">
          <h3>
            <u> Support</u>
          </h3>
          <p>
            Top Schools for Motorcycle Repair <br /> Top Schools Mechanic and
            Repair Technologies <br /> How to Become a Bike Mechanic <br />{" "}
            School, Training & Qualifications Career Info for a Motorcycle
            Repair & Maintenance Certification
          </p>
        </div>
      </div>
      <div className="text-center">
        <ul className="social-media list-inline">
          <li className="list-inline-item">
            <a href="//facebook.com">
              <FontAwesomeIcon
                className="icon active-icon"
                icon={faFacebookF}
              />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="//google.com">
              <FontAwesomeIcon className="icon" icon={faGooglePlusG} />
            </a>
          </li>
          <li className="list-inline-item">
            <a href="//instagram.com">
              <FontAwesomeIcon className="icon" icon={faInstagram} />
            </a>
          </li>
        </ul>
        <div className="copyRight text-center">
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
