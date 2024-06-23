/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { User } from "../models/user";
import { SignUpCredentials } from "../network/notes_api";
import * as NotesApi from "../network/notes_api";
import { useForm } from "react-hook-form";
import TextInputField from "./form/TextInputField";
import SignUpModal from "./SignUpModal";
import LoginModal from "./LoginModal";

interface LoginFormProps {
  isVisible: boolean;
  handleClose: () => void;
}

export const LoginForm = ({ isVisible, handleClose }: LoginFormProps) => {
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
          {showLogin && (
            <LoginModal onDismiss={() => {}} OnLoginSuccessful={() => {}} />
          )}
          {showSignUp && (
            <SignUpModal onDismiss={() => {}} OnSignUpSuccessful={() => {}} />
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
export default LoginForm;
