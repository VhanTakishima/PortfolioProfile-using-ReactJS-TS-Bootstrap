/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { User } from "../models/user";
import { SignUpCredentials } from "../network/notes_api";
import * as NotesApi from "../network/notes_api";
import { useForm } from "react-hook-form";
import TextInputField from "./form/TextInputField";

interface SignUpModalProps {
  onDismiss: () => void;
  OnSignUpSuccessful: (user: User) => void;
}

export const SignUpModal = ({
  onDismiss,
  OnSignUpSuccessful,
}: SignUpModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpCredentials>();

  async function onSubmit(credentials: SignUpCredentials) {
    try {
      const newUser = await NotesApi.login(credentials);
      OnSignUpSuccessful(newUser);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="row justify-content-center align-baseline mt-0 ms-4 me-4 mb-3">
        <TextInputField
          name="email"
          label="Email"
          type="email"
          placeholder="Enter Email Address"
          register={register}
          registerOptions={{ required: "Required" }}
          error={errors.email}
        ></TextInputField>
        <TextInputField
          name="username"
          label="Username"
          type="text"
          placeholder="Enter Username"
          register={register}
          registerOptions={{ required: "Required" }}
          error={errors.username}
        ></TextInputField>
        <TextInputField
          name="password"
          label="Password"
          type="password"
          placeholder="Enter Password"
          register={register}
          registerOptions={{ required: "Required" }}
          error={errors.password}
        ></TextInputField>
        <Button
          className="justify-content-center mt-4 w-100"
          variant="primary"
          type="submit"
          disabled={isSubmitting}
        >
          Sign-up
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SignUpModal;
