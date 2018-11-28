// flip card container

import * as React from "react";
import Block from "./Block";
import Details from "./Details";
import ReactCardFlip from "react-card-flip";

interface Props {
  avatar?: any;
  username?: any;
  repos?: any;
  github?: any;
  onClick?: any;
}

interface State {
  isFlipped: boolean;
}

class FlipCard extends React.Component<Props, State> {
  state: State = {
    isFlipped: false
  };

  handleClick(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    const divStyle = { minWidth: "200px" };
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} style={divStyle}>
        <Block
          key="front"
          username={this.props.username}
          avatar={this.props.avatar}
          onClick={this.handleClick.bind(this)}
        />

        <Details
          key="back"
          username={this.props.username}
          repos={this.props.repos}
          github={this.props.github}
          avatar={this.props.avatar}
          onClick={this.handleClick.bind(this)}
        />
      </ReactCardFlip>
    );
  }
}

export default FlipCard;
