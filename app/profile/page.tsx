// import "./profile.module.css";
import React from "react";

export default function ProfilePage() {
  return (
    <React.Fragment>
      <div className="intro mt-2.5">
        <h1>Welcome to my website!</h1>
      </div>
      <p className="summary">
        You can find my thoughts here.
        <br />
        <br />
        <b>
          And <i>pictures</i>
        </b>{" "}
        of scientists!
      </p>
    </React.Fragment>
  );
}
