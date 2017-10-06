import {
  GET_INITIAL_QUOTE
} from '../actions/quote';
import {quotes} from '../config/styles';

const quoteIndex = Math.floor(quotes.length * Math.random());

const initialState = {
  quote: null
}

const setQuote = (state, action) => {
  let q = quotes[quoteIndex];
  if (state.quote === null) {
    return q;
  }
  return state.quote;
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_INITIAL_QUOTE:
      return {
        ...state,
        quote: setQuote(state,action),
      };
    default:
      return state;
  }
};
