// front page of user cards, can be flipped with the button

import * as React from "react";

interface Props {
  avatar: string;
  username: string;
  onClick: any;
}

export default (props: Props): JSX.Element => {
  const divStyle = { minWidth: "300px", maxWidth: "400px" };

  return (
    <div className="card" style={divStyle}>
      <img
        className="card-img-top img-fluid"
        src={props.avatar}
        alt="Card image"
      />
      <div className="card-body">
        <a
          href="/"
          className="btn btn-light col mt-2 w-100 text-center"
          onClick={props.onClick}
        >
          Flip to {props.username} 's details
        </a>
      </div>
    </div>
  );
};
