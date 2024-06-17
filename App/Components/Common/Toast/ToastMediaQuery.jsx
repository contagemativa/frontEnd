import React from "react";
import { ToastContainer } from "react-toastify";

export default function ToastMediaQuery() {
  return (
    <>
        <ToastContainer
          position="bottom-right"
          autoClose={2300}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          limit={2}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
    </>
  );
}
