import React from "react";

const MobileDownload = () => {
  return (
    <div className="container w-100 my-5 ">
      <div className="row">
        <div className="col-sm col-12 mt-5">
          <h1 className="fw-bold">
            You can also download car chaser mobile app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            con
          </p>
          <h5 style={{ color: "#1985D2" }}>Install Now</h5>
          <div className="d-flex">
            <img src="./appstoreicon.svg" alt="appstoreButton" />
            <img src="./playstoreicon.svg" alt="playstorebutton" />
          </div>
        </div>
        <div className="col-sm col-12 text-center ">
          <img
            src="./mobile.png"
            alt="mobile"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileDownload;
