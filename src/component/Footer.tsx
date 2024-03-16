import { useState } from "react";
import "../styling/Footer.css";

export function Footer() {
  let [fbTogggle, setFbToggle] = useState(false);
  return (
    <footer className="page-footer bg-primary text-body-emphasis ">
      <div className="container-fluid text-center mx-1 my-1 py-3"></div>
      <div className="row ml-1 align-items-start">
        <div className="col-5 mx-4">
          <div className="row">
            <h4 className="text-body-emphasis" id="contact">
              Contact with the following links
            </h4>
          </div>
          <div className="row">
            <div className="col-12">
              <button
                type="button"
                className="btn btn-secondary contactbutton"
                onClick={() => setFbToggle(!fbTogggle)}
              >
                <i className="bi bi-facebook" />
              </button>
              <button type="button" className="btn btn-secondary contactbutton">
                <i className="bi bi-github"></i>
              </button>
              <button type="button" className="btn btn-secondary contactbutton">
                <i className="bi bi-linkedin"></i>
              </button>
              <button type="button" className="btn btn-secondary contactbutton">
                <i className="bi bi-envelope-open-fill"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-4 justify-content-center">
          <div className="row">
            {" "}
            <p>.........</p>
          </div>
          <div className="row">
            {fbTogggle && (
              <form className="d-flex ">
                <input
                  className="form-control form-control-md"
                  type="text"
                  value="www.facebook.com/VhanTakishima"
                  readOnly
                />
                <button className="btn btn-secondary contactbutton align-items-center">
                  Copy
                </button>
              </form>
            )}
          </div>
        </div>
        <div className="col"></div>
      </div>
      <div className="footer-copyright text-center text-body-emphasis py-3">
        © VhanTakishima 2024{" "}
        <a
          href="https://github.com/VhanTakishima?tab=repositories"
          className="link link-offset-2 link-underline link-underline-opacity-0"
        >
          Check out my github
        </a>
      </div>
      <div className="parafootercontainer">
        <div className="footerlogocontainer">
          {/* <!-- NTS: used icons @ icones.js.org just in case I forgot and I need a link but has a access to github (e.g practical exam when applying) --> */}
        </div>

        {/* <div className="footerfloater">
      <div className="inputContainer">
       <p className="copyNotif"> Link has been copied to clipboard</p>
         <input type="text" name="display" className="linkClipboard" readonly>
         <input type="button" value="Copy to clipboard" onclick="copyToClipboard()">
         <input type="button" value="Go to Link" onclick="goToLink()">
         <input type="button" value="Close" onclick="hideContainer()">
      </div>
   </div> */}
      </div>
    </footer>
  );
}
export default Footer;
