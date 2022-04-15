import React from "react";
import "./products.css";
import productImg from "../../images/product-image.webp";
import changeF from "../../images/change.webp";
import personalF from "../../images/personal.webp";
import projectZ from "../../images/Project.webp";
import talent from "../../images/talent.webp";

function Products() {
  return (
    <div>
      <div className="text-center heading">
        <h1>Our Products </h1>
      </div>
      <div className="cardP">
        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-links active"
              id="pills-NovaGeine-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-NovaGeine"
              type="button"
              role="tab"
              aria-controls="pills-NovaGeine"
              aria-selected="true"
            >
              NovaGenie
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-links"
              id="pills-changefacilitator-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-changefacilitator"
              type="button"
              role="tab"
              aria-controls="pills-changefacilitator"
              aria-selected="false"
            >
              Change Facilitator
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-links"
              id="pills-personalfacilitator-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-personalfacilitator"
              type="button"
              role="tab"
              aria-controls="pills-personalfacilitator"
              aria-selected="false"
            >
              Personal Facilitator
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-links"
              id="pills-projectz-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-projectz"
              type="button"
              role="tab"
              aria-controls="pills-projectz"
              aria-selected="false"
            >
              Project Z
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-links"
              id="pills-talent-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-talent"
              type="button"
              role="tab"
              aria-controls="pills-talent"
              aria-selected="false"
            >
              Talent 360
            </button>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-NovaGeine"
            role="tabpanel"
            aria-labelledby="pills-NovaGeine-tab"
          >
            <div className="container tabContainer">
              <div className="conInside d-flex">
                <div className="firstColumn w-50">
                  <h1 className="headingFC">NovaGeine</h1>
                  <p>
                    Do you know that on any workday, your employees spend more
                    than 40% of their time doing repetitive or mundane works
                    which doesn’t add value to the business or enrich their work
                    experience? Well not anymore, offload your repetitive and
                    mundane tasks to an AI virtual assistant and it will be done
                    without manual intervention.
                  </p>

                  <div className="d-flex mt-4">
                    <button className="readmoreB">Read More</button>
                    <button className="useCases">Use Cases</button>
                  </div>
                </div>
                <img
                  src={productImg}
                  alt="productImage"
                  width="50%"
                  style={{ padding: "10px" }}
                />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-changefacilitator"
            role="tabpanel"
            aria-labelledby="pills-changefacilitator-tab"
          >
            <div className="container tabContainer">
              <div className="conInside d-flex">
                <div className="firstColumn w-50">
                  <h1 className="headingFC">Change Facilitator</h1>
                  <p>
                    Help your organisation adapt to changes in a more organic
                    way, through the use of our digital change assistant. Adopt
                    a our digital assistant to experience and help with your
                    digital transformation.
                  </p>

                  <div className="d-flex mt-4">
                    <button className="readmoreB">Read More</button>
                    <button className="useCases">Contact us</button>
                  </div>
                </div>
                <img
                  src={changeF}
                  alt="productImage"
                  width="50%"
                  style={{ padding: "10px" }}
                />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-personalfacilitator"
            role="tabpanel"
            aria-labelledby="pills-personalfacilitator-tab"
          >
            <div className="container tabContainer">
              <div className="conInside d-flex">
                <div className="firstColumn w-50">
                  <h1 className="headingFC">Personal Facilitator</h1>
                  <p>
                    There was a time when senior and mid-level management had
                    personal assistants who managed the admin and mundane tasks
                    thus allowing them to focus on critical and important
                    decision making. Employees spend a lot of their time in
                    admin and mundane tasks which takes away from them, the time
                    that could be spent in front of the client or more
                    productively. The personal facilitator allows companies to
                    increase the time available to their employees to focus more
                    on revenue generating tasks!
                  </p>

                  <div className="d-flex mt-4">
                    <button className="readmoreB">Read More</button>
                    <button className="useCases">Use Cases</button>
                  </div>
                </div>
                <img
                  src={personalF}
                  alt="personalImage"
                  width="50%"
                  style={{ padding: "10px" }}
                />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-projectz"
            role="tabpanel"
            aria-labelledby="pills-projectz-tab"
          >
            <div className="container tabContainer">
              <div className="conInside d-flex">
                <div className="firstColumn w-50">
                  <h1 className="headingFC">Project Z</h1>
                  <p>
                    {" "}
                    Capital projects mean more paper than concrete, more
                    crossing of fingers than collection of data, and more
                    agonizing change orders than creative engineering design,
                    forward looking plans, managing/ mitigating risks and
                    issues.
                  </p>

                  <div className="d-flex mt-4">
                    <button className="readmoreB">Read More</button>
                    <button className="useCases">Contact Us</button>
                  </div>
                </div>
                <img
                  src={projectZ}
                  alt="projectImage"
                  width="50%"
                  style={{ padding: "10px" }}
                />
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-talent"
            role="tabpanel"
            aria-labelledby="pills-talent-tab"
          >
            <div className="container tabContainer">
              <div className="conInside d-flex">
                <div className="firstColumn w-50">
                  <h1 className="headingFC">Talent 360</h1>
                  <p>
                    Our unique end to end resource management tool offers a
                    “cradle to grave” approach to resourcing, sourcing and
                    managing the talent you need to select and arrange
                    interviews, onboarding, managing invoices and payments for
                    your contractors to final offboarding when required. All
                    through one system!
                  </p>

                  <div className="d-flex mt-4">
                    <button className="readmoreB">Read More</button>
                    <button className="useCases">Contact Us</button>
                  </div>
                </div>
                <img
                  src={talent}
                  alt="TalentImage"
                  width="50%"
                  style={{ padding: "10px" }}
                />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default Products;
