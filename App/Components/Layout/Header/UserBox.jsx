import React from "react"
import config from "../../../config";

export default function User(){
  return (
    <div tabIndex="0" role="button" className="px-4 py-2 m-1 bg-secondary rounded-2xl bg-opacity-40">
        {config.user}
    </div>
  );
}



