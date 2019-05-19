import React from 'react';

import Info from './Info';
import TeamProj from './TeamProj';
import ArtProj from './ArtProj';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      currQuote: {},
    };
  }

  async componentDidMount() {
    const marxHeadmonURL = 'https://raw.githubusercontent.com/timcombs/marx-headmon/master/quotes.json';

    try {
      const blob = await fetch(marxHeadmonURL);
      const text = await blob.text();
      const { quotes } = await JSON.parse(text);
      this.setState({
        quotes,
        currQuote: this.getQuote(quotes)
      });
    }catch(err){
      console.log(err);
    }
  }

  getQuote(arr) {
    const len = arr.length;
    const rnd = Math.floor(Math.random() * len);
    return arr[rnd];
  }

  render() {
    return (
      <div className="App">
        <Info />
        <TeamProj />
        <ArtProj />
      </div>
    );
  }
}

export default App;
