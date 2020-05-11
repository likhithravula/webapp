import React from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import imageHandHoldingRemote from "../../assets/img/hand-holding-remote.png";
import imagePlayButton from "../../assets/img/play.png";

import personHeart from "../../assets/img/person-heart.svg";
import handHeart from "../../assets/img/hand-heart.svg";
import lockHeart from "../../assets/img/lock-heart.svg";

class Home extends React.Component {
  render() {
    return (
      <section id="home">
        <div id="claim">
          <div className="claim-overlay"></div>
          <div className="wrapper">
            <h1>The digital volunteer helper</h1>
            <p>
              Volunteer is a tool that connects volunteers with people who need
              help with getting food, medication and liknande tasks. Click on
              whether you want to help or be helped
            </p>
            <div className="claim-actions">
              <Link to="/enter/helper">
                <Button className="helper-btn">I want to help others</Button>
              </Link>
              <Link to="/enter/receiver">
                <Button className="receiver-btn">I need help</Button>
              </Link>
            </div>
          </div>
        </div>

        <div id="home-video">
          <div class="play">
            <img src={imagePlayButton} />
          </div>
        </div>

        <div className="wrapper">
          <h1>What is the digital volunteer?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            porttitor facilisis massa vel maximus. Nulla facilisi. Aenean vitae
            massa vulputate, auctor metus seLorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut porttitor facilisis massa vel
            maximus. Nulla facilisi.{" "}
          </p>
          <div className="separator"></div>
        </div>

        <div id="home-info">
          <div className="wrapper">
            <h1>How does the digital volunteer work?</h1>
            <div className="home-feature-list">
              <div className="home-feature">
                <img src={personHeart} />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  porttitor facilisis massa vel maximus. Nulla facilisi. Aenean
                  vitae{" "}
                </p>
              </div>
              <div className="home-feature">
                <img src={handHeart} />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  porttitor facilisis massa vel maximus. Nulla facilisi. Aenean
                  vitae{" "}
                </p>
              </div>
              <div className="home-feature">
                <img src={lockHeart} />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  porttitor facilisis massa vel maximus. Nulla facilisi. Aenean
                  vitae{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
