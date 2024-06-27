import React from "react";
import Spinner from "../Spinner/Spinner";

export default function Overlay({ isVisible }) {
  if (!isVisible) return null;

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <Spinner />
    </div>
  );
}
