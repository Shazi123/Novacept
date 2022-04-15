import React from "react";
import "./blogs.css";
import imgOne from "../../images/image-1.webp";
import imgTwo from "../../images/image-2.webp";
import imgThree from "../../images/image-3.webp";

function Blogs() {
  return (
    <div className="blogs">
      <h1 className="text-center blogHeading">Blog</h1>
      <div className="container-xxl cardContainer">
        <div className="card-group card-deck">
          <div className="card imgCard" style={{ borderRadius: "10px" }}>
            <img
              className="card-img-top Img"
              src={imgOne}
              alt="Card first Img"
            />
            <div className="card-body cardBody">
              <h5 className="card-title cardTitle">
                The Restless Traveller and how Conversational AI can help him.
              </h5>
              <p className="card-text ">
                <small className="cardMutedContent">June 30,2021</small>
              </p>
              <p className="card-text cardContent">
                The Restless Traveller and how Conversational AI can help him. A
                32 year old young
              </p>
            </div>
          </div>
          <div className="card imgCard" style={{ borderRadius: "10px" }}>
            <img
              className="card-img-top"
              src={imgTwo}
              alt="Card second Image"
              height="310px"
            />
            <div className="card-body cardBody">
              <h5 className="card-title cardTitle">
                5 Ways to spruce up your online travel business post Covid era.
              </h5>
              <p className="card-text">
                <small className="cardMutedContent">June 30,2021</small>
              </p>
              <p className="card-text cardContent">
                5 Ways to spruce up your online travel business post covid era.
                Travelling is one
              </p>
            </div>
          </div>
          <div className="card imgCard" style={{ borderRadius: "10px" }}>
            <img
              className="card-img-top"
              src={imgThree}
              alt="Card Third Image"
              height="310px"
            />
            <div className="card-body cardBody">
              <h5 className="card-title cardTitle">
                Conversational AI- The next leap towards effective communication
                and business accessibility.
              </h5>
              <p className="card-text ">
                <small className="cardMutedContent">June 30,2021</small>
              </p>
              <p className="card-text cardContent">
                Conversational AI- The next leap towards effective communication
                and business accessibility. Businesses have taken various
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blogs;
