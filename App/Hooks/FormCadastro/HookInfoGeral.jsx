import { useState } from "react";

export function HookInfoGeral(Step) {
    
    const [currentState, SetCurrentState] = useState(0)


    return{
        currentState,
        currentComponent: Step[currentState]
    }

}

export default HookInfoGeral