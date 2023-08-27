import Link from "next/link";
import React from "react";

const ContactSection = () => {
  const mobileStyle={paddingBottom:"50px"}
  return (
    <div className="contact section-bg">
      <div className="container">
        <div className="row align-items-center pader">
          <div className="col-lg-6">
            <div className="contact__image">
              <img
                src="images/house1.jpg"
                className="contact__image-img"
                alt="hero"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="display-3" style={{fontSize:"3.5rem"}}>Unlock Your Dream Home Today</h1>
            <h3 className="mt-3 fs-5" style={{fontWeight:400}}>
            Crafting Foundations of Trust – Our Construction Firm Stands Out for Quality, Reliability, and Excellence.
            </h3>
            <style>
              {`
            @media screen and (max-width: 768px) {
              pader {
                ${mobileStyle}
              }
            }
          `}
          </style>

            <div className="contact__button mt-5">
              <Link href="/contact" className="button-primary">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
