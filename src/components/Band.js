import React, { Component } from 'react';

class Band extends Component {

  render(props) {
    return(
      <div>
        <li>{props.band.text} <button onClick={() => this.props.delete(props.band.id)}>X</button></li>
      </div>
    );
  }
};

export default Band;
