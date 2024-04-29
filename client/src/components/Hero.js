import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Hero = () => {
  return (
    <div
      className="d-sm-flex align-items-center justify-content-between w-100"
      style={{ height: "25vh" }}
    >
      <div className="col-md-4 mx-auto mb-4 mb-sm-0 headline">
        <span className="text-secondary text-uppercase fw-bold">welcome</span>
        <h1 className="display-4 my-2 fw-bold">
          Sundays Are <br />{" "}
          <span
            className="display-4 my-2 fw-bolder"
            style={{ color: "#4A90E2" }}
          >
            For Sandwiches
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
