import React from "react";

export default function Spinner(...props){
    return (
        <div>
            <span className={`loading loading-bars text-accent ${props.className}`}></span>
        </div>
    );
}