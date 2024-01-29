import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const index = () => {
  return (
    <div
      className="py-5 mt-1"
      style={{
        backgroundColor: "#1985D2",
      }}
    >
      <div className="container">
        <div
          className="row"
          style={{
            paddingTop: "2em",
          }}
        >
          <div className="col-sm col-12 text-light d-flex flex-column ">
            <h4 className="border-bottom py-2 ">Location</h4>
            <p className="pt-2 ">Ontario</p>
          </div>
          <div className="col-sm col-12 text-light d-flex flex-column ">
            <h4 className="border-bottom py-2 ">Company</h4>
            <Link to="/story" className="link">
              <p className="pt-2 ">Our story</p>
            </Link>
            <Link to="/vision" className="link">
              <p>Our Vision</p>
            </Link>
            <Link to="/team" className="link">
              <p>Our team </p>
            </Link>
          </div>
          <div className="col-sm col-12 text-light d-flex flex-column ">
            <h4 className="border-bottom py-2 ">Car chaser</h4>
            <p className="py-2 ">The process</p>
            <p>Trade in</p>
            <p>Our process</p>
          </div>
          <div className="col-sm col-12 text-light d-flex flex-column ">
            <h4 className="border-bottom py-2 ">Help center</h4>
            <p className="py-2 ">Contact us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
