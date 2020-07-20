import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import check from "../../../assets/img/green-check.png";
import Progress from "./progress";

class RegistrationFinish extends React.Component {
  render() {
    const current = 6;

    return (
      <div className="wrapper">
        <Progress current={current}/>
        <section id="registration-finish">
          <img alt="" src={check} />
          <div className="text-box">
            <h3>Congratulations !</h3>
            <p>
              You have now finished the registration of our service.
              In the next step, you will be able to start requesting help or
              offer help. If you don't want to do this now you can just close
              the app and do it later.
            </p>
          </div>

          <div className="mt-4">
            <Link to="/request/helpType">
              <Button className="btn btn-block helper-btn">
                Start your first request
              </Button>
            </Link>
            <Link to="/helper/map">
              <Button className="btn btn-block btn-secondary">
                Offer your help
              </Button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default RegistrationFinish;
