import React from "react";
import "./footer.css";
import logo from "../../images/logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div>
      <div className="footerC d-flex ">
        <div className="col-lg-6 mt-4">
          <img
            src={logo}
            alt="Logo"
            width="380px"
            style={{ marginBottom: "8%" }}
          />
          <div className="d-flex">
            <FontAwesomeIcon icon={faEnvelope} color="#462158" size="2x" />
            <div className="fdiv"> INFO@NOVACEPT.IO</div>
          </div>

          <div className="d-flex mt-4">
            <FontAwesomeIcon icon={faPhone} color="#462158" size="2x" />
            <div className="fdiv"> +447508443606</div>
          </div>

          <div className="d-flex mt-4">
            <FontAwesomeIcon icon={faLocationDot} color="#462158" size="2x" />
            <div className="fdiv mb-4">
              {" "}
              First Central 200, Lakeside Drive, Park Royal, London NW107FQ
            </div>
          </div>

          <div className="text-center">
            <i className="fa fa-linkedin-square icon"></i>
            <i className="fa fa-facebook-square icon"></i>
            <i className="fa fa-youtube-play icon"></i>
          </div>
        </div>
        <div className="col-lg-3">
          <h5 className="footerService">PRODUCTS</h5>
          <div className="fServicediv mt-4">NovaGenie</div>
          <br />
          <div className="fServicediv">Change Facilitator</div>
          <br />
          <div className="fServicediv">Personal Facilitator</div>
          <br />
          <div className="fServicediv">Project Z</div>
          <br />
          <div className="fServicediv">Talent 360</div>
        </div>
        <div className="col-lg-4">
          <h6 className="footerService">SERVICE</h6>
          <div className="fServicediv mt-4">Enterprise Agility</div>
          <br />
          <div className="fServicediv">Workforce Enablement</div>
          <br />
          <div className="fServicediv">Disruptive Innovation</div>
          <br />
          <div className="fServicediv">Actionable Analytics</div>
          <br />
        </div>
      </div>
      <div className="d-flex justify-content-between copyWrite">
        <span> &copy; NOVACEPT 2022</span>
        <span>Website Built by Synaesthesia</span>
      </div>
    </div>
  );
}
export default Footer;
