import React from "react";
import "./herosection.css";

const HerSection = () => {
  return (
    <>
      <div
        className="herobg"
        style={{
          height: "90vh",
        }}
      >
        <div
          className="d-flex flex-column lh-1 text-center text-light"
          style={{
            paddingTop: "5rem",
          }}
        >
          <p
            style={{
              fontSize: "48px",
              fontWeight: "400",
            }}
          >
            Selling your car
          </p>
          <p
            style={{
              fontSize: "48px",
              fontWeight: "800",
            }}
          >
            Privately is a Hassle{" "}
          </p>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "400",
            }}
          >
            Over 300 dealer are competing for your car.
          </p>
        </div>
      </div>
    </>
  );
};

export default HerSection;
