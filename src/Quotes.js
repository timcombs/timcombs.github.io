import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGrinWink, faGrin, faGrimace } from '@fortawesome/free-solid-svg-icons';

import './Quotes.css';

library.add(faGrinWink, faGrin, faGrimace);

function Quotation(props) {
  // console.log(props.currQuote.quote);
  return (
    <div className='quotation'>{props.currQuote.quote}</div>
  );
}

function Author(props) {
  return (
    <div className='author'>-{props.currQuote.author}</div>
  );
}

Quotes.defaultProps = {
  currQuote:
  {
    "quote" : "wait for it",
    "author" : "anon"
  }
}

function QuoteButton(props) {
  return (
    <div className='buttonholder'>
    <button className='quotebutton' name='radical' onClick={props.onClick}><FontAwesomeIcon name='radical' icon='grimace' /></button>
    <button className='quotebutton' name='subaltern' onClick={props.onClick}><FontAwesomeIcon name='subaltern' icon='grin' /></button>
    <button className='quotebutton' name='snark' onClick={props.onClick}><FontAwesomeIcon name='snark' icon='grin-wink' /></button>
    </div>
  );
}

function Quotes(props) {
  return (
    <section className='quotesection'>
      <h2 className='title'>Quote of the Moment</h2>
      <Quotation currQuote={props.currQuote}/>
      <Author currQuote={props.currQuote}/>
      <QuoteButton onClick={props.onClick}/>
    </section>
  );
}

export default Quotes;
