// back side of the card with more user details, links and button to flip back

import * as React from "react";

interface Props {
  avatar: string;
  username: string;
  repos: string;
  github: string;
  onClick: any;
}

export default (props: Props): JSX.Element => {
  const divStyle = { minWidth: "300px", maxWidth: "400px" };

  return (
    <div className="card mt-5" style={divStyle}>
      <div className="card-body">
        <h4 className="card-title w-100 text-center">{props.username}</h4>
        <a
          href={props.github}
          className="btn btn-outline-info mt-3 mb-2 w-100 text-center"
        >
          GitHUB
        </a>
        <a
          href={props.repos}
          className="btn btn-outline-info col mt-5 mb-2 w-100 text-center"
        >
          Go to repositories
        </a>
        <a
          href="#"
          className="btn btn-outline-info col mt-5 w-100 text-center"
          onClick={props.onClick}
        >
          Flip back
        </a>
      </div>
    </div>
  );
};
