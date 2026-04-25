 import { Component } from "react";

export default class App extends Component {
    onClick = (event) => {
        this.setState({ clickEvent: event });
    };

    logEvent = () => {
        console.log(this.state?.clickEvent?.target ?? 'empty');
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