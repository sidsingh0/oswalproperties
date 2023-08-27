import React from "react";
import Layout from "../components/global/layout";
import InnerPageLayout from "../components/inner-page-layout";
import { CONTACTFROM } from "../config";
import { setupEmailForm } from '../assets/main';

const Contact = () => {
  return (
    <Layout>
      <InnerPageLayout title="Get in touch" />
      <div className="contact">
        <div className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-4 mb-lg-0">
                <div className="contact__info">
                  <h4>Address</h4>
                  <p>Shop No 21-22-23, Oswal Dream City, BIDCO,
Chintupada Road, Palghar West, Palghar 401404 </p>
                </div>
                <div className="contact__info">
                  <h4>Email</h4>
                  <p>oswalgroup9@gmail.com</p>
                  <p>kirtikumargala@gmail.com</p>
                </div>
                <div className="contact__info">
                  <h4>Phone</h4>
                  <a href="tel:+917710877777">+91 77108-77777</a>
                  <br />
                  <a href="tel:+917710977777">+91 77109-77777</a>
                </div>
              </div>
              <div className="col-lg-8">
                <form id="contact-form" method="post" action={CONTACTFROM}>
                  <div className="d-lg-flex gap-lg-3 input">
                    <div className="w-100">
                      <label htmlFor="name">Name</label>
                      <input
                        name="name"
                        id="name"
                        required
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="w-100">
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        required
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="input">
                    <label htmlFor="subject">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      required
                      type="number"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="input">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      type="text"
                      rows="3"
                      placeholder="Message"
                    />
                  </div>
                  <div className="text-center">
                    <button type="button" id="mailbutton" onClick={setupEmailForm} className="button-primary">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
