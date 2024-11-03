import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A passionate developer.",
        imgSrc: "https://img.freepik.com/free-photo/portrait-young-handsome-man_23-2148884355.jpg?t=st=1730120858~exp=1730124458~hmac=be7c8ff7ed38c5d8921796bde14288953494fc64e6cb8f79b368be0376659a67&w=900", 
        profession: "Software Engineer"
      },
      show: false,
      timer: 0
    };
    this.intervalId = null; // To store the interval ID
  }

  componentDidMount() {
    // Start the timer when the component mounts
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000); // Update every second
  }

  componentWillUnmount() {
    // Clear the interval when the component unmounts
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timer } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>
        {show && (
          <div>
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <img src={imgSrc} alt={fullName} />
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since mounted: {timer} seconds</p>
      </div>
    );
  }
}

export default App;