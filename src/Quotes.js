import React from 'react';
import './Quotes.css';

function Quotation(props) {
  console.log(props.currQuote.quote);
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
    <div>
    <button className='quotebutton' name='quote' onClick={props.onClick} />
    <button className='quotebutton' name='quote' onClick={props.onClick} />
    <button className='quotebutton' name='quote' onClick={props.onClick} />
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
