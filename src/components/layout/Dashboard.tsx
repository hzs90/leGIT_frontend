// first page after user authentication
// connected to store to receive authentication data
// buttons to git user list or favourites

import * as React from "react";
import { connect } from "react-redux";

interface Props {
  history?: any;
  auth?: any;
  checkToken?: any;
}
class Dashboard extends React.Component<Props> {
  onSubmitGit = (e: React.FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    this.props.history.push("/gitusers");
  };

  onSubmitFav = (e: React.FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    this.props.history.push("/favourites");
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    if (!isAuthenticated) {
      this.props.history.push("/login");
    }
    return (
      <div>
        <div className="container mt-5 p-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <a
                href="#"
                className="btn btn-lg btn-info mr-2"
                onClick={this.onSubmitGit}
              >
                Search GIT users
              </a>
              <a
                href="favourites"
                className="btn btn-lg btn-light"
                onClick={this.onSubmitFav}
              >
                My favourites
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Dashboard);
