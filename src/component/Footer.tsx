import { useState } from "react";
import "../styling/Footer.css";

export function Footer() {
  let [linkToggle, setLinkToggle] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  let linkToggleHandler = (index: number) => {
    const updatedState = linkToggle.map((item, i) =>
      i === index ? !item : item
    ); // Toggle the value
    setLinkToggle(updatedState);
  };

  function btndisabler() {
    const fbbutton = document.getElementById("button-fb") as HTMLButtonElement;
    const linkedinbutton = document.getElementById(
      "button-linkedin"
    ) as HTMLButtonElement;
    const githubbutton = document.getElementById(
      "button-github"
    ) as HTMLButtonElement;
    const emailbutton = document.getElementById(
      "button-email"
    ) as HTMLButtonElement;

    fbbutton.disabled = true;
    linkedinbutton.disabled = true;
    githubbutton.disabled = true;
    emailbutton.disabled = true;
  }
  function btnenabler() {
    const fbbutton = document.getElementById("button-fb") as HTMLButtonElement;
    const linkedinbutton = document.getElementById(
      "button-linkedin"
    ) as HTMLButtonElement;
    const githubbutton = document.getElementById(
      "button-github"
    ) as HTMLButtonElement;
    const emailbutton = document.getElementById(
      "button-email"
    ) as HTMLButtonElement;

    fbbutton.disabled = false;
    linkedinbutton.disabled = false;
    githubbutton.disabled = false;
    emailbutton.disabled = false;
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

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
            <div className="col-12 justify-content-center">
              <button
                type="button"
                id="button-fb"
                className="btn btn-secondary contactbutton"
                onClick={() => {
                  linkToggleHandler(0);
                  btndisabler();
                }}
              >
                <i className="bi bi-facebook" />
              </button>
              <button
                type="button"
                id="button-github"
                className="btn btn-secondary contactbutton"
                onClick={() => {
                  linkToggleHandler(1);
                  btndisabler();
                }}
              >
                <i className="bi bi-github"></i>
              </button>
              <button
                type="button"
                id="button-linkedin"
                className="btn btn-secondary contactbutton"
                onClick={() => {
                  linkToggleHandler(2);
                  btndisabler();
                }}
              >
                <i className="bi bi-linkedin"></i>
              </button>
              <button
                type="button"
                id="button-email"
                className="btn btn-secondary contactbutton"
                onClick={() => {
                  linkToggleHandler(3);
                  btndisabler();
                }}
              >
                <i className="bi bi-envelope-open-fill"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-4 justify-content-center">
          <div className="row">
            {" "}
            <p className="text-primary">.........</p>
          </div>
          <div className="row">
            {linkToggle[0] && (
              <form className="d-flex ">
                <input
                  className="tocopy form-control form-control-md"
                  type="text"
                  value="www.facebook.com/VhanTakishima"
                  readOnly
                />
                <button
                  className=" btn btn-secondary tocopybuttton bi bi-clipboard"
                  onClick={(event) => {
                    const form = event.currentTarget.closest("form");
                    const input =
                      form?.querySelector<HTMLInputElement>(
                        'input[type="text"]'
                      );
                    if (input) {
                      copyToClipboard(input.value);
                      alert(`Copied to clipboard.`);
                      linkToggleHandler(0);
                      btnenabler();
                    }
                  }}
                ></button>
                <button
                  className=" btn btn-secondary close tocopybuttton bi bi-x-circle-fill"
                  onClick={() => {
                    linkToggleHandler(0);
                    btnenabler();
                  }}
                ></button>
              </form>
            )}
            {linkToggle[1] && (
              <form className="d-flex ">
                <input
                  className="tocopy form-control form-control-md"
                  type="text"
                  value="https://github.com/VhanTakishima"
                  readOnly
                />
                <button
                  className=" btn btn-secondary tocopybuttton bi bi-clipboard"
                  onClick={(event) => {
                    const form = event.currentTarget.closest("form");
                    const input =
                      form?.querySelector<HTMLInputElement>(
                        'input[type="text"]'
                      );
                    if (input) {
                      copyToClipboard(input.value);
                      alert(`Copied to clipboard.`);
                      linkToggleHandler(1);
                      btnenabler();
                    }
                  }}
                ></button>
                <button
                  className=" btn btn-secondary close tocopybuttton bi bi-x-circle-fill"
                  onClick={() => {
                    linkToggleHandler(1);
                    btnenabler();
                  }}
                ></button>
              </form>
            )}
            {linkToggle[2] && (
              <form className="d-flex ">
                <input
                  className="tocopy form-control form-control-md"
                  type="text"
                  value="www.linkedin.com/in/vhantakishima"
                  readOnly
                />
                <button
                  className=" btn btn-secondary tocopybuttton bi bi-clipboard"
                  onClick={(event) => {
                    const form = event.currentTarget.closest("form");
                    const input =
                      form?.querySelector<HTMLInputElement>(
                        'input[type="text"]'
                      );
                    if (input) {
                      copyToClipboard(input.value);
                      alert(`Copied to clipboard.`);
                      linkToggleHandler(2);
                      btnenabler();
                    }
                  }}
                ></button>
                <button
                  className=" btn btn-secondary close tocopybuttton bi bi-x-circle-fill"
                  onClick={() => {
                    linkToggleHandler(2);
                    btnenabler();
                  }}
                >
                  {/* <i className="bi bi-x-circle-fill"></i> */}
                </button>
              </form>
            )}
            {linkToggle[3] && (
              <form className="d-flex ">
                <input
                  className="tocopy form-control form-control-md"
                  type="text"
                  value="vhantakishima@gmail.com"
                  readOnly
                />
                <button
                  className=" btn btn-secondary tocopybuttton bi bi-clipboard"
                  onClick={(event) => {
                    const form = event.currentTarget.closest("form");
                    const input =
                      form?.querySelector<HTMLInputElement>(
                        'input[type="text"]'
                      );
                    if (input) {
                      copyToClipboard(input.value);
                      alert(`Copied to clipboard.`);
                      linkToggleHandler(3);
                      btnenabler();
                    }
                  }}
                ></button>
                <button
                  className=" btn btn-secondary close tocopybuttton  bi bi-x-circle-fill"
                  onClick={() => {
                    linkToggleHandler(3);
                    btnenabler();
                  }}
                ></button>
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
          target="_blank"
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
