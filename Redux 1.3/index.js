const taxCalreducer = require('./reducers/taxCalculation.js');
var Redux = require('Redux');
var initialState = { 'originalAmt':0 ,  'tax': 0, 'total':0 }
var store = Redux.createStore(taxCalreducer.taxCalculation, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
var render = () => document.getElementById('total').innerHTML = store.getState().total.toString()
store.subscribe( render );
window.store = store;