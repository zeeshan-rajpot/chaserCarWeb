import React from "react";
import "./LandingPage.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const index = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
        }}
      >
        <div className="headingMain z-1">Car Chaser</div>
        <div className="headerInfo">
          <img
            src="./mailIcon.svg"
            alt="mail_icon"
            style={{ width: "20px" }}
            className="mb-2 mx-2"
          />
          <p
            style={{
              marginRight: "5px",
            }}
          >
            example@gmail.com
          </p>
          <img
            src="./PhoneIcon.svg"
            alt="mail_icon"
            style={{ width: "20px" }}
            className="mb-2 mx-2"
          />
          <p>+ 09 00 786 01</p>
        </div>
      </div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="m-auto"
              style={{
                fontFamily: "Mulish",
                fontSize: "18px",
                fontWeight: "700",
                color: "#101010",
              }}
            >
              <Nav.Link>The process</Nav.Link>
              <Nav.Link>Trade-in</Nav.Link>
              <Nav.Link>Our promise </Nav.Link>
              <Nav.Link>Dealer network</Nav.Link>
              <Nav.Link
                style={{
                  backgroundColor: "#1985D2",
                  color: "#FFFFFF",
                  clipPath: "polygon(0 0, 100% 0%, 83% 100%, 0% 100%",
                }}
                className="px-4"
              >
                Sign-in
              </Nav.Link>
              <Nav.Link
                style={{
                  border: "1px solid #1985D2",
                  color: "#1985D2",
                  clipPath: "polygon(24% 0, 100% 0%, 100% 100%, 0% 100%)",
                }}
                className="px-3"
              >
                Sign-out
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default index;
