React = require('React');
ReactDOM = require('react-dom');
app = require('./app.js');

var store = app.store
function inputValueHandler(event){
	store.dispatch({type: 'ORIGINALAMTCHANGED', 'val':event.target.value});
}
function taxValueHandler(event){
	store.dispatch({type: 'TAXCHANGED', 'val':event.target.value});
}
class RootElement extends React.Component {
	render(){
			return (
				<div>
					<input id='inputVal' onKeyUp={inputValueHandler} />
					<select id='tax' onChange={taxValueHandler}>
						<option value='0'>NOVAT</option>
						<option value='10'>10% VAT</option>
						<option value='20'>20% VAT</option>
					</select>
					<span id='total'>0</span>
				</div>
			);
	}
}
ReactDOM.render(<RootElement/>, document.querySelector('#app'))