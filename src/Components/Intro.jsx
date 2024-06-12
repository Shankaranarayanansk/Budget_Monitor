import React from "react";
import { Form } from "react-router-dom";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import illustration from "../assets/illustration.jpg";
const Intro = () => {
  return (
    <div className="intro">
      <div>
        <h1>
          Take Control of <span className="accent">Your Salary</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom.Start Monitoring
          From here
        </p>
        <Form method="post">
          <input
            type="text"
            name="userName"
            placeholder="Enter Your Name"
            required
            aria-label="Your Name"
            autoComplete="given-name"
          />
          <button type="submit" className="btn btn--dark"><span>Create Account</span><UserPlusIcon width={20}/></button>
        </Form>
      </div>
      <img src={illustration} alt="" width={600 }/>
    </div>
  );
};

export default Intro;