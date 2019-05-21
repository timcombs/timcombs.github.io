import React from 'react';
import './Quotes.css';

function Quote(props) {
  return (
    <div>
      <div className='quotation'>{props.currQuote.quote}</div>
      <div className='author'>{props.currQuote.author}</div>
    </div>
  );
}

Quote.defaultProps = {
  currQuote:
  {
    "quote" : "wait for it",
    "author" : "anon"
  }
}

function QuoteButton(props) {
  return (
    <button className='quotebutton' name='quote' onClick={props.onClick} />
  );
}

function Quotes(props) {
  return (
    <section className='quotesection'>
      <h2 className='title'>Quote of the Moment</h2>
      <Quote currQuote={props.currQuote}/>
      <QuoteButton onClick={props.onClick}/>
    </section>
  );
}

export default Quotes;
