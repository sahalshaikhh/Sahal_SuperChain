import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer>
        <div className="main-footer w-[100%] flex justify-between items-start py-20 px-60">
          <div className="left flex flex-col gap-8">
            <div className="logo text-white font-bold ">SAHAL</div>
            <div className="flex gap-4">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </div>
          </div>
          <div className="right flex gap-20 justify-evenly items-start">
            <div className="about flex flex-col gap-4">
              <h1 className="text-[#3a0723] font-bold text-lg">ABOUT</h1>
              <ul className="text-[#0e1015] font-bold text-lg flex flex-col gap-2">
                <li>
                  <a href="/">Meet the team</a>
                </li>
                <li>
                  <a href="/">Backers</a>
                </li>
                <li>
                  <a href="/">Terms</a>
                </li>
              </ul>
            </div>
            <div className="build flex flex-col gap-4">
              <h1 className="text-[#3a0723] font-bold text-lg">BUILD</h1>
              <ul className="text-[#0e1015] font-bold text-lg">
                <li>
                  <a href="/">Pricing Data</a>
                </li>
                <li>
                  <a href="/">Superchain Token</a>
                </li>
              </ul>
            </div>
            <div className="community flex flex-col gap-4">
              <h1 className="text-[#3a0723] font-bold text-lg">COMMUNITY</h1>
              <ul className="text-[#0e1015] font-bold text-lg">
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Twitter</a>
                </li>
                <li>
                  <a href="/">Linkedin</a>
                </li>
                <li>
                  <a href="/">Github</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
