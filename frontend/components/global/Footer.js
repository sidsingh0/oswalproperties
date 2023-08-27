import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { GoLocation } from "react-icons/go";
import { MAILCHAIMP } from "../../config";

//SUBSCRIBE FORM
function SubscribeForm({ status, message, onValidated }) {
  let email;
  const submit = (e) => {
    e.preventDefault();
    onValidated({
      EMAIL: email.value,
    });
  };

  return (
    <form>
      <div className="footer__subscribe">
        <input
          ref={(node) => (email = node)}
          type="email"
          required
          placeholder="Your email"
        />
        <button className="button-primary" type="submit" onClick={submit}>
          Subscribe
        </button>
      </div>

      <div className="message col m-10px-t">
        {status === "sending" && (
          <div className=" alert alert-warning">sending...</div>
        )}
        {status === "error" && (
          <div
            className="alert alert-danger"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
      {status === "success" && (
        <div
          className="alert alert-success"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </form>
  );
}

const Footer = () => {
  return (
    <div className="footer footer-padding-t">
      <div className="container">
        <div className="row footer-padding">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="footer__logo">
            <img
                src="/images/oswallogo.png"
                alt="wChoose"
                className="img-fluid"
                height="80"
                style={{height:"80px",zIndex:"1000000",display:"block",padding:"10px"}}
              />            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="footer__content">
              <h3 style={{textAlign:"end"}}>Links</h3>
              <ul style={{display: "flex",alignItems: "end",flexDirection:"column"}}>
                <li>
                  <a href="/">Home</a>
                </li>
                
                <li>
                  <a href="/all-property">Projects</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div className="footer__content">
              <h3 style={{textAlign:"end"}}>Contact</h3>
              <ul style={{display: "flex",alignItems: "end",flexDirection:"column"}}>
                <li style={{textAlign:"end"}}>
                Shop No 21-22-23, Oswal Dream City, BIDCO,Chintupad Road, Palghar(West) 401404  
                </li>
                
                <li>
                  <a href="tel:+917710877777">+91 77108-77777 / 77109-77777</a>
                </li>
                <li>
                  <a href="mailto:oswalgroup9@gmail.com">oswalgroup9@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
        <div className="footer__copyright m-20px-t m-20px-b">
          <div className="row">
            <div className="col-12">
              <p className="m-0 text-center">Oswal Group &copy; 2023 All right reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
