import React from "react";
import {Link} from "react-router-dom";

import LandingNav from "../landing-nav";
import Footer from "../footer";
import Button from "react-bootstrap/Button";
import imagePlayButton from "../../assets/img/play.png";

import personHeart from "../../assets/img/person-heart.svg";
import handHeart from "../../assets/img/hand-heart.svg";
import lockHeart from "../../assets/img/lock-heart.svg";

class Home extends React.Component {

  render() {

    return (
      <section id="home">
        <LandingNav />
        <div id="hero">
        </div>
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
              <Link to="/welcome">
                <Button className="helper-btn">I want to help others</Button>
              </Link>
              <Link to="/welcome">
                <Button className="receiver-btn">I need help</Button>
              </Link>
            </div>
          </div>
        </div>

        <div id="home-video">
          <div className="play">
            <img alt="" src={imagePlayButton}/>
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
                <img alt="" src={personHeart} />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  porttitor facilisis massa vel maximus. Nulla facilisi. Aenean
                  vitae{" "}
                </p>
              </div>
              <div className="home-feature">
                <img alt="" src={handHeart} />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  porttitor facilisis massa vel maximus. Nulla facilisi. Aenean
                  vitae{" "}
                </p>
              </div>
              <div className="home-feature">
                <img alt="" src={lockHeart} />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  porttitor facilisis massa vel maximus. Nulla facilisi. Aenean
                  vitae{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="roadmap">
          <div className="wrapper">
            <h2>Roadmap</h2>
            <div className="roadmap-feature-list">
              <div className="roadmap-feature">
                <h5>Milestone</h5>
                <h6 className="roadmap-date" >01.01.2020</h6>
                <div className="separator"></div>
              </div>
              <div className="roadmap-feature">
                <h5>Milestone</h5>
                <h6 className="roadmap-date" >02.01.2020</h6>
                <div className="separator"></div>
              </div>
              <div className="roadmap-feature">
                <h5>Milestone</h5>
                <h6 className="roadmap-date" >03.01.2020</h6>
                <div className="separator"></div>
              </div>
              <div className="roadmap-feature">
                <h5>Milestone</h5>
                <h6 className="roadmap-date" >04.01.2020</h6>
                <div className="separator"></div>
              </div>
            </div>
          </div>
        </div>

        <Footer />

      </section>
    );
  }
}

export default Home;
