/**
 * Created by luojie on 2017/12/28.
 */
export default class PayPal extends React.PureComponent{
	componentDidMount(){
		paypal.Button.render({
			env: 'sandbox', // Or 'sandbox',

			commit: true, // Show a 'Pay Now' button

			style: {
				color: 'gold',
				size: 'small'
			},
			client: {
				sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
				production: '<insert production client id>'
			},
			payment: function(data, actions) {
				/*
				 * Set up the payment here
				 */
				return actions.payment.create({
					payment: {
						transactions: [
							{
								amount: { total: '1000', currency: 'USD' }
							}
						]
					}
				});
			},

			onAuthorize: function(data, actions) {

				// Make a call to the REST api to execute the payment
				return actions.payment.execute().then(function() {
					window.alert('Payment Complete!');
				});
			},

			onCancel: function(data, actions) {
				/*
				 * Buyer cancelled the payment
				 */
			},

			onError: function(err) {
				/*
				 * An error occurred during the transaction
				 */
			}
		}, '#paypal-button');
	}
	render(){
		return(
			<div id="paypal-button">

			</div>
		)
	}
}