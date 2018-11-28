// not ready yet

import * as React from "react";

interface Props {
  history?: any;
}

class Favourite extends React.Component<Props> {
  onSubmit = (e: React.FormEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    this.props.history.push("/dashboard");
  };
  render() {
    return (
      <div>
        Feature available soon.
        <a href="favourites" onClick={this.onSubmit}>
          <br />Back to dashboard.
        </a>
      </div>
    );
  }
}

export default Favourite;
