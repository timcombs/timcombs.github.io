import React from 'react';
import './App.css';

import Info from './Info';
import TeamProj from './TeamProj';
import ArtProj from './ArtProj';
import Quotes from './Quotes';
import Drops from './Drops';

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
    console.log('starting fetch');

    try {
      const blob = await fetch(marxHeadmonURL);
      const text = await blob.text();
      const { quotes } = await JSON.parse(text);
      this.setState({
        quotes,
        currQuote: this.getQuote(quotes)
      });
      await console.log(this.state);
    }catch(err){
      console.log(err);
    }
  }

  handleClick(e) {
    const { quotes, currQuote: { quote, author } } = this.state;
    const clicked = e.target.name;

    if (clicked === 'quote') {
      this.setState({
        currQuote: this.getQuote(quotes)
      });
    }else{
      alert('oops!');
    }
  }

  getQuote(arr) {
    const len = arr.length;
    const rnd = Math.floor(Math.random() * len);
    return arr[rnd];
  }

  render() {
    return (
      <div>
        <div className="app">
          <Info />
          <Quotes currQuote={this.state.currQuote}
                  onClick={(e) => this.handleClick(e)}/>
          <TeamProj />
          <ArtProj />
        </div>

        {/* <Drops /> */}
      </div>
    );
  }
}

export default App;
