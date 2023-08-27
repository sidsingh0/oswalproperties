import React from "react";
import SectionTitle from "./global/section-title";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdEngineering } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { FiHelpCircle } from "react-icons/fi";

const WhyChooseUs = () => {
  return (
    <div className="wChoose section-padding section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="wChoose__intro">
              <SectionTitle title="The best construction company around." position="left" />
              <p>
                
Introducing the Oswal Group: A legacy of over 30 years, crafting exceptional properties for sale. Experience the hallmark of quality and expertise in every venture we present.
              </p>
              <img
                src="images/oswalabout.jpeg"
                alt="wChoose"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-6">
            <div className="wChoose__content">
              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <VscWorkspaceTrusted />
                    </div>
                    <h3>Exceptional Expertise</h3>
                    <p>
                    With years of experience, our skilled team of architects, engineers, and craftsmen work in harmony to create structures that stand the test of time.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <MdEngineering />
                    </div>
                    <h3>Sustainable</h3>
                    <p>
                    Embracing modern techniques and sustainable practices, we strive to create buildings that are not only functional but also environmentally responsible.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <TbCertificate />
                    </div>
                    <h3>Quality Craftsmanship</h3>
                    <p>
                    From the choice of materials to the final finishing touches, we uphold the highest standards of craftsmanship, ensuring that each project reflects our dedication to excellence.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="wChoose__content__item">
                    <div className="icon">
                      <FiHelpCircle />
                    </div>
                    <h3>Efficient Management</h3>
                    <p>
                    With a keen eye on details, our management team ensures a seamless and organized construction process, delivering exceptional results every time and no material wasted.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
