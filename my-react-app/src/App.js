import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  name = 'Juri';

  componentDidMount() {
    this.component.addEventListener('feedbackSubmit', this.onFeedbackSubmit);
  }

  componentWillUnmount() {
    this.component.removeEventListener('feedbackSubmit', this.onFeedbackSubmit);
  }

  onFeedbackSubmit(event) {
    console.log('Got', event.detail);
  }

  handleRef = component => {
    this.component = component;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React meets Angular</h1>
        </header>
        <div className="form-container">
          <feedback-form name={this.name} ref={this.handleRef} />
        </div>
      </div>
    );
  }
}

export default App;
