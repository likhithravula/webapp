import React from "react";

import Pagination from "react-bootstrap/Pagination";

class Progress extends React.Component {
    /*  TODO add links to each step to simplify navigation through registration */
    render() {
        let items = [];

        for (let number = 1; number <= 6; number++) {
            if(number <= this.props.current) {
                items.push(
                    <Pagination.Item page-active key={number} active={number <= this.props.current}>
                        ●
                    </Pagination.Item>,
                );
            } else {
                items.push(
                    <Pagination.Item key={number} active={number <= this.props.current}>
                        ∘
                    </Pagination.Item>,
                );
            }
        }
        return(
            <div id="page-wrapper">
                <p>Step {this.props.current}/6</p>
                <Pagination>{items}</Pagination>
            </div>
        );
    }
}

export default Progress;
