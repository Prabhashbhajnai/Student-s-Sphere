import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                Student's HUB is a simple solution for students
                to come near. With simple steps student can upload notes and other
                students can use it.
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Tech Stack</h6>
              <ul class="footer-links">
                <li>Express.js</li>
                <li>Node.js</li>
                <li>React.js</li>
                <li>MongoDB</li>
                <li>Bootstrap</li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>About Us</h6>
              <ul class="footer-links">
                <li>
                  <a
                    target="_blank"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a target="_blank">
                    Github
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; {new Date().getFullYear()} All Rights Reserved
                by Student's HUB team
              </p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
