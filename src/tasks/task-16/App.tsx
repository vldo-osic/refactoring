 import React, { Component } from "react";

export default class App extends Component {
    onClick = (event) => {
        this.setState({ event });
    });

    logEvent = () => {
        console.log(this.state.event.target);
    };

    render() {
        return (
            <div>
                <button onClick={this.onClick}>click me</button>
                <button onClick={this.logEvent}>log event</button>
            </div>
        );
    }
}