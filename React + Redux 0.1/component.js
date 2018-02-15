app = require('./app.js');

store = app.store
function inputValueHandler(event){
	store.dispatch({type: 'ORIGINALAMTCHANGED', 'val':event.target.value});
}
function taxValueHandler(event){
	store.dispatch({type: 'TAXCHANGED', 'val':event.target.value});
}
var rootElement = 
	React.createElement('div', {}, 
		React.createElement('input', {id: 'inputVal',onKeyUp: inputValueHandler },  ),
		React.createElement('select', {id: 'tax', onChange: taxValueHandler },
			React.createElement('option', {value : "0"}, 'NOVAT' ),
			React.createElement('option', {value : "10"}, '10% VAT' ),
			React.createElement('option', {value : "20"}, '20% VAT' )
		),
		React.createElement('span', {id:'total'}, "0")
	)
ReactDOM.render(rootElement, document.querySelector('#app'))