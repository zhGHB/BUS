/**
 * Created by luojie on 2018/2/5.
 */

import "../../style/portal/googleMap.scss"

export default class BusDynamicMap extends React.PureComponent{
	constructor(props){
		super(props);
		this.map = null;
	}
	componentDidMount(){
		this.map = new google.maps.Map(document.getElementById('busDynamicMap'), {
			zoom: 4,
			center: {lat: 30.494223, lng: 104.090404}  // Australia.104.090404,30.494223
		});
		var directionsDisplay = new google.maps.DirectionsRenderer({
			draggable: true,
			map: this.map,
		});
		var directionsService = new google.maps.DirectionsService;
		directionsDisplay.addListener('directions_changed',()=>{
			this.computeTotalDistance(directionsDisplay.getDirections());
		});
		this.displayRoute('30.494223,104.090404', '30.016557,103.049088', directionsService,
			directionsDisplay);
	}
	displayRoute(origin, destination, service, display) {
		service.route({
			origin: origin,
			destination: destination,
			travelMode: 'DRIVING',
			waypoints: [{location: {lat:30.207381,lng:103.533454}},{location: {lat:30.093331,lng:103.119659}}, ],
			avoidTolls:true,
			avoidHighways:true,
		}, function(response, status) {
			if (status === 'OK') {
				display.setDirections(response);
			} else {
				alert('Could not display directions due to: ' + status);
			}
		});
	}
	computeTotalDistance(result) {
		var total = 0;
		var myroute = result.routes[0];
		for (var i = 0; i < myroute.legs.length; i++) {
			total += myroute.legs[i].distance.value;
		}
		total = total / 1000;
		// document.getElementById('total').innerHTML = total + ' km';
	}
	render(){
		return(
			<div id = "busDynamicMap" className="bus-dynamic-map">
			</div>
		)
	}
}