React = require('React');
ReactDOM = require('react-dom');
function updateTotal(input , tax){
	document.querySelector('#total').innerHTML = Math.round(input *( 1+ tax/100 ));
}
function inputValueHandler(event){
	updateTotal(event.target.value , document.querySelector('#tax').value);
}
function taxValueHandler(event){
	updateTotal( document.querySelector('#inputVal').value, event.target.value );
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