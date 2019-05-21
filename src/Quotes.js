import React from 'react';
import './Quotes.css';

function Quotation(props) {
  console.log(props.currQuote.quote);
  return (
    <div>{props.currQuote.quote}</div>
  );
}

function Author(props) {
  return (
    <div>{props.currQuote.author}</div>
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
    <button name='quote' onClick={props.onClick} />
  );
}

function Quotes(props) {
  return (
    <section className='quotesection'>
      <h2 className='title'>Quote of the Moment</h2>
      <Quotation className='quotation' currQuote={props.currQuote}/>
      <Author className='author' currQuote={props.currQuote}/>
      <QuoteButton className='quotebutton' onClick={props.onClick}/>
    </section>
  );
}

export default Quotes;
