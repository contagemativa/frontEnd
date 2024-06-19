import { useState } from "react";

function useForm(steps) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep < steps.length - 1 ? prevStep + 1 : prevStep));
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  const resetSteps = () => {
    setCurrentStep(0);
  };

  return {
    currentStep,
    currentComponent: steps[currentStep],
    nextStep,
    prevStep,
    resetSteps,
  };
}

export default useForm;
