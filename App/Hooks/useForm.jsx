import { useState  } from "react";

function useForm(steps) {

    const [currentStep, setcurrentSetp] = useState(0)


    return{
        currentStep,
        currentComponent: steps[currentStep],
    }


}

export default useForm