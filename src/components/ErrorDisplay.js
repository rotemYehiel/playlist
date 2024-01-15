import React from "react";
import { ErrorLayout } from "../styleComponents/ErrorDisplay";

const ErrorDisplay = ({ errorMsg }) => {
  return (
    <ErrorLayout>
      <h2>Oops...</h2>
      <h5>{errorMsg?.message}</h5>
    </ErrorLayout>
  );
};

export default ErrorDisplay;
