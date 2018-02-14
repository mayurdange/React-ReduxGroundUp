var taxCalculation = (state, action) => {
		var calculateTax = (originalAmt, tax)=> Math.round(originalAmt * (1+tax/100))
		switch(action.type) {
		  case 'ORIGINALAMTCHANGED':
			state.originalAmt = action.val;
			state.total = calculateTax( state.originalAmt , state.tax );
			return state;
		  case 'TAXCHANGED':
			state.tax = action.val;
			state.total = calculateTax( state.originalAmt , state.tax );
			return state;
		  default:
			return state;
		}
	}

module.exports = {
	taxCalculation: taxCalculation
}