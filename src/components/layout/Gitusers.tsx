// receiving git user data from git api through store
// next page / prev page buttons
// flipping cards with user details

import * as React from "react";
import { connect } from "react-redux";
import { getGitUser } from "../../actions/gitActions";
import FlipCard from "../usercard/FlipCard";

interface Props {
  git?: any;
  getGitUser?: any;
  history?: any;
  auth?: any;
}

interface State {
  page: number;
}

let firstPage = true;
let lastPage = false;

class Gitusers extends React.Component<Props, State> {
  state: State = {
    page: 1
  };

  onLogoutClick(e: React.FormEvent<HTMLAnchorElement>) {
    e.preventDefault();
    this.props.getGitUser();
  }

  handleClickNextPage(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    let prevPage;
    firstPage = false;
    if (this.state.page >= this.props.git.length / 3 - 1) {
      prevPage = this.props.git.length / 3 - 1;
      lastPage = true;
    } else {
      prevPage = this.state.page + 1;
      lastPage = false;
    }
    this.setState({ page: prevPage });
  }

  handleClickPrevPage(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    let nextPage;
    lastPage = false;
    if (this.state.page <= 2) {
      nextPage = 1;
      firstPage = true;
    } else {
      nextPage = this.state.page - 1;
      firstPage = false;
    }
    this.setState({ page: nextPage });
    console.log(this.state.page);
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    if (!isAuthenticated) {
      this.props.history.push("/login");
    }
    const { git } = this.props;

    const firstBlock = this.state.page * 3 - 2;
    const blocks = (
      <div className="row">
        {git.slice(firstBlock, firstBlock + 3).map((gituser, idx) => {
          return (
            <div className="col-sm">
              <li key={gituser.id} className="list-unstyled">
                <FlipCard
                  username={gituser.login}
                  repos={gituser.html_url + "repositories"}
                  github={gituser.html_url}
                  avatar={gituser.avatar_url}
                />
              </li>
            </div>
          );
        })}
        <div className="btn-group-vertical">
          {" "}
          <button
            onClick={this.handleClickNextPage.bind(this)}
            className="btn btn-outline-dark"
            disabled={lastPage}
          >
            Next
          </button>
          <button
            onClick={this.handleClickPrevPage.bind(this)}
            className="btn btn-outline-dark"
            disabled={firstPage}
          >
            Previous
          </button>
        </div>
      </div>
    );

    const placeholder = (
      <div className="navbar-nav m-auto align-middle">
        <a
          href="#"
          onClick={this.onLogoutClick.bind(this)}
          className="btn btn-outline-dark btn-lg "
        >
          Show me what ya got!
        </a>
      </div>
    );

    const divStyle = { minHeight: "500px", minWidth: "800px" };
    return (
      <div className="container mt-5 align-middle" style={divStyle}>
        {git.length > 1 ? blocks : placeholder}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  git: state.git,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getGitUser }
)(Gitusers);
