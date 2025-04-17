import React from "react";
import "./FormError.css";

interface FormErrorProps {
  message: string;
}
const FormError: React.FC<FormErrorProps> = ({ message }) => {
  if (message !== "") {
    return <span className="error-message">{message}</span>;
  } else {
    return <></>;
  }
};

export default FormError;
