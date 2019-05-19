import React from 'react';
import Info from './Info';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      currQuote: {},
    };
  }

  render() {
    return (
      <div className="App">
        <Info />
      </div>
    );
  }
}

export default App;
