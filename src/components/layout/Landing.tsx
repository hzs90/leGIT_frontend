// default page

import * as React from "react";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mb-4">leGit</h1>
                  <p className="lead"> One more click to go!</p>
                  <hr />
                  <a href="register" className="btn btn-lg btn-info mr-2">
                    Sign Up
                  </a>
                  <a href="login" className="btn btn-lg btn-light">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;
