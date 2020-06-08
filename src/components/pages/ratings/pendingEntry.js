import React from "react";

class PendingEntry extends React.Component {

  render() {
    const { data } = this.props

    return (
      <div onClick={ () => this.openRating }>
        { data.name }
      </div>
    )
  }
}

export default PendingEntry;
