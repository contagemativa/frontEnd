import React from "react";

export default function Logo({ width, height, ...props }) {
    return (
        <img src="./img/logo-contagem-ativa.png" width={width} height={height} className={props.className}></img>
    )
}