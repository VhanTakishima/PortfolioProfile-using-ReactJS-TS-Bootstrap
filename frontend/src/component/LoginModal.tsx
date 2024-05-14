/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

interface ModalProps {
  isVisible: boolean;
  handleClose: () => void;
}

export const LoginModal = ({ isVisible, handleClose }: ModalProps) => {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const LoginBtnHandler = () => {
    setShowLogin(!showLogin);
    showSignUp && setShowSignUp(false);
  };
  const SignupBtnHandler = () => {
    setShowSignUp(!showSignUp);
    showLogin && setShowLogin(false);
  };

  return (
    <Modal show={isVisible} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* on click to follow with API routing and stuff  */}
          <Form.Group className="row justify-content-center">
            <Button
              variant={!showSignUp ? "success" : "dark"}
              className="col-5 m-2"
              onClick={LoginBtnHandler}
            >
              Login
            </Button>
            <Button
              variant={!showLogin ? "warning" : "dark"}
              className="col-5 m-2"
              onClick={SignupBtnHandler}
            >
              Sign-Up
            </Button>
          </Form.Group>
          {/* For Login */}{" "}
          {showLogin && (
            <Form.Group className="row justify-content-center align-baseline mt-0 ms-4 me-4 mb-3">
              <Form.Label className="justify-content-center mt-2">
                Username
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
              ></Form.Control>
              <Form.Label className="justify-content-center mt-2">
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
              ></Form.Control>
              <Button className="justify-content-center mt-4" variant="primary">
                Login
              </Button>
            </Form.Group>
          )}
          {/* For Signup */}
          {showSignUp && (
            <Form.Group className="row justify-content-center align-baseline mt-0 ms-4 me-4 mb-3">
              <Form.Label className="justify-content-center mt-2">
                Email
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email Address"
              ></Form.Control>
              <Form.Label className="justify-content-center mt-2">
                Username
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Username"
              ></Form.Control>
              <Form.Label className="justify-content-center mt-2">
                Password
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
              ></Form.Control>
              <Button className="justify-content-center mt-4" variant="primary">
                Sign-up
              </Button>
            </Form.Group>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {showLogin && (
          <Button variant="secondary" onClick={LoginBtnHandler}>
            Nevermind
          </Button>
        )}
        {showSignUp && (
          <Button variant="secondary" onClick={SignupBtnHandler}>
            Nevermind
          </Button>
        )}
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default LoginModal;
