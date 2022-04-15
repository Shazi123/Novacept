import React from "react";
import "./aboveFooter.css";
import ceoImg from "../../images/ceo.webp";

function AboveFooter() {
  return (
    <div className="aboveFooterDiv">
      <div className="text-center texth2">
        <span>Trusted by hundreds of companies across the world</span>
      </div>

      <div className="card">
        <div className="card-body d-block">
          <div className="content">
            <img src={ceoImg} alt="ceo" width="159px" height="159px" />
            <div className="ceoDiv">
              <div className="ceoName">Andy S</div>
              <span className="ceoSubDiv">CEO</span>
            </div>
          </div>

          <div className="ceoLine">
            My favorite part of Novacept is that they deployed the Facilitator
            App for both our employees and our contractors
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboveFooter;
