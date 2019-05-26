import React from 'react';

import Info from './Info';
import TeamProj from './TeamProj';
import Quotes from './Quotes';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      quotes: [],
      currQuote: {},
    };
  }

  async componentDidMount() {
    const radicalURL = 'https://raw.githubusercontent.com/timcombs/marx-headmon/master/quotes.json';
    const subalternURL = 'https://raw.githubusercontent.com/timcombs/underrepped_programmer_quotes/master/quotes.json';
    const snarkURL = 'https://raw.githubusercontent.com/timcombs/snarky_software_quotes/master/quotes.json';

    const quotesURLArr = [radicalURL, subalternURL, snarkURL];

    try {
      for (let i = 0; i < quotesURLArr.length; i++) {
        const blob = await fetch(quotesURLArr[i]);
        const text = await blob.text();
        const { quotes } = await JSON.parse(text);
        let holder = this.state.quotes;
        holder.push(quotes);
        this.setState({
          quotes: holder
        })
      }
      let rnd = Math.floor(Math.random() * 3);
      await this.setState({
        currQuote: this.getQuote(this.state.quotes[rnd])
      });
    }catch(err){
      console.log(err);
    }
  }

  handleClick(e) {
    const { quotes } = this.state;
    const clicked = e.target.name;
    let num;


    if (clicked === 'radical') {
      num = 0;
    }else if (clicked === 'subaltern') {
      num = 1;
    }else if (clicked === 'snark') {
      num = 2;
    }

    this.setState({
      currQuote: this.getQuote(quotes[num])
    });
  }

  getQuote(arr) {
    const len = arr.length;
    const rnd = Math.floor(Math.random() * len);
    return arr[rnd];
  }

  render() {
    return (
      <div className="app">
        <Info />
        <Quotes currQuote={this.state.currQuote}
                onClick={(e) => this.handleClick(e)}/>
        <TeamProj />
      </div>
    );
  }
}

export default App;
