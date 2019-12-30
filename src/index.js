import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // the only time direct assignment is valid
    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we called setState, no direct assignment!
        this.setState({ lat: position.coords.latitude });
      },
      error => {
        this.setState({ errorMessage: error.message });
      }
    );
  }

  // React says we have to define render
  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.state.errorMessage}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
