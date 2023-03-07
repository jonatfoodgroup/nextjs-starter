import React, {useState} from "react";
import MultiStepForm from "./MultiStepForm";

const Form = ({
  isMultiStep
}) => {
  return (
    <div>
      <h1>Form</h1>
      {isMultiStep && (
        <MultiStepForm />
      )}
    </div>
  );
}

export default Form;