import React from "react";

export default function Select({ ...props }) {
    return (
        <select className={`${props.className}`} onChange={props.onChange} value={props.value}>
            <option key={option.value} value={option.value}>
                {option.label}
            </option>
        </select>
    );
}