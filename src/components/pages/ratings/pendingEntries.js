import { inject, observer } from "mobx-react";
import React from "react";

import PendingEntry from './pendingEntry'

class PendingEntries extends React.Component {

  render() {
  const { pending } = this.props.ratings

    return (
      <div>
      {
        pending.map( entry =>
          ( <PendingEntry key={ entry.id } data={ entry }/> )
        )
      }
      </div>
    )
  }
}

export default inject('ratings')( observer(PendingEntries) );
